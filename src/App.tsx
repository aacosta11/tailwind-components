import { Fragment, useState, useRef, useEffect } from 'react'
import LightNavWithBottomBorder from './components/LightNavWithBottomBorder'
import DarkNavWithWhitePageHeader from './components/DarkNavWithWhitePageHeader'
import DarkNavWithOverlap from './components/DarkNavWithOverlap'
import TwoRowNavigationWithOverlap from './components/TwoRowNavigationWithOverlap'
import BrandSidebarWithHeader from './components/BrandSidebarWithHeader'
import LightSidebar from './components/LightSidebar'

type tComponent = {
  Group: string,
  Section: string,
  Component?: JSX.Element | null,
}

// list of components
const LIST_OF_COMPONENTS: { [key: string]: tComponent } = {
  "Light Nav with Bottom Border": {
    Group: "Application UI",
    Section: "Stacked Layouts",
    Component: <LightNavWithBottomBorder />
  },
  "Dark Nav with White Page Header": {
    Group: "Application UI",
    Section: "Stacked Layouts",
    Component: <DarkNavWithWhitePageHeader />
  },
  "Dark Nav with Overlap": {
    Group: "Application UI",
    Section: "Stacked Layouts",
    Component: <DarkNavWithOverlap />
  },
  "Two Row Navigation with Overlap": {
    Group: "Application UI",
    Section: "Stacked Layouts",
    Component: <TwoRowNavigationWithOverlap />
  },
  "Brand Sidebar with Header": {
    Group: "Application UI",
    Section: "Sidebar Layouts",
    Component: <BrandSidebarWithHeader />
  },
  "Light Sidebar": {
    Group: "Application UI",
    Section: "Sidebar Layouts",
    Component: <LightSidebar />
  },
}

// for the dummy dropdown menu
const COMPONENT_GROUPS: { [key: string]: string[] } = {
  "Marketing": ["section 1", "section 2", "section 3"],
  "Application UI": ["section 4", "section 5", "section 6"],
  "Ecommerce": ["section 7", "section 8", "section 9"],
}

function App() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentComponent, setCurrentComponent] = useState<tComponent | null>(null);

  function changeDropdownStateTo(state: "true" | "false") {
    const dropdown = dropdownRef.current as HTMLDivElement;
    dropdown.setAttribute("data-open", state);
    if (state == "true") document.addEventListener("click", handleOffClick);
    else document.removeEventListener("click", handleOffClick);
  }

  function handleDropdownState() {
    const dropdown = dropdownRef.current as HTMLDivElement;
    changeDropdownStateTo(dropdown.dataset.open == "true" ? "false" : "true")
  }

  function handleOffClick(e: MouseEvent) {
    const dropdown = dropdownRef.current as HTMLDivElement;
    if (!dropdown.contains(e.target as Node)) {
      changeDropdownStateTo("false");
    }
  }

  useEffect(() => {
    return () => document.removeEventListener("click", handleOffClick);
  }, [])

  return (
    <Fragment>
      <header className="relative z-50 flex p-4 mx-auto text-white max-w-screen-2xl">
        <div>
          <h1>Tailwind Components!</h1>
          <p className="text-xs font-light text-right">by aacosta11</p>
        </div>
        <div aria-label="divider" className="w-px ml-4 bg-white" />
        {/* DROPDOWN MENU */}
        <div aria-label="dropdown-menu" ref={dropdownRef} data-open="false" className="relative pb-1 ml-4 -mb-1 group/main">
          <button type="button" title="this dropdown menu doesn't do anything :)" onClick={handleDropdownState} className="flex items-center peer group-data-[open=true]/main:text-gray-300">
            <h2 className="text-2xl font-semibold pointer-events-none">Application UI</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-6 pointer-events-none translate-y-1 group-hover/main:scale-y-[-1] group-hover/main:translate-y-0 group-data-[open=true]/main:scale-y-[-1] group-data-[open=true]/main:translate-y-0" fill="currentColor" viewBox="0 0 24 12" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 0 L12 6 L18 0 Z" />
            </svg>
          </button>
          <div className="absolute inset-x-0 top-full hidden group-data-[open=true]/main:block group-hover/main:block bg-white rounded-lg drop-shadow-md ">
            <ul>
              {Object.keys(COMPONENT_GROUPS).map((group, index) => (
                <li key={index} className="relative px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100 first:hover:rounded-t-lg last:hover:rounded-b-lg group/GroupName">
                  <span className="pointer-events-none">{group}</span>
                  <div className="absolute top-0 hidden left-full group-hover/GroupName:block">
                    <ul className="relative overflow-hidden translate-x-2 bg-white rounded-lg drop-shadow-md">
                      {COMPONENT_GROUPS[group].map((component, index) => (
                        <li key={index} onClick={() => changeDropdownStateTo("false")} className="relative px-4 py-2 text-sm font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 whitespace-nowrap">
                          {component}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> {/* END DROPDOWN MENU */}
      </header>

      <div className="mx-auto max-w-screen-2xl">
        <hr className="w-full -translate-x-4 border-white/20" />
        <div className="p-4 font-semibold text-white">
          <h3>
            <span className="cursor-pointer" onClick={() => setCurrentComponent(null)}>
              Home
            </span>
            {currentComponent?.Group && (` \\ ${currentComponent?.Group} ${currentComponent?.Section && (` \\ ${currentComponent?.Section} ${currentComponent?.Component && (` \\ ${currentComponent?.Component.type.name}`)}`)}`) }
          </h3>
        </div>
        <hr className="w-full translate-x-4 border-white/20" />
      </div>

      <main className="pb-32 mt-4 text-white">
        {
          currentComponent?.Component ??
          <ul className="mx-auto list-disc list-inside max-w-screen-2xl">
            {Object.keys(LIST_OF_COMPONENTS).map((component, index) => (
              <li key={index} className="cursor-pointer w-fit" onClick={() => setCurrentComponent(LIST_OF_COMPONENTS[component])}>
                {component}
              </li>
            ))}
          </ul>
        }
      </main>
    </Fragment>
  )
}

export default App
