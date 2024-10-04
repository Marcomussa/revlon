
// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, name }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      style={{
        flex: 1,
        border: "none",
        fontSize: "18px",
        backgroundColor: "#f1f1f1",
        letterSpacing: "2px",
        padding: "10px",
      }}
    />
  );
};

export default Input;
