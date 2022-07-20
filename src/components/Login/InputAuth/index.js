import styles from "./InputAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import InputAlert from "../InputAlert";
import { useState } from "react";

const InputAuth = ({ type, id, placeholder, name, value, onChange, validators, alertMessage }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  const [theInputValid, allValid] = validators;

  let [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {isTabletOrMobile ? (
        <>
          <div className={styles.containerMobile}>
            <input
              type={showPassword ? "text" : type}
              id={id}
              placeholder={placeholder.toLowerCase()}
              className={`${styles.inputMobile} ${
                allValid !== "" && !theInputValid && styles.error
              }`}
              name={name}
              value={value}
              onChange={(e) => {
                onChange(e);
              }}
            />
            {type === "password" && (
              <img
                src="/login/eye-slashed.svg"
                alt="eye-slashed"
                className={styles.eyeMobile}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {allValid !== "" && !theInputValid && <InputAlert message={alertMessage} />}
        </>
      ) : (
        <>
          <div className={styles.container}>
            <input
              type={showPassword ? "text" : type}
              id={id}
              className={`${styles.input} ${allValid !== "" && !theInputValid && styles.error}`}
              name={name}
              value={value}
              onChange={(e) => {
                onChange(e);
              }}
            />
            {type === "password" && (
              <img
                src="/login/eye-slashed.svg"
                alt="eye-slashed"
                className={styles.eye}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {allValid !== "" && !theInputValid && <InputAlert message={alertMessage} />}
        </>
      )}
    </>
  );
};

export default InputAuth;
