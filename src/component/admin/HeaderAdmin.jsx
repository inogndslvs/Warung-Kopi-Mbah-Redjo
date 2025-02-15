const HeaderAdmin = () => {
    return (
        <div className="w-full bg-[#F7EFE5] shadow-md px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
            <img src="src\assets\logo\logofill.png" alt="Logo" className="h-8 w-auto" />
            {/* <h1 className="text-lg font-bold text-[#C38154]">Warung Kopi Mbah Redjo</h1> */}
            </div>
            <div className="flex-1 mx-4 max-w-2xl">
            <div className="relative">
                <input
                type="search"
                placeholder="Type to search"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-[#C38154] bg-[#FFFBF5] shadow-sm"
                />
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="relative">
                <span className="absolute -top-1 -right-1 bg-blue text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                <svg className="w-6 h-6 text-[#7D6E83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div className="relative">
                <span className="absolute -top-1 -right-1 bg-blue text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                <svg className="w-6 h-6 text-[#7D6E83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </div>
            <img src="src\assets\logo\logofill.png" alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
        </div>
    );
};

export default HeaderAdmin;