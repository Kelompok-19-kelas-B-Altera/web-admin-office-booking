import styles from "./HeaderAuth.module.css";
import { useMediaQuery } from "react-responsive";
import PopupValidation from "../PopupValidation";
import { useSelector } from "react-redux";

const HeaderAuth = ({ title, titleMobile, validators, messages, linkTo }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });
  const [isUserExist, condition] = validators;
  const [mainMassage, messageToAnotherAuth] = messages;

  return (
    <>
      {isTabletOrMobile ? (
        <header className={styles.headerMobile}>
          <h1>{titleMobile}</h1>
          {isUserExist === condition && (
            <>
              <PopupValidation messages={{ mainMassage, messageToAnotherAuth }} linkTo={linkTo} />
            </>
          )}
        </header>
      ) : (
        <>
          <h1 className={styles.title}>{title}</h1>
          {isUserExist === condition && (
            <>
              <PopupValidation messages={{ mainMassage, messageToAnotherAuth }} linkTo={linkTo} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default HeaderAuth;
