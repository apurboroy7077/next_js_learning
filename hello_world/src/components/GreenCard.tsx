type propsType = {
  children: React.ReactNode;
};
const GreenCard = ({ children }: propsType) => {
  return (
    <div style={{ backgroundColor: "lawngreen", margin: "1rem" }}>
      {children}
    </div>
  );
};

export default GreenCard;
