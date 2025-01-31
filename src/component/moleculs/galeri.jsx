import React from "react";

const galleryImages = [
  "/images/Galeri/galeri4.jpeg",
  "/images/Galeri/galeri6.jpeg",
  "/images/Galeri/galeri13.jpeg",
  "/images/Galeri/galeri2.jpeg",
  "/images/Galeri/galeri7.jpeg",
  "/images/Galeri/galeri14.jpeg",
  "/images/Galeri/galeri15.jpeg",
  "/images/Galeri/galeri1.jpeg",
  "/images/Galeri/galeri3.jpeg",
  "/images/Galeri/galeri5.jpeg",
  "/images/Galeri/galeri8.jpeg",
];

const GalleryPage = () => {
  return (
    <div className="my-2  px-[4px] md:my-8">
      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center">
        {/* Judul Galeri */}
        <div className="w-full bg-gradient-to-tr from-stone-900 to-red-700 text-star p-4 py-8 rounded-lg mb-4 text-left">
          <h2 className="text-5xl font-bright text-secondary leading-xl">
            Galeri Warung <br /> Kopi Mbah <br /> Redjo
          </h2>
        </div>

        {/* Galeri Swipe */}
        <div className="w-full overflow-x-auto flex snap-x snap-mandatory gap-4 px-[4px]">
          {galleryImages.map((src, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              <img
                className="w-64 h-48 object-cover rounded-lg"
                src={src}
                alt={`gallery-photo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & Desktop View */}
      <div className="hidden md:grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3 px-4">
        <div className="grid gap-4">
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri4.jpeg" alt="gallery-photo" />
          </div>
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri6.jpeg" alt="gallery-photo" />
          </div>
          {/* Container Judul di Sudut Kiri Bawah */}
          <div className="w-full">
            <div className="w-full bg-gradient-to-tr from-stone-900 to-red-700 text-star p-4 rounded-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bright p-3 text-secondary">
                Galeri Warung <br /> Kopi Mbah <br /> Redjo
              </h2>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri13.jpeg" alt="gallery-photo" />
          </div>
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri2.jpeg" alt="gallery-photo" />
          </div>
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri7.jpeg" alt="gallery-photo" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri14.jpeg" alt="gallery-photo" />
          </div>
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri15.jpeg" alt="gallery-photo" />
          </div>
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri1.jpeg" alt="gallery-photo" />
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri3.jpeg" alt="gallery-photo" />
          </div>
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri5.jpeg" alt="gallery-photo" />
          </div>
          <div>
            <img className="w-full h-40 md:h-52 lg:h-auto rounded-lg object-cover object-center" src="/images/Galeri/galeri8.jpeg" alt="gallery-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
