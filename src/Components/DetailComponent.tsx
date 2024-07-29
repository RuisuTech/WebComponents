interface Datos {
    titulo: string;
}

const DetailComponent = ({titulo}:Datos) => {
  return (
    <>
      <div className="flex">
        <div className="mt-14">
          <h1>{titulo}</h1>
        </div>
      </div>
    </>
  );
};

export default DetailComponent;
