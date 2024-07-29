import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex fixed z-50 w-screen md:justify-between justify-center items-center h-14 border-b px-6 border-white">
        <Link className="hidden md:block" to="/">Logo</Link>
        <div className="flex justify-between items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/Documentation">Documentación</Link>
          <Link to="Components">Componentes</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
