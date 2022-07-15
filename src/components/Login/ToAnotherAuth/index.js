import styles from "./ToAnotherAuth.module.css";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useSelector } from "react-redux";

const ToAnotherAuth = ({ label, linkAnother, toAnother }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      {isTabletOrMobile ? (
        <p className={styles.containerToAnotherAuthMobile}>
          {label}{" "}
          <Link href={linkAnother}>
            <a id="to-another">{toAnother}</a>
          </Link>
        </p>
      ) : (
        <div className={styles.containerToAnotherAuth}>
          <p>{label}</p>
          <Link href={linkAnother}>
            <a id="to-another">{toAnother}</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ToAnotherAuth;
