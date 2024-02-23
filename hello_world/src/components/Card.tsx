type propsType = {
  children: React.ReactNode;
};

const TheRedCard = ({ children }: propsType) => {
  return (
    <div style={{ backgroundColor: "red", padding: "1rem" }}>{children}</div>
  );
};

export default TheRedCard;
