import { FaChevronDown } from 'react-icons/fa'; // Importamos la flecha hacia abajo

/* eslint-disable react/prop-types */
const Select = ({ options, name }) => {
  return (
    <div className="col-md-12" style={{ position: 'relative' }}>
      <select
        name={name}
        id="store"
        className="form form-control"
        style={{
          flex: 1,
          border: 'none',
          fontSize: '18px',
          backgroundColor: '#f1f1f1',
          letterSpacing: '2px',
          padding: '10px',
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Flecha hacia abajo usando react-icons */}
      <FaChevronDown
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          pointerEvents: 'none',
          transform: 'translateY(-50%)',
          fontSize: '18px',
          color: '#000',
        }}
      />
    </div>
  );
};

export default Select;
