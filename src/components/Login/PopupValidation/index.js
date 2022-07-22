import styles from "./PopupValidation.module.css";
// import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const PopupValidation = ({ messages, linkTo }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  const { mainMassage, messageToAnotherAuth } = messages;

  return (
    <>
      {isTabletOrMobile ? (
        <p className={styles.validationAlertMobile} id="validation-alert">
          {mainMassage}
        </p>
      ) : (
        <p className={styles.validationAlert} id="validation-alert">
          {mainMassage}
          {/* <Link href={linkTo}>
            <a>{messageToAnotherAuth}</a>
          </Link> */}
        </p>
      )}
    </>
  );
};

export default PopupValidation;
