import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ContainerLabelInput = ({ children }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      {!isTabletOrMobile ? (
        <div style={{ maxWidth: "525px", width: "100%" }}>{children}</div>
      ) : (
        <div style={{ width: "100%", marginBottom: "12px" }}>{children}</div>
      )}
    </>
  );
};

export default ContainerLabelInput;
