import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  InputTextField,
  InputTextArea,
  InputSelect
} from "../../components";

import { useEffect, useState } from "react";
import axiosInstance from "../../networks/apis";
import Cookies from 'js-cookie';
import { useParams } from "react-router-dom";

const EditOffice = () => {
  let { buildingID } = useParams();
  const optionsFasil = [
    { value : 'Transportasi', label: 'Transportasi'},
    { value : 'Layanan', label: 'Layanan'},
    { value : 'Atraksi', label: 'Atraksi'},
    { value : 'Bisnis', label: 'Bisnis'},
    { value : 'Makanan dan Minuman', label: 'Makanan dan Minuman'},
    { value : 'Pusat Perbelanjaan', label: 'Pusat Perbelanjaan'},
  ]

  const [options, setOptions] = useState([])
  const [fasilTerdekat, setfasilTerdekat] = useState([
    {
      name : "",
      kategori : "",
      jarak : "",
    },
  ])
  const [fasilTerdekatDB, setfasilTerdekatDB] = useState([])
  const [imagesDB, setImagesDB] = useState([])
  const [images, setImages] = useState([])
  const [nama, setNama] = useState("")
  const [desc, setDesc] = useState("")
  const [lokasi, setLokasi] = useState("")
  const [alamat, setAlamat] = useState("")
  const [error, setError] = useState([])

  const handleTambahFasil = () => {
    var temp = [...fasilTerdekat]
    temp.push({
      name : "",
      kategori : "",
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
    temp[index][name] = value
    setfasilTerdekat(temp)
  }

  const handleImages = (e) => {
  
    if (e.target.files[0] !== undefined ){
      var temp = [...images]
      Array.from(e.target.files).forEach(file => {
        temp.push(file)
      });
      setImages(temp)
    }
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

  useEffect(() => {
    axiosInstance
      .get("/api/v1/building/" + buildingID, {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`
        }
      }).then((res) => {
        console.log(res.data.data)
        setNama(res.data.data.building_name)
        setAlamat(res.data.data.address)
        setDesc(res.data.data.description)
        setLokasi({
          value : res.data.data.complex.id,
          label : res.data.data.complex.city
        })
        var fasilDB = []
        fasilDB = res.data.data.nearby_facilities.map((data) => {
          return {
            "id": data.id,
            "name": data.name,
            "type": {label : data.type, value : data.type},
            "distance": data.distance
          }
        })
        setfasilTerdekatDB(fasilDB)
        var imageDB = []
        imageDB = res.data.data.images.map((data) => {
          return data
        })
        setImagesDB(imageDB)
      }).catch((e) => {
        console.log(e)
      })
  }, [])


  return(
    <ContentLayout>
      <ContentHeader title={"Edit Kantor"}/>
      <ContentContainer>
        <div className="flex justify-between gap-[120px]">
          {/* Left Side */}
          <div className="w-1/2">
            <p className="text-[16px] leading-[18px] font-semibold mb-3">Fasilitas Terdekat</p>
            <InputTextField label={"Nama *"} value={nama} name={"name"} placeholder={"Masukan Nama Kantor"} setChange={(e) => setNama(e.target.value)}/>
            <InputTextArea label={"Deskripsi *"} value={desc} name={"desc"} placeholder={"Kantor ini nyaman dan sangat murah dan berkualitas.."} setChange={(e) => setDesc(e.target.value)}/>
            <InputTextField label={"Alamat *"} value={alamat}  placeholder="Masukan Alamat" setChange={(e) => setAlamat(e.target.value)}/>
            <InputSelect label={"Lokasi *"} value={lokasi}  placeholder="Pilih Lokasi" options={options} setChange={(e) => setLokasi(e.value)}/>
          </div>
          {/* Right Side */}
          <div className="w-1/2">
            <p className="text-[16px] leading-[18px] font-semibold  mb-3">Fasilitas Terdekat</p>
            {/* Fasilitas Terdekat */}
            {
              fasilTerdekatDB.map((data, index) => (
                <div key={index} className="flex justify-around gap-[10px]">
                  <InputTextField name={"name"} placeholder={"ex. Bandara Depati Amir"} value={data.name} setChange={(e) => handleFasilChange(index, "name", e.target.value)}/>
                  <InputSelect value={data.type} placeholder={"Pilih Kategori"} options={optionsFasil} setChange={(e) => handleFasilChange(index, "kategori", e.value)}/>
                  <div className="w-[120px]">
                    <InputTextField name={"jarak"} placeholder={"KM"} value={data.distance} setChange={(e) => handleFasilChange(index, "jarak", e.target.value)}/>
                  </div>
                  <img src="/trash.svg" alt="trash.svg" className="h-[16px] w-[16px] self-center cursor-pointer" onClick={() => {handleHapusFasil(index)}}/>
                </div>
              ))
            }
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
            {/* Unggah Foto */}
            <p className="text-[16px] leading-[18px] font-semibold mt-6 mb-3">Unggah Foto</p>
            <button className="rounded border-2 border-[#197BEB] flex gap-3 py-[6px] px-6" onClick={() => {document.getElementById("file").click()}}>
              <img src="/flatten-selection.svg"/>
              <p className="font-normal text-[12px] leading-[15px] text-[#197BEB] self-center" style={{ fontStyle : 'normal' }}>Pilih Foto *</p>
            </button>
            <input type="file" id="file" className="hidden" accept="image/*" multiple onChange={(e) => {handleImages(e)}}/>
            {/* Preview Image */}
            {
              imagesDB.map((data, index) => (
                <div key={index} className="flex justify-between mt-3 p-3" style={{ border: "1px dashed rgba(7, 7, 35, 0.5)" }}>
                  <div className="flex gap-3">
                    <img src={data.image_url} className="h-[80px] w-[80px] object-cover"/>
                    <p className="self-center text-[14px] leading-4 font-normal">{data.image_url}</p>
                  </div>
                  <img src="/trash.svg" alt="trash.svg" className="h-[16px] w-[16px] self-center cursor-pointer" onClick={() => handleHapusImages(index)}/>
                </div>
              ))
            }
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
          <button className="py-[17px] rounded bg-[#197BEB] w-[336px]" onClick={() => console.log("test")}>
            <p className="font-bold text-[14px] leading-4 text-white" style={{ fontStyle : "normal" }}>Tambah Kantor</p>
          </button>
        </div>
      </ContentContainer>
    </ContentLayout>
  )
}

export default EditOffice;