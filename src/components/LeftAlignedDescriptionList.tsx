import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const ROWS: { key: string, value: string | JSX.Element }[] = [
    { key: 'Full name', value: 'John Doe' },
    { key: 'Application for', value: 'Frontend Developer' },
    { key: 'Email address', value: 'johndoe@example.com' },
    { key: 'Salary expectation', value: '$120,000' },
    { key: 'About', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, semper eget orci. Quisque pulvinar feugiat sodales. Nam fermentum tempus odio sed euismod.' },
    {
        key: 'Attachments', value:
            <ul aria-label="list_of_attachments" className="mt-1 border border-gray-200 divide-y divide-gray-100 rounded-md">
                {[
                    { name: 'resume_front_end_developer.pdf', size: '256kb' }, 
                    { name: 'coverletter.pdf', size: '128kb' },
                ].map(({ name, size }, i) => (
                    <li key={i} className="flex items-center p-4 gap-x-3">
                        <div className="flex items-center flex-1 w-0 gap-x-3">
                            <PaperClipIcon className="w-5 h-5 text-gray-400 shrink-0" />
                            <div className="flex flex-1 min-w-0 gap-x-3">
                                <span className="font-medium text-gray-800 truncate">
                                    {name}
                                </span>
                                <span className="text-gray-400">
                                    {size}
                                </span>
                            </div>
                        </div>
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => e.preventDefault()}>
                            Download
                        </a>
                    </li>
                ))}
            </ul>
    },
]

export default function LeftAlignedDescriptionList() {
    return (
        <div className="py-8 bg-white text-gray-950 sm:px-2">
            <table aria-label="applicant_information" className="w-full max-w-4xl px-4 mx-auto text-sm text-left divide-y divide-gray-100">
                <tr className="grid px-4 py-5 gap-y-2">
                    <span className="block text-base font-semibold">
                        Applicant Information
                    </span>
                    <span className="block text-gray-500">
                        Personal details and application.
                    </span>
                </tr>
                {ROWS.map(({ key, value }, i) => (
                    <tr key={i} className="grid py-5 px-4 sm:grid-cols-[35%_1fr] gap-y-1">
                        <th className="font-medium text-gray-800">
                            {key}
                        </th>
                        <td className="text-gray-700">
                            {value}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}