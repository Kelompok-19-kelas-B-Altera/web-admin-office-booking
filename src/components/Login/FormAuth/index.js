import styles from "./FormAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";


const FormAuth = ({ children, onSubmit }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      <form
        className={isTabletOrMobile ? styles.formMobile : styles.form}
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        { children }
      </form>
    </>
  );
};

export default FormAuth;
