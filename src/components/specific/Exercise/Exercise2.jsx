import CollapsibleCard from "../../common/Utilities/CollapsibleCard/CollapsibleCard";

const Exercise2 = (name, series, reps, time) => {
  return (
    <CollapsibleCard title={name}>
      <div>
        <p>Series: {series}</p>
        <p>Reps/Tiempo: {reps ? reps : time}</p>
      </div>
      <div>
        <p>Kilos semana 1</p>
        <p>Kilos semana 2</p>
        <p>Kilos semana 3</p>
        <p>Kilos semana 4</p>
      </div>
    </CollapsibleCard>
  );
};

export default Exercise2;
