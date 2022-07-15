import styles from "./InputAlert.module.css";
// import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

const InputAlert = ({ message }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      {isTabletOrMobile ? (
        <div className={styles.container} id={message}>
          <img src="/login/warning.svg" alt="warning" width={10.5} height={10.5} className={styles.icon} />
          <p className={styles.messageMobile}>{message}</p>
        </div>
      ) : (
        <div className={styles.container} id={message}>
          <img src="/login/warning.svg" alt="warning" width={19} height={19} className={styles.icon} />
          <p className={styles.message}>{message}</p>
        </div>
      )}
      {/* <div className={styles.container} id={message}>
        <Image src="/warning.svg" alt="warning" width={19} height={19} className={styles.icon} />
        <p className={styles.message}>{message}</p>
      </div> */}
    </>
  );
};

export default InputAlert;
