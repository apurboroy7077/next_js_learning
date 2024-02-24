"use client";
import PhotoDatas from "@/models/DummyPhotoData";
import ar7id from "ar7id";
import { useRouter } from "next/navigation";

const PhotoFeed = () => {
  let router = useRouter();
  let handleClickOnPhoto = (id: string) => {
    router.push(`/photos/${id}`);
  };
  return (
    <>
      <h2>Welcome to Photo Feed</h2>
      <div style={{ display: "flex", gap: "2vw", margin: "20px" }}>
        {PhotoDatas.map((data) => {
          let { src, id } = data;
          return (
            <div
              key={ar7id()}
              style={{
                border: "3px solid black",
                borderRadius: "5px",
                boxShadow: "2px 2px 5px green",
              }}
            >
              <img
                src={src}
                style={{ maxWidth: "30vw" }}
                onClick={() => {
                  handleClickOnPhoto(id);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PhotoFeed;
