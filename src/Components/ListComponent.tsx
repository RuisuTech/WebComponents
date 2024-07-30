import { Link } from "react-router-dom";

interface Datos {
  name: string;
  link: string;
}

const ListComponent = ({ name, link }: Datos) => {
  return (
    <>
      <Link
        className="flex justify-center items-center p-4 h-auto w-full md:w-[500px] border-white border hover:font-bold"
        to={link}
      >
        {name}
      </Link>
    </>
  );
};

export default ListComponent;
