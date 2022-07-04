

const InputTextField = ({label, type, name, placeholder}) => {
  return(
    <div className="flex flex-col gap-[6px] mb-3 w-full">
      <label className="text-[#070723] text-[14px] leading-4">{label}</label>
      <input 
        type={type}
        name={name} 
        placeholder={placeholder}
        className="p-[10px] rounded w-full focus:outline-none focus:bg-white "
        style={{ border: "1px solid rgba(7, 7, 35, 0.5)" }}
        />
    </div>
  )
}

InputTextField.defaultProps = {
  type: "text",
}

export default InputTextField;