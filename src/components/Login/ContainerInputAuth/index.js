import styles from "./ContainerInputAuth.module.css"
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";



const ContainerInputAuth = ({ children }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <div className={isTabletOrMobile ? styles.containerInputMobile : styles.containerInput}>
    { children }
    </div>
  )
}

export default ContainerInputAuth