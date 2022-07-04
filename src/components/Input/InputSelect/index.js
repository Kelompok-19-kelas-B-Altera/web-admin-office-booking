import Select from 'react-select';

const InputSelect = ({label, placeholder, options, setChange}) => {

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#3A57E8" : "#D1D5DB",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      borderRadius :'4px',
      padding: '4px',
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
        // defaultValue={selectedOption}
        onChange={setChange}
        placeholder={placeholder}
        isSearchable={true}
        styles={customStyles}
        options={options}
      />
    </div>
  )
}

export default InputSelect;