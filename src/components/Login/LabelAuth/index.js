import styles from "./LabelAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";


const LabelAuth = ({ label }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <label
      htmlFor={label.toLowerCase()}
      className={isTabletOrMobile ? styles.emailLabelMobile : styles.emailLabel}
    >
      {label.toLowerCase()}
    </label>
  );
};

export default LabelAuth;
