import { FiChevronsLeft } from "react-icons/fi";

const Title = ({ title }) => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: "2.3em",
          color: "#8a8b8b",
          style: { verticalAlign: "middle" },
        }}
      >
        <FiChevronsLeft />
      </IconContext.Provider>
      <h4>{title} </h4>
    </div>
  );
};

export default Title;
