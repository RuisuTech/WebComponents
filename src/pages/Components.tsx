import ListComponent from "../Components/ListComponent";

const Components = () => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col w-full h-auto p-4 gap-4 mt-14">
          <ListComponent link={"/Components/1"} name={"Componente 1"}/>
          <ListComponent link={"/Components/2"} name={"Componente 2"}/>
          <ListComponent link={"/Components/3"} name={"Componente 3"}/>
        </div>
      </div>
    </>
  );
};

export default Components;
