// eslint-disable-next-line react/prop-types
const Input = ({ type, name, placeholder, onChange, styles }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        flex: 1,
        border: "1px solid #9c9c9c",
        fontSize: "18px",
        backgroundColor: "#f1f1f1",
        letterSpacing: "2px",
        padding: "13px 10px",
        borderRadius: '5px',
        boxShadow: '7px 12px 25px -12px rgba(31,31,31,0.75)',
        ...styles
      }}
    />
  );
};

export default Input;
