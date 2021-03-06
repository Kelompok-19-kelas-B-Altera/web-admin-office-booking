import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  InputTextField,
  InputTextArea,
  InputSelect,
  InputDate
} from "../../components";

import { useEffect, useState } from "react";
import axiosInstance from "../../networks/apis";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const AddOffice = () => {
  const optionsFasil = [
    { value : 'Transportasi', label: 'Transportasi'},
    { value : 'Layanan', label: 'Layanan'},
    { value : 'Atraksi', label: 'Atraksi'},
    { value : 'Bisnis', label: 'Bisnis'},
    { value : 'Makanan dan Minuman', label: 'Makanan dan Minuman'},
    { value : 'Pusat Perbelanjaan', label: 'Pusat Perbelanjaan'},
  ]

  const optionTime = () => {
    var jam = 0;
    var temp = []
    for (var i = 0; i < 24; i++){
      i < 10 ? jam =  "0" + i : jam = i 
      temp.push(
        {label : jam + ":00", value : jam + ":00:00"},
      )
    }
    return temp
  }

  const [optionsJam, setOptionsJam] = useState(optionTime)
  const [options, setOptions] = useState([])
  const [fasilTerdekat, setfasilTerdekat] = useState([
    {
      name : "",
      kategori : "",
      jarak : "",
    },
  ])

  const [periode, setPeriode] = useState([
    {
      date : null,
      jamMulai : null,
      jamAkhir : null
    }
  ])

  const [images, setImages] = useState([])
  const [nama, setNama] = useState("")
  const [desc, setDesc] = useState("")
  const [lokasi, setLokasi] = useState(null)
  const [alamat, setAlamat] = useState("")
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(false)
  // const [date, setDate] = useState([null])
  const navigate = useNavigate()

  const handleTambahFasil = () => {
    var temp = [...fasilTerdekat]
    temp.push({
      name : "",
      kategori : {},
      jarak : "",
    })
    setfasilTerdekat(temp)
  }

  const handleHapusFasil = (index) => {
    var temp = [...fasilTerdekat]
    temp.splice(index,1)
    setfasilTerdekat(temp)
  }

  const handleHapusImages = (index) => {
    var temp = [...images]
    temp.splice(index, 1)
    setImages(temp)
  }

  const handleFasilChange = (index, name, value) => {
    var temp = [...fasilTerdekat]
    if (name === "kategori"){
      temp[index][name] = {
        label : value, value : value
      }
    } else {
      temp[index][name] = value
    }
    setfasilTerdekat(temp)
  }

  const handleImages = (e) => {
    // console.log(e.target.files)
    if (e.target.files[0] !== undefined ){
      var temp = [...images]
      Array.from(e.target.files).forEach(file => {
        temp.push(file)
      });
      setImages(temp)
    }
    e.target.value = null
  }

  const handleTambahPeriode = () => {
    var newPeriode = [...periode]
    newPeriode.push(    {
      date : null,
      jamMulai : null,
      jamAkhir : null
    })
    setPeriode(newPeriode)
  }

  const handleHapusPeriode = (index) => {
    var temp = [...periode]
    temp.splice(index,1)
    setPeriode(temp)
  }

  const validasiInput = () => {
    if (nama.length > 5 || desc.length > 5 || alamat.length > 5 || lokasi !== null){
      return true
    } else {
      return false
    }
  }

  const ValidationAndPost = () => {
    if(validasiInput){
      setLoading(true)
      postData()
    }
  }

  const postData = () => {
    var id_building = 0
    var id_facility = 0
    axiosInstance
      .post("/api/v1/building", 
      { 
        "building_name":nama,
        "description":desc,
        "total_room":0,
        "room_space":0,
        "address":alamat,
        "id_complex":lokasi.value
      }, 
      {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`
        }
      })
      .then((res) => {
        id_building = res.data.data.id
        fasilTerdekat.map((data) => {
          if(data.name.length !== 0 || data.kategori.length !== 0 || data.jarak.length !== 0){
            axiosInstance
          .post("/api/v1/facility", 
          {
            "name":data.name,
            "type":data.kategori.value 
          },
          {
            headers : {
              'Authorization' : `Bearer ${Cookies.get("token")}`
            }
          })
          .then((res) => {
            console.log(res.data.data.id)
            id_facility = res.data.data.id
            axiosInstance
            .post("/api/v1/nearby",   
            {
              "id_building":id_building,
              "id_facility":id_facility,
              "distance": parseInt(data.jarak)
            },
            {
              headers : {
                'Authorization' : `Bearer ${Cookies.get("token")}`
              }
            })
            .then((res) => {
              console.log(res)
            })
            .catch((e) => {
              console.log(e)
              setLoading(false)
            })
          })
          .catch((e) => {
            console.log(e)
            setLoading(false)
          })
          }
        })
        images.map((data) => {
          const formData = new FormData();
          formData.append('id_building', id_building);
          formData.append('file', data)
          // console.log(formData)
          axiosInstance({
            method: "post",
            url: "/api/v1/building/image",
            data: formData,
            headers: { 
              'Authorization' : `Bearer ${Cookies.get("token")}`,
              "Content-Type": "multipart/form-data" 
            },
          }).then((res) => {
            console.log(res)
          }).catch((e) => {
            console.log(e)
            setLoading(false)
          })
        })
        periode.map((data) => {
          if (objectIsNotNull(data)) {
            axiosInstance
            .post("/api/v1/schedule", 
            {
              "from_date": data.date[0].toLocaleDateString("en-GB").replaceAll('/', '-') +  " " + data.jamMulai.value,
              "until_date": data.date[1].toLocaleDateString("en-GB").replaceAll('/', '-') +  " " + data.jamAkhir.value,
              "ready":true,
              "booked":false,
              "id_building":id_building
            },
            {
              headers : {
                'Authorization' : `Bearer ${Cookies.get("token")}`
              }
            })
            .then((res) => {
              console.log(res)
              
            })
            .catch((e) => {
              console.log(e)
              setLoading(false)
            })
            
          }
          setLoading(false)
          navigate("/Office/office-list")
        })
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
      })
  }

  useEffect(() => {
    axiosInstance
      .get("/api/v1/complex")
      .then((res) => {
        var newOptions = res.data.data.map((data, index) => {
          return {
            label : data.city,
            value : data.id
          }
        })
        setOptions(newOptions)
      })
      .catch((e) => {
        console.log(e.message)
        var errorMsg = [...error]
        errorMsg.push("Lokasi Failed : " +e.message)
        setError(errorMsg)
      })
  }, [])

  const objectIsNotNull = (object) => {
    return Object.values(object).every(value => {
      if (value === null) {
        return false
      }
    
      return true
    })
  }

  console.log(fasilTerdekat)

  

  return(
    <ContentLayout>
      <ContentHeader title={"Tambah Kantor"}/>
      <ContentContainer>
        <div className="flex justify-between gap-[120px]">
          {/* Left Side */}
          <div className="w-1/2">
            <p className="text-[16px] leading-[18px] font-semibold mb-3">Fasilitas Terdekat</p>
            <InputTextField label={"Nama *"} value={nama} name={"name"} placeholder={"Masukan Nama Kantor"} setChange={(e) => setNama(e.target.value)}/>
            <InputTextArea label={"Deskripsi *"} value={desc} name={"desc"} placeholder={"Kantor ini nyaman dan sangat murah dan berkualitas.."} setChange={(e) => setDesc(e.target.value)}/>
            <InputTextField label={"Alamat *"} value={alamat}  placeholder="Masukan Alamat" setChange={(e) => setAlamat(e.target.value)}/>
            <InputSelect label={"Lokasi *"} value={lokasi}  placeholder="Pilih Lokasi" options={options} setChange={setLokasi}/>
          </div>
          {/* Right Side */}
          <div className="w-1/2">
            <p className="text-[16px] leading-[18px] font-semibold  mb-3">Fasilitas Terdekat</p>
            {/* Fasilitas Terdekat */}
            {
              fasilTerdekat.map((data, index) => ( 
              <div key={index} className="flex justify-around gap-[10px]">
                <InputTextField name={"name"} placeholder={"ex. Bandara Depati Amir"} value={data.name} setChange={(e) => handleFasilChange(index, "name", e.target.value)}/>
                <InputSelect value={data.kategori} placeholder={"Pilih Kategori"} options={optionsFasil} setChange={(e) => handleFasilChange(index, "kategori", e.value)}/>
                <div className="w-[120px]">
                  <InputTextField name={"jarak"} placeholder={"KM"} value={data.jarak} setChange={(e) => handleFasilChange(index, "jarak", e.target.value)}/>
                </div>
                <img src="/trash.svg" alt="trash.svg" className="h-[16px] w-[16px] self-center cursor-pointer" onClick={() => {handleHapusFasil(index)}}/>
              </div>
              ))
            }
            <div className="w-full rounded border border-[#197BEB] border-dashed py-[9px] cursor-pointer" onClick={() => {handleTambahFasil()}}>
              <div className="flex justify-center gap-[10px]">
                <img src="/circle-plus.svg" className="h-[16px] w-[16px]"/>
                <p className="font-semibold text-[12px] leading-[14px] text-[#197BEB] self-center">Tambah Fasilitas/Bangunan</p>
              </div>
            </div>
            {/* periode */}
            <p className="text-[16px] leading-[18px] font-semibold mt-6 mb-3">Perioded Tersedia</p>
            {
              periode.map((data, index) => (
                <div key={index} className="w-full flex justify-around gap-[10px]">
                  <InputDate range={true} date={data.date} setDate={(e) => {
                      var newPeriode = [...periode]
                      newPeriode[index].date = e
                      setPeriode(newPeriode)
                    }}/>
                  <div className="w-[70%]">
                    <InputSelect value={data.jamMulai} disable={data.date === null} options={optionsJam} padding={"0px"} placeholder={"Jam Mulai"} setChange={(e) => {
                      var newPeriode = [...periode]
                      newPeriode[index].jamMulai = e
                      setPeriode(newPeriode)
                    }}/>
                  </div>
                  <div className="w-[70%]">
                    <InputSelect value={data.jamAkhir} disable={data.jamMulai === null} options={optionsJam} padding={"0px"} placeholder={"Jam Selesai"} 
                    optionsDisable={
                      (option)=> {
                        if (data.date === null){
                          return null
                        } else if(data.date[0].toLocaleDateString() === data.date[1].toLocaleDateString()){
                          var tempOption = option.value.split(":", 1)
                          tempOption = parseInt(tempOption[0])
                          var jamMulai = data.jamMulai.value.split(":", 1)
                          jamMulai = parseInt(jamMulai[0])
                          return tempOption <= jamMulai
                        }
                        
                      }
                      }
                    setChange={(e) => {
                      var newPeriode = [...periode]
                      newPeriode[index].jamAkhir = e
                      setPeriode(newPeriode)
                    }}/>
                  </div>
                  <img src="/trash.svg" alt="trash.svg" className="h-[16px] w-[16px] self-center cursor-pointer" onClick={() => {handleHapusPeriode(index)}}/>
                </div>
              ))
            }
            <div className="w-full rounded border border-[#197BEB] border-dashed py-[9px] cursor-pointer" onClick={() => {handleTambahPeriode()}}>
              <div className="flex justify-center gap-[10px]">
                <img src="/circle-plus.svg" className="h-[16px] w-[16px]"/>
                <p className="font-semibold text-[12px] leading-[14px] text-[#197BEB] self-center">Tambah Periode Tersedia</p>
              </div>
            </div>
            {/* Unggah Foto */}
            <p className="text-[16px] leading-[18px] font-semibold mt-6 mb-3">Unggah Foto</p>
            <button className="rounded border-2 border-[#197BEB] flex gap-3 py-[6px] px-6" onClick={() => {document.getElementById("file").click()}}>
              <img src="/flatten-selection.svg"/>
              <p className="font-normal text-[12px] leading-[15px] text-[#197BEB] self-center" style={{ fontStyle : 'normal' }}>Pilih Foto *</p>
            </button>
            <input type="file" id="file" className="hidden" accept="image/*" multiple onChange={(e) => {handleImages(e)}}/>
            {/* Preview Image */}
            {
              images.map((data, index) => (
                <div key={index} className="flex justify-between mt-3 p-3" style={{ border: "1px dashed rgba(7, 7, 35, 0.5)" }}>
                  <div className="flex gap-3">
                    <img src={URL.createObjectURL(data)} className="h-[80px] w-[80px] object-cover"/>
                    <p className="self-center text-[14px] leading-4 font-normal">{data.name}</p>
                  </div>
                  <img src="/trash.svg" alt="trash.svg" className="h-[16px] w-[16px] self-center cursor-pointer" onClick={() => handleHapusImages(index)}/>
                </div>
              ))
            }
           
          </div>
        </div>
        {
          error.length > 0 ? 
          <div className="flex justify-center">
            {
              error.map((data, index) => (
                <p key={index}>{data}</p>
              ))
            }
          </div> 
          : ""
        }
        <div className="flex justify-center mt-8">
        {loading ? 
          <button className="py-[17px] rounded bg-[#197BEB] w-[336px] opacity-50" disabled onClick={() => ValidationAndPost()}>
            <p className="font-bold text-[14px] leading-4 text-white" style={{ fontStyle : "normal" }}>loading</p>
          </button>
          :
          <button className="py-[17px] rounded bg-[#197BEB] w-[336px]" onClick={() => ValidationAndPost()}>
            <p className="font-bold text-[14px] leading-4 text-white" style={{ fontStyle : "normal" }}>Tambah Kantor</p>
          </button>
        }
        </div>
      </ContentContainer>
    </ContentLayout>
  )
}

export default AddOffice;