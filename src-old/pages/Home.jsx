import PageNav from '../components/PageNav'

function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white">
            <PageNav />
            <div className="text-center text-black">
                {' '}
                {/* Changed text-gray-300 to text-black */}
                <h1 className="font-chivo animate-pulse bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-[160px] uppercase text-transparent opacity-30">
                    Nithin
                </h1>
                <h3 className="font-rubik animate-fade-in-up text-[200px] uppercase text-black">
                    {' '}
                    {/* Changed text-white to text-black */}
                    PORTFOLIO
                </h3>
                <p className="font-caveat animate-fade-in-down py-2 text-black">
                    {' '}
                    {/* Changed text-white to text-black */}
                    WEB DEVELOPER
                </p>
            </div>
        </div>
    )
}

export default Home
