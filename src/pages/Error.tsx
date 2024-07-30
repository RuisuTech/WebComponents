const Error = () => {
    return (
      <>
        <div className="flex flex-col h-screen w-screen justify-center items-center gap-4">
          <div className="rounded-full border-[#202020] border-[1px] bg-[#1E1D1D33]">
            <img
              className="rounded-full object-cover border-[#202020] border-[1px] md:w-[450px] md:h-[450px] w-[350px] h-[350px]"
              src="/Gato.webp"
              alt="Perfil"
            />
          </div>
          <div className="flex flex-col text-center gap-4">
            <h1 className="text-4xl md:text-5xl font-bold">Hola, Soy Jose Luis Guzman</h1>
            <p className="text-lg font-medium md:text-left text-[#828282]">
              Esta pagina no existe <br />
              Vuelve al Home :D
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Error;