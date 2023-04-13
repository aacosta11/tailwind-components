import { useState, useRef, useEffect } from "react";
const PAGES = ["Home", "Profile", "Resources", "Company Directory", "Openings"];

export default function LightNavWithBottomBorder() {
    const [searchBarValue, setSearchBarValue] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<string>(PAGES[0]);
    const profileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const changePanelStateTo = (state: "true" | "false") => {
        const panel = profileMenuRef.current as HTMLDivElement;
        panel.setAttribute("aria-expanded", state);
        if (state == "true") window.addEventListener("click", closeOnOffClick, true);
        else window.removeEventListener("click", closeOnOffClick, true);
    }

    const changeMobileMenuStateTo = (state: "true" | "false") => {
        const panel = mobileMenuRef.current as HTMLDivElement;
        panel.setAttribute("aria-expanded", state);
        if (state == "true") window.addEventListener("click", closeOnOffClick, true);
        else window.removeEventListener("click", closeOnOffClick, true);
    }

    const handlePanelState = () => {
        const panel = profileMenuRef.current as HTMLDivElement;
        changePanelStateTo(panel?.getAttribute("aria-expanded") == "true" ? "false" : "true");
    }

    const handleMobileMenuState = () => {
        const panel = mobileMenuRef.current as HTMLDivElement;
        panel.setAttribute("aria-expanded", panel?.getAttribute("aria-expanded") == "true" ? "false" : "true");
    }

    function closeOnOffClick(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (!target.closest("[aria-label='MENU PANEL']") && !target.closest("[aria-label='MENU BUTTON']")) {
            changePanelStateTo("false");
        }
    }

    useEffect(() => {
        window.removeEventListener("click", closeOnOffClick, true);
    }, [])

    return (
        <div className="relative">
            <div aria-label="backdrop" aria-hidden="true" className="absolute inset-0 bg-gray-200 -z-20" />
            <div aria-label="backdrop" aria-hidden="true" className="absolute inset-x-0 h-48 bg-blue-700 lg:h-64 -z-10" />

            <div className="relative grid lg:grid-cols-[70%_auto] max-w-3xl px-6 mx-auto lg:max-w-7xl gap-6">
                {/* [DESKTOP] */}
                <nav aria-label="desktop navigation" className="hidden lg:contents">
                    <div className="relative z-10 flex items-center px-1 py-5 border-b border-white/20 gap-x-2 col-span-full">
                        <button aria-label="company logo" className="w-10 h-10 bg-blue-500 rounded-full">
                            {/* company icon */}
                        </button>
                        <button aria-label="notifications button" className="grid ml-auto text-gray-300 border-2 border-transparent rounded-full w-9 h-9 place-content-center focus:border-white hover:text-white hover:bg-blue-600/60">
                            <svg aria-label="bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                        <button aria-label="MENU BUTTON" onClick={handlePanelState} className="grid bg-gray-200 border-2 border-blue-700 rounded-full shadow-sm h-9 w-9 place-items-center focus:border-white">
                            <svg aria-label="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-blue-700 stroke-[1.5] fill-none pointer-events-none">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </button>
                        <div aria-label="MENU PANEL" aria-expanded="false" ref={profileMenuRef} className="absolute top-[80%] py-1 w-48 right-0 rounded-lg bg-white border border-gray-100 drop-shadow-xl text-sm text-gray-800 overflow-hidden transition-all ease-in-out transform origin-top-right aria-[expanded=false]:opacity-0 aria-[expanded=false]:scale-90 aria-[expanded=false]:pointer-events-none">
                            {["Your Profile", "Settings", "Sign Out"].map((_, i) => (
                                <button key={i} onClick={handlePanelState} className="w-full px-4 py-2 text-left whitespace-nowrap hover:bg-gray-100">
                                    {_}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* tabs */}
                    <div className="flex items-center col-span-1 px-1 gap-x-5">
                        {PAGES.map((_, i) => (
                            <button key={i} className={`font-medium text-sm px-3 py-2 hover:bg-blue-600 rounded-md ${currentPage == _ ? 'text-white' : 'text-gray-200'}`}>
                                {_}
                            </button>
                        ))}
                    </div>
                    {/* search bar */}
                    <div className="col-span-1 px-1">
                        <div aria-label="search bar" className="relative flex items-center gap-x-2 py-1.5 rounded-md overflow-hidden w-full">
                            <input type="text" name="search" value={searchBarValue} onChange={(e) => setSearchBarValue(e.target.value)} className="w-full pl-10 text-sm leading-6 text-white bg-transparent focus:text-gray-800 focus:placeholder:text-gray-500 placeholder:text-gray-100 focus:outline-none peer/search" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute pointer-events-none left-2.5 w-5 h-5 stroke-current peer-focus/search:stroke-gray-800 stroke-[2] fill-none shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <svg onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }} onClick={(e) => setSearchBarValue("")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`absolute right-2 w-4 h-4 stroke-current peer-focus/search:stroke-gray-800 stroke-[2] fill-none shrink-0 ${searchBarValue ? '' : 'pointer-events-none opacity-0'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" className="pointer-events-none" />
                            </svg>
                            <div aria-label="background color" aria-hidden="true" className="absolute inset-0 -z-10 bg-white/20 peer-focus/search:bg-white" />
                        </div>
                    </div>
                </nav>
                {/* [MOBILE] */}
                <nav aria-label="mobile navigation" className="pt-6 lg:hidden">
                    <div className="grid place-items-center grid-cols-[auto_1fr_auto] gap-x-4">
                        <button aria-label="company logo" className="w-10 h-10 bg-blue-500 rounded-full">
                            {/* company icon */}
                        </button>
                        <div aria-label="search bar" className="relative flex items-center gap-x-2 py-1.5 rounded-md overflow-hidden max-w-xs w-full">
                            <input type="text" name="search" value={searchBarValue} onChange={(e) => setSearchBarValue(e.target.value)} className="w-full pl-10 text-sm leading-6 text-white bg-transparent focus:text-gray-800 focus:placeholder:text-gray-500 placeholder:text-gray-100 focus:outline-none peer/search" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute pointer-events-none left-2.5 w-5 h-5 stroke-current peer-focus/search:stroke-gray-800 stroke-[2] fill-none shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <svg onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }} onClick={(e) => setSearchBarValue("")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`absolute right-2 w-4 h-4 stroke-current peer-focus/search:stroke-gray-800 stroke-[2] fill-none shrink-0 ${searchBarValue ? '' : 'pointer-events-none opacity-0'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" className="pointer-events-none" />
                            </svg>
                            <div aria-label="background color" aria-hidden="true" className="absolute inset-0 -z-10 bg-white/20 peer-focus/search:bg-white" />
                        </div>

                        <button aria-label="MENU BUTTON" onClick={handleMobileMenuState} className="p-1.5 text-gray-300 rounded-md hover:text-white hover:bg-white/20 border-2 border-transparent focus:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        <div ref={mobileMenuRef} aria-expanded="false" className="fixed inset-0 z-50 grid justify-center p-2 pointer-events-none group/menu">
                            <div aria-label="backdrop overlay" onClick={() => changeMobileMenuStateTo("false")} className="absolute top-0 left-0 w-full h-full -z-10 bg-black/20 drop-shadow-xl group-aria-[expanded=false]/menu:opacity-0 pointer-events-none group-aria-expanded/menu:pointer-events-auto transition-all transform " />
                            <div className="w-screen px-4 pointer-events-none h-fit">
                                <div aria-label="MENU PANEL" className="pointer-events-none group-aria-expanded/menu:pointer-events-auto grid gap-y-1 drop-shadow-md max-w-3xl p-2 mx-auto bg-white rounded-md text-gray-900 font-medium transition-all transform group-aria-[expanded=false]/menu:scale-90 group-aria-[expanded=false]/menu:opacity-0 ">
                                    <div className="flex items-center justify-between pt-1 pb-2.5 pl-2">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full" />
                                        <button aria-label="MENU BUTTON" onClick={handleMobileMenuState} className="p-1.5 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 border-2 border-transparent focus:border-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[1.5] pointer-events-none">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    {PAGES.map((_, i) => (
                                        <button key={i} className="w-full px-4 py-2 text-left rounded-md whitespace-nowrap hover:bg-gray-100">
                                            {_}
                                        </button>
                                    ))}
                                    <div className="flex px-3 pt-5 pb-2 border-t border-gray-200">
                                        <div className="grid w-10 h-10 bg-gray-200 rounded-full shadow-sm place-items-center ">
                                            <svg aria-label="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-gray-900 stroke-[1.5] fill-none pointer-events-none">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                        <div className="ml-2.5 tracking-wide">
                                            <p>
                                                John Doe
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                jdoe@example.com
                                            </p>
                                        </div>
                                        <button aria-label="notifications button" className="grid w-10 h-10 ml-auto text-gray-400 border-2 border-transparent rounded-full place-content-center focus:border-blue-500 hover:text-gray-500">
                                            <svg aria-label="bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none pointer-events-none">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                            </svg>
                                        </button>
                                    </div>
                                    {["Your Profile", "Settings", "Sign Out"].map((_, i) => (
                                        <button key={i} className="w-full px-4 py-2 text-left rounded-md whitespace-nowrap hover:bg-gray-100">
                                            {_}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* PAGE CONTENT */}
                <div className="relative col-span-1 px-1">
                    <div className="relative px-6 py-6 overflow-hidden bg-white rounded-lg h-[430px] drop-shadow">
                        <div className="absolute overflow-hidden border border-gray-400 border-dashed rounded inset-6 ">
                            <svg width="100%" height="100%">
                                <defs>
                                    <pattern id="placeholder" x="0" y="0" width="16" height="32" patternUnits="userSpaceOnUse">
                                        <path fill="rgb(242 243 245)" fillRule="evenodd" d="M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z" />
                                    </pattern>
                                </defs>
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#placeholder)"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-1 px-1">
                    <div className="relative px-6 py-6 overflow-hidden bg-white rounded-lg h-[430px] drop-shadow">
                        <div className="absolute overflow-hidden border border-gray-400 border-dashed rounded inset-6 ">
                            <svg width="100%" height="100%">
                                <defs>
                                    <pattern id="placeholder" x="0" y="0" width="16" height="32" patternUnits="userSpaceOnUse">
                                        <path fill="rgb(242 243 245)" fillRule="evenodd" d="M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z" />
                                    </pattern>
                                </defs>
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#placeholder)"></rect>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="px-1 pt-8 pb-10 mt-2 text-sm font-medium tracking-tight text-gray-500 border-t border-gray-300 col-span-full">
                    <p>
                        &copy; {new Date().getFullYear()} - {new Date().getFullYear() + 1} Your Company, Inc. All Rights Reserved.
                    </p>
                </div>
            </div>

        </div>
    )
}