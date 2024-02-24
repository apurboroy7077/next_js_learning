type propsType = {
  children: React.ReactNode;
  testmodal: React.ReactNode;
};
const PhotoLayout = ({ children, testmodal }: propsType) => {
  return (
    <>
      <h1>This is Photo Layout</h1>
      {children}
      {testmodal}
    </>
  );
};

export default PhotoLayout;
