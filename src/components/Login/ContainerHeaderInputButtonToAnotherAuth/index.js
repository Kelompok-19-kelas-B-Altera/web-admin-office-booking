import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ContainerHeaderInputButtonToAnotherAuth = ({ children }) => {
  const maxWidth = useSelector((state) => state.mediaQuery.maxWidth);
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${maxWidth}px)` });

  return (
    <>
      {!isTabletOrMobile ? (
        <div
          style={{
            width: "100%",
            maxHeight: "826px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {children}
        </div>
      ) : (
        <> {children}</>
      )}
    </>
  );
};

export default ContainerHeaderInputButtonToAnotherAuth;
