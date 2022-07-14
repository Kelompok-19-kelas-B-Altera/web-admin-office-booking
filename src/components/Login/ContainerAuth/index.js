import styles from "./ContainerAuth.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";


const ContainerAuth = ({ children }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <section className={styles.container}>
      {isTabletOrMobile ? (
        <div className={styles.containerFormMobile}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </section>
  );
};

export default ContainerAuth;
