import { useState } from 'react'
import { Menu, Tab } from '@headlessui/react'
import { HomeIcon, UsersIcon, FolderIcon, CalendarIcon, DocumentDuplicateIcon, ChartPieIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

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
    return (
        <div className="relative bg-white">
            <div className="grid grid-cols-[300px_auto] mx-auto max-w-screen-2xl">
                <Tab.Group as="aside" className="relative max-h-screen px-4 pt-4 pb-20 overflow-y-auto text-gray-300 bg-blue-600 gap-y-1 overscroll-contain">
                    <div aria-label="company-icon" className="w-10 h-10 mb-8 ml-1 bg-white rounded-full" />
                    <Tab.List className="grid text-sm gap-y-1">
                        {TABS.map((tab, index) => (
                            <Tab key={index} onClick={(e) => e.preventDefault()} className="flex items-center w-full p-2 rounded-md gap-x-3 ui-selected:bg-blue-700 ui-selected:text-white ui-not-selected:hover:bg-blue-700/60 ui-not-selected:hover:text-white">
                                <tab.icon className="w-6 h-6" />
                                {tab.name}
                            </Tab>
                        ))}
                    </Tab.List>
                    <p className="px-1 mt-6 mb-2 text-xs">Your teams</p>
                    {DEMO_TEAMS.map((team, index) => (
                        <button key={index} className="flex items-center w-full px-3 py-2 -mx-2 text-left rounded-md gap-x-3 hover:bg-blue-700/60 hover:text-white">
                            <div className="w-6 h-6 p-1 text-xs text-center bg-blue-500 border border-blue-400 rounded-lg">
                                {team[0]}
                            </div>
                            <span className="text-sm">
                                {team}
                            </span>
                        </button>
                    ))}
                    <button className="fixed bottom-0 flex items-center px-1 py-8 pb-6 mt-24 bg-gradient-to-t from-blue-600 via-blue-600 hover:text-white">
                        <Cog6ToothIcon className="w-6 h-6" />
                        <span>Settings</span>
                    </button>
                </Tab.Group>
                <main className="w-full h-screen">

                </main>
            </div>
        </div>
    )
}
