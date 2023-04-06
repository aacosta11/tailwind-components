import React, { useState, useRef, useEffect } from "react";

export default function LightNavWithBottomBorder() {
    const [currentPage, setCurrentPage] = useState<string>("Dashboard");
    const profileMenuRef = useRef<HTMLDivElement>(null);

    const handlePanelState = () => {
        const panel = profileMenuRef.current as HTMLDivElement;
        const isOpen = panel?.getAttribute("data-open") == "true";
        isOpen ? closePanel() : openPanel();
    }

    function openPanel(panel?: HTMLDivElement) {
        if (!panel) panel = profileMenuRef.current as HTMLDivElement;
        window.addEventListener("click", closeOnOffClick, true);
        panel.setAttribute("data-open", "true");
    }

    function closePanel(panel?: HTMLDivElement) {
        if (!panel) panel = profileMenuRef.current as HTMLDivElement;
        window.removeEventListener("click", closeOnOffClick, true);
        panel.setAttribute("data-open", "false");
    }

    function closeOnOffClick(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (!target.closest("[aria-label='drop-down panel']") && !target.closest("[aria-label='drop-down btn']")) {
            closePanel();
        }
    }

    useEffect(() => {
        const panel = profileMenuRef.current as HTMLDivElement;
        panel?.setAttribute("data-open", "false");
        return () => {
            window.removeEventListener("click", closeOnOffClick, true);
        }
    }, [])


    return (
        <div className="bg-white text-gray-800">
            <nav className="relative z-10 max-w-screen-2xl mx-auto px-4 h-16 flex items-center gap-x-8 text-gray-500 hover:[&>.hover-listening]:text-gray-700">
                <button className="w-10 h-10 bg-blue-500 rounded-full">{/* company icon */}</button>
                {["Dashboard", "Team", "Projects", "Calender"].map((_, i) => (
                    <button key={i} className={`h-full px-0.5 text-sm border-b-2 ${currentPage == _ ? 'text-gray-900 border-b-blue-500' : 'border-b-transparent hover:border-b-gray-300 hover-listening'}`}>{_}</button>
                ))}
                {/* bell icon */}
                <button className="ml-auto w-10 h-10 p-0.5 grid place-content-center rounded-full border-2 border-transparent focus:border-blue-600 hover-listening">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-current stroke-[1.5] fill-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </button>
                {/* profile icon */}
                <button aria-label="drop-down btn" className="-ml-7 w-10 h-10 p-0.5 grid place-items-center bg-gray-200 bg-clip-content rounded-full border-2 border-transparent focus:border-blue-600"
                    onClick={handlePanelState}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 stroke-gray-800 stroke-[1.5] fill-none pointer-events-none">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </button>
                {/* drop-down panel */}
                <div ref={profileMenuRef} aria-label="drop-down panel" data-open="false" className="absolute top-[105%] py-1 w-48 right-0 rounded-lg bg-white border border-gray-100 drop-shadow-xl text-sm text-gray-800 overflow-hidden 
                        transition-all ease-in-out transform origin-top-right data-[open=false]:opacity-0 data-[open=false]:scale-90 data-[open=false]:pointer-events-none
                    ">
                    {["Your Profile", "Settings", "Sign Out"].map((_, i) => (
                        <button key={i} className="w-full px-4 py-2 whitespace-nowrap text-left hover:bg-gray-100"
                            onClick={handlePanelState}
                        >{_}</button>
                    ))}
                </div>
            </nav>
            <hr aria-label="divider" className="-my-px" />
            <div className="relative max-w-screen-2xl mx-auto px-4 pt-10 pb-16">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="mt-10 rounded-xl border border-dashed border-gray-400 h-96 overflow-hidden">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="placeholder" x="0" y="0" width="16" height="32" patternUnits="userSpaceOnUse">
                                <path fill="rgb(229 231 235)" fillRule="evenodd" d="M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#placeholder)"></rect>
                    </svg>
                </div>
            </div>
        </div>
    )
}