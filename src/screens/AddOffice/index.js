import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  InputTextField,
  InputTextArea,
  InputSelect
} from "../../components";

const AddOffice = () => {
  return(
    <ContentLayout>
      <ContentHeader title={"Tambah Kantor"}/>
      <ContentContainer>
        <div className="flex justify-between gap-[120px]">
          {/* Left Side */}
          <div className="w-1/2">
            <p className="text-[16px] leading-[18px] font-semibold mb-3">Fasilitas Terdekat</p>
            <InputTextField label={"Nama *"} name={"name"} placeholder={"Masukan Nama Kantor"}/>
            <InputTextArea label={"Deskripsi *"} name={"desc"} placeholder={"Kantor ini nyaman dan sangat murah dan berkualitas.."}/>
            <InputSelect label={"Lokasi *"} placeholder="Pilih Lokasi"/>
            <InputSelect label={"Kemacatan *"} placeholder="Pilih Kecamatan"/>
          </div>
          {/* Right Side */}
          <div className="w-1/2">
            <p className="text-[16px] leading-[18px] font-semibold  mb-3">Fasilitas Terdekat</p>
            {/* Fasilitas Terdekat */}
            <div className="flex justify-around gap-[10px]">
              <InputTextField name={"Faster"} placeholder={"ex. Bandara Depati Amir"}/>
              <InputSelect placeholder={"Pilih Kategori"}/>
              <div className="w-[120px]">
                <InputTextField name={"jarak"} placeholder={"KM"}/>
              </div>
              <img src="/trash.svg" alt="trash.svg" className="h-[16px] w-[16px] self-center"/>
            </div>
            <div className="w-full rounded border border-[#197BEB] border-dashed py-[9px]">
              <div className="flex justify-center gap-[10px]">
                <img src="/circle-plus.svg" className="h-[16px] w-[16px]"/>
                <p className="font-semibold text-[12px] leading-[14px] text-[#197BEB] self-center">Tambah Fasilitas/Bangunan</p>
              </div>
            </div>
            {/* Unggah Foto */}
            <p className="text-[16px] leading-[18px] font-semibold mt-6 mb-3">Unggah Foto</p>
            <button className="rounded border-2 border-[#197BEB] flex gap-3 py-[6px] px-6">
              <img src="/flatten-selection.svg"/>
              <p className="font-normal text-[12px] leading-[15px] text-[#197BEB] self-center" style={{ fontStyle : 'normal' }}>Pilih Foto *</p>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="py-[17px] rounded bg-[#197BEB] w-[336px]">
            <p className="font-bold text-[14px] leading-4 text-white" style={{ fontStyle : "normal" }}>Tambah Kantor</p>
          </button>
        </div>
      </ContentContainer>
    </ContentLayout>
  )
}

export default AddOffice;