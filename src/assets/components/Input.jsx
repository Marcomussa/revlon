// eslint-disable-next-line react/prop-types
const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        flex: 1,
        border: "none",
        fontSize: "18px",
        backgroundColor: "#f1f1f1",
        letterSpacing: "2px",
        padding: "10px",
        borderRadius: '5px'
      }}
    />
  );
};

export default Input;
