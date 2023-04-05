import { Fragment, useState, useRef } from 'react'
import LightNavWithBottomBorder from './components/ApplicationUI/ApplicationShells/StackedLayouts/LightNavWithBottomBorder'

function App() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentComponentSection, setCurrentComponentSection] = useState<{ componentGroup: string, componentSection: string }>(
    {
      componentGroup: "Application UI",
      componentSection: "Stacked Layouts"
    }
  );
  const GROUPS = ["Marketing", "Application UI", "Ecommerce"];
  const COMPONENT_GROUPS: { [key: string]: string[] } = {
    "Marketing": ["section 1", "section 2", "section 3"],
    "Application UI": ["section 4", "section 5", "section 6"],
    "Ecommerce": ["section 7", "section 8", "section 9"],
  }
  const COMPONENTS: { [key: string]: JSX.Element } = {
    "Light Nav with Bottom Border": <LightNavWithBottomBorder />,
  }
  const [currentComponent, setCurrentComponent] = useState<JSX.Element | null>(null);

  return (
    <Fragment>
      <header className="relative max-w-screen-2xl mx-auto p-4 text-white flex z-10">
        <div>
          <h1>Tailwind Components!</h1>
          <p className="text-xs text-right font-light">by aacosta11</p>
        </div>
        <div aria-label="divider" className="ml-4 w-px bg-white" />
        {/* DROPDOWN MENU */}
        <div ref={dropdownRef} aria-label="dropdown-menu" data-open="false" className="relative ml-4 -mb-1 pb-1 group/main">
          <button type="button" title="open dropdown menu (it doesn't do anything yet)" className="flex items-center peer group-data-[open=true]/main:text-gray-300"
            onClick={() => { (dropdownRef.current as HTMLDivElement).dataset.open = (dropdownRef.current as HTMLDivElement).dataset.open == "true" ? "false" : "true" }}
          >
            <h2 className="text-2xl font-semibold pointer-events-none">{currentComponentSection.componentGroup}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-6 pointer-events-none translate-y-1 group-hover/main:scale-y-[-1] group-hover/main:translate-y-0 group-data-[open=true]/main:scale-y-[-1] group-data-[open=true]/main:translate-y-0" fill="currentColor" viewBox="0 0 24 12" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 0 L12 6 L18 0 Z" />
            </svg>
          </button>
          <div className="absolute inset-x-0 top-full hidden group-data-[open=true]/main:block group-hover/main:block">
            <ul className="flex flex-col">
              {GROUPS.map((group, index) => (
                <li key={index} className="relative text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2 first:hover:rounded-t-lg last:hover:rounded-b-lg group/GroupName">
                  <span className="pointer-events-none">{group}</span>

                  <div className="absolute left-full top-0 hidden group-hover/GroupName:block">
                    <ul className="relative translate-x-2 overflow-hidden rounded-lg bg-white drop-shadow-md">
                      {COMPONENT_GROUPS[group].map((component, index) => (
                        <li key={index} className="relative text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2 whitespace-nowrap"
                          onClick={() => { (dropdownRef.current as HTMLDivElement).dataset.open = "false" }}
                        >
                          <span className="pointer-events-none">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
            <div aria-label="card" className="absolute inset-0 rounded-lg bg-white drop-shadow-md -z-10" />
          </div>
        </div> {/* END DROPDOWN MENU */}
      </header>

      <div className="max-w-screen-2xl mx-auto">
        <hr className="w-full border-white/20 -translate-x-4" />
        <div className="p-4 text-white font-semibold">
          <h3>
            <span className="cursor-pointer" onClick={() => setCurrentComponent(null)}>{currentComponentSection.componentSection}</span>
            {currentComponent && ` \\ ${currentComponent.type.name}`}
          </h3>
        </div>
        <hr className="w-full border-white/20 translate-x-4" />
      </div>

      <main className="mt-4 text-white">
        {
          currentComponent ?
            currentComponent
            :
            <ul className="max-w-screen-2xl mx-auto list-inside list-disc">
              {Object.keys(COMPONENTS).map((component, index) => (
                <li key={index} className="cursor-pointer" onClick={() => setCurrentComponent(COMPONENTS[component])}>{component}</li>
              ))}
            </ul>
        }
      </main>
    </Fragment>
  )

}

export default App
