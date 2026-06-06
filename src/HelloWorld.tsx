import ByeBye from "./ByeBye";

const HelloWorld = ({
  title1,
  title2,
  title3 = "Xin Chao",
}: {
  title1: string;
  title2: string;
  title3?: string;
}) => {
  return (
    <>
      <div>
        <h1>{title1}</h1>
        <h2>{title2}</h2>
        <h3>{title3}</h3>
        <ByeBye title1={title1} title2={title2} title3={title3} />
      </div>
    </>
  );
};

export default HelloWorld;
