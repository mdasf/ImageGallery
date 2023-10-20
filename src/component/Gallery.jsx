import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GridItem from "./GridItem";

import useFetch from "../hooks/useFetch";
import Popup from "./Popup";
import Loading from "./Loading";

function Gallery({ searchQuery }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageId, setModalImageId] = useState("");

  const query = searchQuery ? `/search/photos?query=${searchQuery}` : "/photos";
  const { data, loading, error } = useFetch(query);

  const images = searchQuery ? data?.results : data;
  console.log(data, images);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (images && images.length === 0)
    return (
      <div className="w-full h-screen flex flex-col gap-2 justify-center items-center dark:bg-[#232323] font-montserrat font-semibold text-xl text-center text-[#A7A7A7] dark:text-[#E5E5E5]">
        <span>{`Oops! No images for \'${searchQuery}\'`}</span>
      </div>
    );

  isModalOpen
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "auto");

  return (
    images && (
      <div>
        <section className="px-20 py-10 w-full max-w-[1400px] mx-auto z-10 ">
          {searchQuery ? (
            <h1 className="pb-10 text-4xl capitalize font-semibold font-montserrat dark:text-white">
              {searchQuery}
            </h1>
          ) : (
            ""
          )}

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="30px">
              {images.map((image) => {
                return (
                  <GridItem
                    key={image.id}
                    image={image}
                    setIsModalOpen={setIsModalOpen}
                    setModalImageId={setModalImageId}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </section>
        {isModalOpen && (
          <div
            className="bg-black/80 fixed top-0 w-full h-full z-100"
            onClick={() => setIsModalOpen(false)}
          >
            <Popup id={modalImageId} setIsModalOpen={setIsModalOpen} />
          </div>
        )}
      </div>
    )
  );
}

export default Gallery;
