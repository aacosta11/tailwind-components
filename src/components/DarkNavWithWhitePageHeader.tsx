import React, { useState, useRef, useEffect } from "react";

const PAGES = ["Dashboard", "Team", "Projects", "Calender", "Reports"];

export default function DarkNavWithWhitePageHeader() {
    const [currentPage, setCurrentPage] = useState<string>("Dashboard");
    const profileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const changePanelTo = (state: "true" | "false") => {
        const panel = profileMenuRef.current as HTMLDivElement;
        panel.setAttribute("data-open", state);
        if (state == "true") window.addEventListener("click", closeOnOffClick, true);
        else window.removeEventListener("click", closeOnOffClick, true);
    }

    const handlePanelState = () => {
        const panel = profileMenuRef.current as HTMLDivElement;
        const isOpen = panel?.getAttribute("data-open") == "true";
        changePanelTo(isOpen ? "false" : "true");
    }

    function closeOnOffClick(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (!target.closest("[aria-label='USER MENU DROPDOWN PANEL']") && !target.closest("[aria-label='USER MENU DROPDOWN BUTTON']")) {
            changePanelTo("false");
        }
    }

    function handleMobileMenuState() {
        const panel = mobileMenuRef.current as HTMLDivElement;
        const isOpen = panel?.getAttribute("data-open") == "true";
        isOpen ? panel.setAttribute("data-open", "false") : panel.setAttribute("data-open", "true");
    }

    useEffect(() => {
        return () => window.removeEventListener("click", closeOnOffClick, true);
    }, [])

    return (
        <div className="text-gray-800 bg-gray-200">
            <nav className="bg-slate-800">
                {/* DESKTOP NAVIGATION */}
                <div aria-label="desktop navigation" className="relative z-10 items-center hidden h-16 px-6 mx-auto text-gray-300 max-w-screen-2xl md:flex">
                    <div aria-label="company logo" className="w-10 h-10 mr-6 bg-blue-500 rounded-full" />
                    {PAGES.map((_, i) => (
                        <button key={i} className={`px-3 py-2 ml-4 tracking-wide text-sm rounded-lg ${currentPage == _ ? 'text-white bg-slate-900' : 'hover:bg-slate-700 hover:text-white'}`}>
                            {_}
                        </button>
                    ))}
                    <button aria-label="notifications button" className="ml-auto text-gray-400 w-10 h-10 p-0.5 grid place-content-center rounded-full border-2 border-transparent focus:border-white hover:text-white">
                        <svg aria-label="bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>
                    {/* ~~ dropdown button ~~ */}
                    <button aria-label="USER MENU DROPDOWN BUTTON" onClick={handlePanelState} className="ml-1 w-10 h-10 p-0.5 grid place-items-center bg-gray-200 bg-clip-content rounded-full border-2 border-transparent focus:border-white">
                        <svg aria-label="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-gray-800 stroke-[1.5] fill-none pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </button>
                    {/* ~~ dropdown panel ~~ */}
                    <div aria-label="USER MENU DROPDOWN PANEL" ref={profileMenuRef} data-open="false" className="absolute top-[88%] py-1 w-48 right-6 rounded-lg bg-white border border-gray-100 drop-shadow-xl text-sm text-gray-800 overflow-hidden transition-all ease-in-out transform origin-top-right data-[open=false]:opacity-0 data-[open=false]:scale-90 data-[open=false]:pointer-events-none">
                        {["Your Profile", "Settings", "Sign Out"].map((_, i) => (
                            <button key={i} onClick={handlePanelState} className="w-full px-4 py-2 text-left whitespace-nowrap hover:bg-gray-100">
                                {_}
                            </button>
                        ))}
                    </div>
                </div>
                {/* MOBILE NAVIGATI0N */}
                <div aria-label="mobile navigation" ref={mobileMenuRef} data-open="false" className="text-gray-600 md:hidden group/main">
                    <div className="flex items-center justify-between h-16 px-3">
                        <div aria-label="company logo" className="w-10 h-10 mr-6 bg-blue-500 rounded-full" />
                        {/* ~~ dropdown button ~~ */}
                        <button aria-label="MENU DROPDOWN BUTTON" onClick={handleMobileMenuState} className="grid w-10 h-10 p-2 text-gray-400 border-2 border-transparent rounded-lg place-content-center focus:border-white hover:bg-slate-700 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none">
                                <path aria-label="hamburger" strokeLinecap="round" strokeLinejoin="round" className="group-data-[open=true]/main:hidden" d="M4 6h16M4 12h16M4 18h16" />
                                <path aria-label="X" strokeLinecap="round" strokeLinejoin="round" className="group-data-[open=false]/main:hidden" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* ~~ dropdown panel ~~ */}
                    <div data-tag="MENU DROPDOWN PANEL" className="py-3 font-medium group-data-[open=false]/main:hidden">
                        <div className="grid px-3 gap-y-1">
                            {PAGES.map((_, i) => (
                                <button key={i} className={`h-10 px-3 text-left rounded-lg ${currentPage == _ ? 'text-white bg-slate-900' : 'hover:bg-slate-700 hover:text-white text-gray-300'}`}>
                                    {_}
                                </button>
                            ))}
                        </div>
                        <hr aria-label="DIVIDER" className="my-3 border-slate-700" />
                        <div className="grid px-3 gap-y-1">
                            <div className="flex items-center px-2 py-2 gap-x-2.5">
                                <div className="grid bg-gray-200 rounded-full place-items-center p-0.5 w-10 h-10">
                                    <svg aria-label="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-gray-800 stroke-[1.5] fill-none pointer-events-none">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <div className="leading-3 translate-y-0.5">
                                    <p aria-label="username" className="text-white">Tom Cook</p>
                                    <p aria-label="email" className="text-sm text-gray-400">tom@example.com</p>
                                </div>
                                <button className="ml-auto w-10 h-10 p-0.5 grid place-content-center rounded-full border-2 border-transparent focus:border-white text-gray-400 hover:text-white">
                                    <svg aria-label="bell-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>
                            </div>
                            {["Your Profile", "Settings", "Sign Out"].map((_, i) => (
                                <button key={i} className="h-10 px-3 -mx-1 text-left text-gray-400 rounded-lg hover:text-white hover:bg-slate-700 hover-listening">{_}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* PAGE HEADER */}
            <div className="relative py-6 bg-white drop-shadow">
                <h1 className="px-4 mx-auto text-3xl font-bold md:px-6 max-w-screen-2xl">Dashboard</h1>
            </div>
            
            {/* PAGE CONTENT */}
            <div className="relative px-4 py-12 mx-auto max-w-screen-2xl md:px-6">
                <div className="overflow-hidden border border-gray-400 border-dashed rounded-xl h-96">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="placeholder" x="0" y="0" width="16" height="32" patternUnits="userSpaceOnUse">
                                <path fill="rgb(243 244 246)" fillRule="evenodd" d="M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#placeholder)"></rect>
                    </svg>
                </div>
            </div>
        </div>
    )
}