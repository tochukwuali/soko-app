import { FiCheck, FiTarget, FiPlus } from "react-icons/fi";
import { IconContext } from "react-icons";
import {
  IoFilterCircleOutline,
  IoLocationOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { BsFileText } from "react-icons/bs";
import { GiPlainCircle } from "react-icons/gi";

export const FileIcon = () => {
  return (
    <IconContext.Provider
      value={{
        size: "1.3em",
        color: "#6e6e6e",
        style: { marginRight: "10px" },
      }}
    >
      <BsFileText />
    </IconContext.Provider>
  );
};

export const CheckIcon = ({ size }) => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: size,
          color: "#fff",
        }}
      >
        <FiCheck />
      </IconContext.Provider>
    </div>
  );
};

export const LocationIcon = () => {
  return (
    <IconContext.Provider
      value={{
        size: "1.3em",
        color: "#6e6e6e",
        style: { marginRight: "10px" },
      }}
    >
      <IoLocationOutline />
    </IconContext.Provider>
  );
};

export const StoreFrontIcon = () => {
  return (
    <IconContext.Provider
      value={{
        size: "2.5em",
        color: "#6e6e6e",
      }}
    >
      <IoStorefrontOutline /> <span>Abhi's Store</span>
    </IconContext.Provider>
  );
};

export const FilterIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: "#6e6e6e",
      }}
    >
      <IoFilterCircleOutline />
    </IconContext.Provider>
  );
};

export const CircleIconB = () => {
  return (
    <IconContext.Provider
      value={{
        size: ".8em",
        color: "#2666ee",
        style: { marginLeft: "-1rem" },
      }}
    >
      <GiPlainCircle /> <small> Shipped </small>
    </IconContext.Provider>
  );
};

export const CircleIconO = () => {
  return (
    <IconContext.Provider
      value={{
        size: ".8em",
        color: "orange",
        style: { marginLeft: "-1rem" },
      }}
    >
      <GiPlainCircle /> <small> Shipped </small>
    </IconContext.Provider>
  );
};

export const TargetIcon = () => {
  return (
    <IconContext.Provider
      value={{
        size: "2.5em",
        color: "red",
      }}
    >
      <FiTarget /> <span>Target</span>
    </IconContext.Provider>
  );
};

export const PlusIcon = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          size: "1.2em",
          color: "#2666ee",
          style: { verticalAlign: "middle" },
        }}
      >
        <FiPlus />
      </IconContext.Provider>
    </div>
  );
};