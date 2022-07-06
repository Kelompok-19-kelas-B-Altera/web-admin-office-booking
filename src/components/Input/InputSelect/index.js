import Select from 'react-select';

const InputSelect = ({label, placeholder, options, setChange, value, disable, padding}) => {

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: disable ? "#F1F1F1" : "white",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#3A57E8" : "#F1F1F1",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      borderRadius :'4px',
      padding: padding,
      width : '100%'
    }),
    placeholder: (base) => ({
        ...base,
        color: "gray",
    }),
    
  };

  return(
    <div className="flex flex-col gap-[6px] mb-3 w-full">
      <label className="text-[#070723] text-[14px] leading-4">{label}</label>
      <Select
        defaultValue={value}
        onChange={setChange}
        placeholder={placeholder}
        isSearchable={true}
        styles={customStyles}
        options={options}
        isDisabled={disable}
      />
    </div>
  )
}

InputSelect.defaultProps = {
  disable : false,
  padding : '4px'
}

export default InputSelect;