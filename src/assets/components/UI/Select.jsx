import React from "react";
import styles from "./Select.module.scss";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div>
      <div className={styles.sort}>
        <hr className={styles.hrLine} />
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option disabled value="">
            {defaultValue}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
