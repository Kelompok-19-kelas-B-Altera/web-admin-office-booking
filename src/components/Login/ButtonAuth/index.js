import styles from "./ButtonAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";


const ButtonAuth = ({ label, loading }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      <button
        type="submit"
        className={`${isTabletOrMobile ? styles.buttonMobile : styles.button} ${
          loading && styles.buttonUnable
        }`}
        id="button-submit"
      >
        {label}
      </button>
    </>
  );
};

export default ButtonAuth;
