import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LogoIg from "../../assets/logo/logo-instagram.svg";
import LogoTwiter from "../../assets/logo/logo-twitter.svg";
import LogoFb from "../../assets/logo/logo-fb.svg";

const teamMembers = [
  {
    name: "Tito",
    role: "Founder / Creative Director",
    image: "/images/menu/Testisatu.png",
    social: {
      instagram: "https://www.instagram.com/titonagasurya/",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Fendi",
    role: "Founder / Operational Manager",
    image: "/images/menu/Testisatu.png",
    social: {
      instagram: "https://www.instagram.com/kakangali/",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Siti Aminah",
    role: "Manajer Operasional",
    image: "/images/menu/Testisatu.png",
    social: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Fransisca",
    role: "Public Relation",
    image: "/images/menu/Testisatu.png",
    social: {
      instagram: "https://www.instagram.com/sistja/",
      twitter: "#",
      facebook: "#",
    },
  },
];

const TimKami = () => {
  return (
    <div className="bg-gradient-to-r from-hitam to-primary  py-12 px-6 text-center">
      <h2 className="text-4xl font-bright text-white mb-8">Tim Kami</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-5xl mx-auto"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex gap-3 mt-4">
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LogoIg} alt="Instagram" className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LogoTwiter} alt="Twitter" className="w-4 h-4" />
                </a>
                <a
                  href={member.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LogoFb} alt="Facebook" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimKami;
