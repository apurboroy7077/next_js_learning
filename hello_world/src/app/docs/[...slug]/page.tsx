import ar7id from "ar7id";

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
        return <h3 key={ar7id()}>{product}</h3>;
      })}
    </>
  );
};

export default page;
