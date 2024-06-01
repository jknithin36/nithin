import PageNav from '../components/PageNav'

function Projects() {
    return (
        <div className="flex min-h-screen flex-col items-center bg-white p-4">
            <PageNav />
            <h1 className="font-rubik mb-6 mt-4 text-center text-[30px] uppercase sm:text-[40px] md:text-[50px] lg:text-[60px]">
                My Art
            </h1>
            <div className="flex w-full max-w-6xl flex-wrap justify-center gap-6">
                <div className="animate-fade-in-up flex w-full flex-col items-center rounded-lg border border-gray-300 p-4 text-center shadow-lg md:w-1/3">
                    <img
                        src="https://source.unsplash.com/random/800x600?art1"
                        alt="Thunder and Lightning"
                        className="mb-4 h-auto w-full rounded-lg object-cover"
                    />
                    <h2 className="font-rubik mb-2 text-xl md:text-2xl">
                        Thunder and Lightning
                    </h2>
                    <p className="font-caveat text-md text-gray-700 md:text-lg">
                        Created for The Willowpanes and used during their Asian
                        tour
                    </p>
                </div>
                <div className="animate-fade-in-up flex w-full flex-col items-center rounded-lg border border-gray-300 p-4 text-center shadow-lg md:w-1/3">
                    <img
                        src="https://source.unsplash.com/random/800x600?art2"
                        alt="Pasta from the Moon"
                        className="mb-4 h-auto w-full rounded-lg object-cover"
                    />
                    <h2 className="font-rubik mb-2 text-xl md:text-2xl">
                        Pasta from the Moon
                    </h2>
                    <p className="font-caveat text-md text-gray-700 md:text-lg">
                        A poster sample from a design competition in 2019
                    </p>
                </div>
                <div className="animate-fade-in-up flex w-full flex-col items-center rounded-lg border border-gray-300 p-4 text-center shadow-lg md:w-1/3">
                    <img
                        src="https://source.unsplash.com/random/800x600?art3"
                        alt="In Bloom"
                        className="mb-4 h-auto w-full rounded-lg object-cover"
                    />
                    <h2 className="font-rubik mb-2 text-xl md:text-2xl">
                        In Bloom
                    </h2>
                    <p className="font-caveat text-md text-gray-700 md:text-lg">
                        Street art in a skate park, located in Whelton city
                        center
                    </p>
                </div>
            </div>
            <div className="mt-6">
                <a
                    href="https://github.com/yourgithubprofile"
                    className="font-rubik text-md inline-block rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-4 py-2 text-white hover:opacity-90 md:text-lg"
                >
                    See More on GitHub
                </a>
            </div>
        </div>
    )
}

export default Projects
