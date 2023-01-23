const InputField = ({ required, value, onChange, type, placeholder }) => {
  return (
    <input
      className="m-4 md:mx-4 border rounded border-grey-300 flex justify-end"
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};

export default InputField;
