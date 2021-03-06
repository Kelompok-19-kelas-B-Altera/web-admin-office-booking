

const InputTextArea = ({label, name, placeholder, setChange, disable, value}) => {
  return(
    <div className="flex flex-col gap-[6px] mb-3 w-full">
      <label className="text-[#070723] text-[14px] leading-4">{label}</label>
        <textarea 
          placeholder={placeholder} 
          name={name}
          className={`${disable ? "bg-[#F1F1F1] text-[#070723]/50 border-gray-300" : "bg-white border-[#F1F1F1]"} border-[1px] p-[10px] rounded w-full focus:outline-none focus:bg-white focus:border-[#3A57E8] resize-none`}
          // style={{ border: "1px solid rgba(7, 7, 35, 0.5)" }}
          rows="7"
          onChange={setChange}
          value={value}
        >
          {value}
        </textarea>
    </div>
  )
}

InputTextArea.defaultProps ={
  disable : false,
}

export default InputTextArea;