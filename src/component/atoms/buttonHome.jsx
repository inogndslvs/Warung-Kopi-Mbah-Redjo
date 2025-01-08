import React from "react";
import PlaneIcon from "../../assets/airplane-fill 1.svg"; // Ganti dengan path ikon pesawat lokal Anda

function ButtonLocationHero() {
  const locationUrl = "https://www.google.com/maps?q=-6.8973,107.6097"; // Ganti dengan koordinat Warung Kopi

  return (
    <div className="mt-1">
      <a
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-5 px-4 py-1 bg-third text-kuning font-display font-thin text-sm border border-kuning rounded-full shadow-md hover:bg-primary-dark transition duration-300"
      >
        OTW Sekarang Juga
        {/* Ikon Pesawat di Sebelah Kanan */}
        <img src={PlaneIcon} alt="Icon Pesawat" className="h-6 w-6 " />
      </a>
    </div>
  );
}

export default ButtonLocationHero;
