const ByeBye = ({
  title1,
  title2,
  title3 = "Tạm biệt!",
}: {
  title1: string;
  title2: string;
  title3?: string;
}) => {
  return (
    <p>
      {title1} {title2} {title3}
    </p>
  );
};

export default ByeBye;

