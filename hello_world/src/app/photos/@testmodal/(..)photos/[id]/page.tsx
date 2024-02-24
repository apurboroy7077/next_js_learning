import PhotoDatas from "@/models/DummyPhotoData";

type propsType = {
  params: {
    id: string;
  };
};
const PhotoDetails = ({ params }: propsType) => {
  let id = params.id;
  let imageSrc = PhotoDatas.filter((data) => id == data.id)[0].src;
  return (
    <>
      <div>
        <img
          src={imageSrc}
          style={{
            width: "70%",
            border: "5px solid black",
            borderRadius: "5px",
            margin: "10px",
            boxShadow: "2px 2px 10px black",
          }}
        />
      </div>
    </>
  );
};

export default PhotoDetails;
