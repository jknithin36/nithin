import PageNav from '../components/PageNav'

function GetInTouch() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
            <PageNav />
            <div className="text-center text-black">
                <h1 className="font-chivo mb-4 text-[60px] uppercase sm:text-[80px] md:text-[100px] lg:text-[120px]">
                    JK NITHIN KUMAR
                </h1>
                <h3 className="font-rubik mb-8 text-[40px] uppercase sm:text-[50px] md:text-[60px] lg:text-[70px]">
                    WORK WITH ME
                </h3>
                <div className="space-y-4">
                    <p className="font-caveat py-2 text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                        Sassafras, Holly Park, Kent 44240 Ohio
                    </p>
                    <p className="font-caveat py-2 text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                        +1 330-281-2484
                    </p>
                    <p className="font-caveat py-2 text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                        insane414425@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
