type paramsType = {
  params: {
    slug: string[];
  };
};
const page = ({ params }: paramsType) => {
  console.log(params);
  return (
    <>
      <div>
        <h1>Docs Home Page</h1>
      </div>
      {params.slug.map((product) => {
        return <h3>{product}</h3>;
      })}
    </>
  );
};

export default page;
