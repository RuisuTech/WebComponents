import { Link } from "react-router-dom";

interface Datos {
  name: string;
  link: string;
}

const ListComponent = ({name, link}:Datos) => {
  return (
    <>
      <div className="flex items-center p-4 h-auto w-full border-white border ">
        <Link to={link}>{name}</Link>
      </div>
    </>
  );
};

export default ListComponent;