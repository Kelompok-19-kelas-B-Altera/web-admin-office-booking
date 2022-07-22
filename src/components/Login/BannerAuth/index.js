import styles from "./BannerAuth.module.css"
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";


const BannerAuth = ({ src, alt }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return <>{isTabletOrMobile ? <></> : <img src={src} alt={alt} className={styles.image} />}</>;
};

export default BannerAuth;
