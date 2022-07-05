

const InputTextArea = ({label, name, placeholder}) => {
  return(
    <div className="flex flex-col gap-[6px] mb-3 w-full">
      <label className="text-[#070723] text-[14px] leading-4">{label}</label>
        <textarea 
          placeholder={placeholder} 
          name={name}
          className="p-[10px] rounded w-full focus:outline-none focus:bg-white"
          style={{ border: "1px solid rgba(7, 7, 35, 0.5)" }}
          rows="7"
        >
          
        </textarea>
    </div>
  )
}

export default InputTextArea;