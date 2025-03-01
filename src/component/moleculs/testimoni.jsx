import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Wijaya",
    feedback:
      "Tempatnya unik. Satu satunya di Ungaran sepertinya cafe dengan konsep seperti ini",
    image: "/images/menu/Testisatu.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Aisyah",
    feedback: "V60 nya enak banget! Beans yang dipakai bener-bener beragam",
    image: "/images/menu/Testidua.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Lestari",
    feedback:
      "Street coffe tapi kulitas bintang lima, asli harganya murah banget banget",
    image: "/images/menu/Testidua.png",
    rating: 5,
  },
];

const TestimonialPage = () => {
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };

  const renderTestimonialCards = testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="bg-secondary shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start md:text-left text-center mx-2 md:mx-8 my-20"
    >
      {/* Foto Pengguna */}
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
      />
      <div className="flex flex-col flex-1">
        {/* Rating */}
        <div className="flex justify-center md:justify-start mb-2">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span key={index} className="text-kuning text-xl">
              ★
            </span>
          ))}
          {Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
            <span key={index} className="text-gray-400 text-xl">
              ★
            </span>
          ))}
        </div>
        {/* Deskripsi */}
        <p
          className="text-sm  mb-4 overflow-hidden break-words max-h-[4rem] text-ellipsis"
          style={{
            wordBreak: "break-word",
          }}
        >
          {testimonial.feedback}
        </p>
        {/* Nama */}
        <h3 className="text-base text-primary font-display text-gray-200 mt-auto">
          {testimonial.name}
        </h3>
      </div>
    </div>
  ));

  return (
    <div className="bg-[white] py-10 px-6">
      <h2 className="text-5xl font-bright text-center text-primary my-6">
        Apa Kata Pelanggan Kami
      </h2>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={3000}
        responsive={responsive}
        disableDotsControls
        items={renderTestimonialCards}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default TestimonialPage;
