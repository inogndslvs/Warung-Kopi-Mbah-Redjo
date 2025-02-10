import React from 'react';
import ButtonLocation from '../atoms/buttonPeta';

const LokasiWarungKopi = () => {
    const handleButtonClick = () => {
        window.open('https://www.google.com/maps?q=lokasi+warung+kopi', '_blank');
    };

    return (
        <div className="flex flex-col md:flex-row justify-evenly py-16 bg-primary shadow-md">
            {/* Konten sebelah kiri */}
            <div className="flex flex-col justify-center text-center mb-4 md:mb-0">
                <h2 className="font-bright text-3xl text-kuning mb-2">OTW Sekarang Juga</h2>
                <p className="font-bright text-secondary text-lg text-gray-600 mb-4">
                    dan rasakan kenangan di setiap sudutnya
                </p>
                <ButtonLocation />
            </div>

            {/* Konten sebelah kanan - Gambar Peta Google Maps */}
            <div className="w-full md:w-1/2 flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.781096385492!2d110.41320887318298!3d-7.151290870152676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7087ccbf511ca3%3A0xedf3d556dce0f76f!2sWarkop%20Mbah%20Redjo!5e0!3m2!1sid!2sid!4v1738085075278!5m2!1sid!2sid"
                    className="rounded-lg m-4 w-full  h-[450px] md:w-[450px] md:h-[300px] "
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default LokasiWarungKopi;
