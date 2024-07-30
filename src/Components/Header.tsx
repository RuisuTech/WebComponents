import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex fixed z-50 w-screen justify-between items-center h-14 border-b px-6 border-white">
        <Link className="hover:font-bold duration-150" to="/">Home</Link>
        <div className="flex justify-between items-center gap-4">
          <Link className="w-28 text-right hover:font-bold" to="/Documentation">Documentación</Link>
          <Link className="w-28 text-right hover:font-bold" to="Components">Componentes</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
