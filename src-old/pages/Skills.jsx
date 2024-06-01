import PageNav from '../components/PageNav'

function Skills() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white">
            <PageNav />
            <div className="mt-8 max-w-4xl px-6 text-center">
                {' '}
                {/* Centering text */}
                <h1 className="font-chivo mb-8 animate-pulse bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-[160px] uppercase text-transparent opacity-30">
                    Skills
                </h1>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {' '}
                    {/* 4 columns on larger screens */}
                    <div className="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-lg">
                        <h2 className="mb-4 text-lg font-bold">
                            Programming Languages
                        </h2>
                        <ul className="ml-6 list-disc">
                            <li className="mb-2">JavaScript (Main)</li>
                            <li className="mb-2">Python (Familiar)</li>
                        </ul>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-lg">
                        <h2 className="mb-4 text-lg font-bold">
                            Frontend Development
                        </h2>
                        <ul className="ml-6 list-disc">
                            <li className="mb-2">HTML</li>
                            <li className="mb-2">CSS</li>
                            <li className="mb-2">React.js</li>
                            <li className="mb-2">React Native</li>
                            <li className="mb-2">Next.js</li>
                            <li className="mb-2">Bootstrap</li>
                            <li className="mb-2">Tailwind CSS</li>
                            <li className="mb-2">Redux</li>
                            <li className="mb-2">React Router</li>
                        </ul>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-lg">
                        <h2 className="mb-4 text-lg font-bold">
                            Backend Development
                        </h2>
                        <ul className="ml-6 list-disc">
                            <li className="mb-2">Node.js</li>
                            <li className="mb-2">Express.js</li>
                            <li className="mb-2">MongoDB</li>
                            <li className="mb-2">RESTful APIs</li>
                            <li className="mb-2">Flask (Basic)</li>
                        </ul>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-lg">
                        <h2 className="mb-4 text-lg font-bold">Other Skills</h2>
                        <ul className="ml-6 list-disc">
                            <li className="mb-2">Git</li>
                            <li className="mb-2">Canva (Graphic Design)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
