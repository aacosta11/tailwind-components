import { Fragment, useState } from 'react'
import { Menu, Tab, Popover, Transition } from '@headlessui/react'
import {
    HomeIcon,
    UsersIcon,
    FolderIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    MagnifyingGlassIcon,
    BellIcon,
    UserIcon,
    ChevronDownIcon,
    XMarkIcon,
    Bars3Icon
} from '@heroicons/react/24/outline'

const TABS: { name: string, icon: any }[] = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Team", icon: UsersIcon },
    { name: "Projects", icon: FolderIcon },
    { name: "Calendar", icon: CalendarIcon },
    { name: "Documents", icon: DocumentDuplicateIcon },
    { name: "Reports", icon: ChartPieIcon }
]
const DEMO_TEAMS = ["Team A", "Team B", "Team C"]

export default function BrandSidebarWithHeader() {
    const [searchBarValue, setSearchBarValue] = useState<string>("");
    return (
        <div className="relative bg-white h-[700px]">
            <div className="grid lg:grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-full">
                {/* [desktop] side panel */}
                <Tab.Group as="aside" className="flex-col hidden h-full max-h-full p-4 overflow-y-auto text-gray-300 bg-blue-600 lg:flex row-span-full gap-y-1 w-72 overscroll-contain">
                    <div aria-label="company_icon" className="w-10 h-10 mb-8 ml-1 bg-white rounded-full" />
                    <Tab.List className="contents">
                        {TABS.map((tab, index) => (
                            <Tab key={index} onClick={(e) => e.preventDefault()} className="flex items-center w-full p-2 rounded-md gap-x-3 ui-selected:bg-blue-700 ui-selected:text-white ui-not-selected:hover:bg-blue-700 ui-not-selected:hover:text-white">
                                <tab.icon className="w-6 h-6" />
                                {tab.name}
                            </Tab>
                        ))}
                    </Tab.List>
                    <p aria-label="section_header" className="px-2 mt-6 mb-2 text-xs font-medium">
                        Your teams
                    </p>
                    {DEMO_TEAMS.map((team, index) => (
                        <button key={index} className="flex items-center w-full px-2 py-2 text-left rounded-md gap-x-3 hover:bg-blue-700 hover:text-white">
                            <div className="w-6 h-6 p-1 text-xs text-center text-white bg-blue-500 border border-blue-400 rounded-lg">
                                {team[0]}
                            </div>
                            <span className="text-sm font-medium">
                                {team}
                            </span>
                        </button>
                    ))}
                    <button className="flex w-full px-2 py-2 mt-auto text-left rounded-md hover:bg-blue-700 hover:text-white gap-x-3 ">
                        <Cog6ToothIcon className="w-6 h-6" />
                        <span className="text-sm font-semibold">
                            Settings
                        </span>
                    </button>
                </Tab.Group>
                {/* [mobile] sliding panel */}
                <Popover as="div" className="contents lg:hidden">
                    <div className="absolute z-20 flex items-center pr-2 border-r sm:pr-5 top-5 sm:left-6 left-2">
                        <Popover.Button className="flex p-2 -my-2 outline-0">
                            <Bars3Icon className="w-6 h-6 stroke-gray-800" />
                        </Popover.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter='transition ease-in duration-200'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition ease-out duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Popover.Overlay className="absolute inset-0 z-20 drop-shadow-lg bg-gray-900/80" />
                    </Transition>
                    <Transition
                        as={Fragment}
                        enter='transition ease-in duration-200'
                        enterFrom='-translate-x-full '
                        enterTo='translate-x-0'
                        leave='transition ease-out duration-300'
                        leaveFrom='translate-x-0'
                        leaveTo='-translate-x-full'
                    >
                        <Popover.Panel className="absolute inset-y-0 z-20 w-full max-w-xs transition duration-200 transform bg-blue-600">
                            <Popover.Button className="absolute p-3 top-2 left-full" >
                                <XMarkIcon className="w-6 h-6 text-white" />
                            </Popover.Button>
                            <Tab.Group as="div" className="flex flex-col h-full p-4 overflow-y-auto text-gray-300 row-span-full gap-y-1 overscroll-contain">
                                <div aria-label="company_icon" className="w-10 h-10 mb-8 ml-1 bg-white rounded-full" />
                                <Tab.List className="contents">
                                    {TABS.map((tab, index) => (
                                        <Tab key={index} onClick={(e) => e.preventDefault()} className="flex items-center w-full p-2 rounded-md gap-x-3 ui-selected:bg-blue-700 ui-selected:text-white ui-not-selected:hover:bg-blue-700 ui-not-selected:hover:text-white">
                                            <tab.icon className="w-6 h-6" />
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <p aria-label="section_header" className="px-2 mt-6 mb-2 text-xs font-medium">
                                    Your teams
                                </p>
                                {DEMO_TEAMS.map((team, index) => (
                                    <button key={index} className="flex items-center w-full px-2 py-2 text-left rounded-md gap-x-3 hover:bg-blue-700 hover:text-white">
                                        <div className="w-6 h-6 p-1 text-xs text-center text-white bg-blue-500 border border-blue-400 rounded-lg">
                                            {team[0]}
                                        </div>
                                        <span className="text-sm font-medium">
                                            {team}
                                        </span>
                                    </button>
                                ))}
                                <button className="flex w-full px-2 py-2 mt-auto text-left rounded-md hover:bg-blue-700 hover:text-white gap-x-3 ">
                                    <Cog6ToothIcon className="w-6 h-6" />
                                    <span className="text-sm font-semibold">
                                        Settings
                                    </span>
                                </button>
                            </Tab.Group>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                {/* header with search bar */}
                <header className="relative z-10 text-gray-400 flex items-center pr-4 pl-20 sm:pl-28 lg:pl-8 sm:pr-8 py-2.5 border-b border-gray-200 gap-x-4 drop-shadow-sm">
                    <div aria-label="search_bar" className="relative flex items-center flex-1">
                        <MagnifyingGlassIcon className="w-5 h-5 pointer-events-none stroke-2" />
                        <input type="text" value={searchBarValue} onChange={(e) => setSearchBarValue(e.target.value)} placeholder="Search..." className="w-full py-3 pl-10 text-gray-900 bg-transparent rounded-md lg:text-sm -ml-7 peer/search outline-0" />
                        <div className="absolute right-6 peer-placeholder-shown/search:opacity-0 peer-placeholder-shown/search:pointer-events-none" onMouseDown={(e) => e.preventDefault()} onClick={(e) => setSearchBarValue("")}>
                            <XMarkIcon className="w-4 h-4 stroke-2" />
                        </div>
                    </div>
                    <button className="grid w-8 h-8 rounded-full place-items-center focus:ring-2 ring-gray-800 focus:text-gray-600">
                        <BellIcon className="w-8 h-8 p-1" />
                    </button>
                    <Menu as="div" className="relative text-sm lg:pl-6 lg:border-l-2">
                        <Menu.Button className="flex items-center -my-1 gap-x-3 group">
                            <UserIcon className="w-8 h-8 p-1 bg-gray-200 rounded-full stroke-gray-600 ui-open:ring-2 ring-gray-800 lg:ring-0" />
                            <div className="hidden lg:contents">
                                <span className="font-semibold text-gray-900 whitespace-nowrap">
                                    John Doe
                                </span>
                                <ChevronDownIcon className="w-4 h-4 scale-x-95 stroke-2 group-aria-expanded:text-gray-800" />
                            </div>
                        </Menu.Button>
                        <Transition
                            as="div"
                            className="absolute top-10 -right-1"
                            enter="transition ease-out duration-100 origin-top-right"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75 origin-top-right"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items as="div" className="w-48 py-1 overflow-hidden text-gray-900 bg-white rounded-lg drop-shadow-md">
                                {["Your Profile", "Settings", "Sign out"].map((page, index) => (
                                    <Menu.Item key={index}>
                                        <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                                            {page}
                                        </button>
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </header>
                {/* main content */}
                <main className="relative px-4 py-12 sm:px-8">
                    <div className="h-full overflow-hidden border border-gray-400 border-dashed rounded-xl">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="placeholder" x="0" y="0" width="16" height="32" patternUnits="userSpaceOnUse">
                                    <path fill="rgb(242 243 245)" fillRule="evenodd" d="M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z" />
                                </pattern>
                            </defs>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#placeholder)"></rect>
                        </svg>
                    </div>
                </main>
            </div>
        </div>
    )
}
