const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-center items-center gap-4">
        <div className="rounded-full border-[#202020] border-[1px] bg-[#1E1D1D33]">
          <img
            className="rounded-full object-cover border-[#202020] border-[1px] md:w-[450px] md:h-[450px] w-[300px] h-[300px]"
            src="/Gato.webp"
            alt="Perfil"
          />
        </div>
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">Hola, Soy Jose Luis Guzman</h1>
          <p className="text-lg font-medium text-[#B7B7B7]">
            Full Stack Developer <br />
            JoseLuisOsorioGuzman11@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
