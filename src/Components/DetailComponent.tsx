import { useParams } from "react-router-dom";
import data from "../data/data.json";

interface ComponentData {
  title: string;
  description: string;
  code: string;
}

const DetailComponent = () => {
  const { id } = useParams<{ id?: string }>();

  const componentData: { [key: string]: ComponentData } = data;

  const details =
    id && componentData[id]
      ? componentData[id]
      : {
          title: "Componente desconocido",
          description: "No hay descripción disponible.",
          code: "No hay código disponible.",
        };

  return (
    <>
      <div className="flex w-screen">
        <div className="flex w-full flex-col px-4 mt-20">
          <h1 className="font-bold text-2xl">{details.title}</h1>
          <p className="text-xl">{details.description}</p>
          <div className="border-white border p-4 my-4 rounded">
            <pre className="">{details.code}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailComponent;
