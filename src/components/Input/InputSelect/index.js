import Select from 'react-select';

const InputSelect = ({label, placeholder}) => {

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

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return(
    <div className="flex flex-col gap-[6px] mb-3 w-full">
      <label className="text-[#070723] text-[14px] leading-4">{label}</label>
      <Select
        // defaultValue={selectedOption}
        // onChange={setSelectedOption}
        placeholder={placeholder}
        isSearchable={true}
        styles={customStyles}
        options={options}
      />
    </div>
  )
}

export default InputSelect;