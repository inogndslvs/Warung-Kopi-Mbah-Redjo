import PlaneIcon from "../../assets/airplane-loc.svg"; // Ganti dengan path ikon pesawat lokal Anda

function ButtonLocation() {
    const locationUrl = "https://maps.app.goo.gl/wvCEckkDqtzkoZtc9"; // Ganti dengan koordinat Warung Kopi

    return (
        <div className="mt-1">
            <a
                href={locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold inline-flex items-center justify-evenly gap-8 px-8 py-3 w-[350px] md:w-[300px] bg-kuning text-primary font-display font-thin text-sm rounded-full shadow-md hover:bg-third hover:text-white transition duration-300"
            >
                OTW Sekarang Juga
                {/* Ikon Pesawat dengan Warna Primary */}
                <img
                    src={PlaneIcon}
                    alt="Icon Pesawat"
                    className="h-6 w-6 text-Primary"
                />
            </a>
        </div>
    );
}

export default ButtonLocation;
