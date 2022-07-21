import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ContainerHeaderInputButton = ({ children }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      {!isTabletOrMobile ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ContainerHeaderInputButton;
