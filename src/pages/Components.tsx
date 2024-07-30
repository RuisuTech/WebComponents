import ListComponent from "../Components/ListComponent";

const Components = () => {
  return (
    <>
      <div className="flex">
        <div className="flex justify-center flex-wrap h-auto px-4 gap-4 mt-20">
          <ListComponent link={"/Components/1"} name={"Carrousel"} />
          <ListComponent link={"/Components/2"} name={"Componente 2"} />
          <ListComponent link={"/Components/3"} name={"Componente 3"} />
          <ListComponent link={"/Components/4"} name={"Componente 4"} />
          <ListComponent link={"/Components/3"} name={"Componente 5"} />
          <ListComponent link={"/Components/4"} name={"Componente 6"} />
        </div>
      </div>
    </>
  );
};

export default Components;
