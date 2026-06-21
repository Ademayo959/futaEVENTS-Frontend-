import Navbar from "./Navbar";
import Footer from "./Footer";

const Developers = () => {
    const copyUrl = () => {
        navigator.clipboard.writeText("https://futa-events-api.onrender.com/events")
    }

    return (
        <div className="font-space">
            <Navbar />
            <div className="max-w-7xl mx-auto border-b border-gray-300">
                <div className="py-16 border-b border-gray-300">
                    <div className="flex my-4 justify-self-center bg-green-100 items-center w-fit px-4 py-0.5 text-bold-green text-[0.8rem] rounded-2xl gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}
                            fill={"currentColor"} viewBox={"0 0 24 24"}>
                            {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                            <path d="M12 14h6v2h-6zM6.29 9.71 8.59 12l-2.3 2.29 1.42 1.42 3.7-3.71-3.7-3.71z"></path><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 18V6h16v12z"></path>
                        </svg>
                        <p className="font-extrabold">PUBLIC API | FREE | NO AUTH</p>
                    </div>
                    <div>
                        <p className="text-[3.5rem] justify-self-center font-bold-space font-extralight">futa<span className="text-green">EVENTS</span> API</p>
                        <p className="justify-self-center w-150 text-gray-500 text-[1.2rem] text-center">Get every event happening in FUTA - title, location, host, registration link and more. Free. Open. Simple.</p>
                    </div>
                </div>
                <div className="grid grid-cols-[20%_75%] gap-x-[5%] mt-18">
                    <div className="grid gap-y-2 h-fit">
                        <div className="flex items-center h-fit gap-2 p-2 bg-green-100 text-bold-green rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path d="M19 9h-5V3a1 1 0 0 0-.69-.95c-.41-.13-.86.01-1.12.36l-8 11a1 1 0 0 0-.08 1.04A1 1 0 0 0 5 15h5v6a1 1 0 0 0 1 1c.31 0 .62-.15.81-.41l8-11a1 1 0 0 0 .08-1.04A1 1 0 0 0 19 9m-7 8.92V14c0-.55-.45-1-1-1H6.96L12 6.08V10c0 .55.45 1 1 1h4.04z"></path>
                            </svg>
                            <p>Endpoint</p>
                        </div>
                        <div className="flex items-center h-fit gap-2 p-2 text-gray-500 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path d="M4 8c0 2.8-1.68 2.99-2.01 3v2c.1 0 2.01.03 2.01 3 0 4.74 3.27 6 5 6h1v-2h-.99C8.7 20 6 19.83 6 16c0-1.99-.67-3.25-1.5-4C5.34 11.25 6 9.99 6 8c0-3.83 2.7-3.99 3-4h1V2H9C7.27 2 4 3.26 4 8m16 0c0-4.74-3.27-6-5-6h-1v2h.99C15.3 4 18 4.17 18 8c0 1.99.67 3.25 1.5 4-.84.75-1.5 2.01-1.5 4 0 3.83-2.7 3.99-3 4h-1v2h1c1.73 0 5-1.26 5-6 0-2.8 1.68-2.99 2.01-3v-2c-.1 0-2.01-.03-2.01-3"></path>
                            </svg>
                            <p>Response Format</p>
                        </div>
                        <div className="flex items-center h-fit gap-2 p-2 text-gray-500 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path d="M8 11h13v2H8zm0-5h13v2H8zm0 10h13v2H8zM3 5.5h3v3H3zm0 5h3v3H3zm0 5h3v3H3z"></path>
                            </svg>
                            <p>Response Fields</p>
                        </div>
                        <div className="flex items-center h-fit gap-2 p-2 text-gray-500 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                fill={"currentColor"} viewBox={"0 0 24 24"}>
                                {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                <path d="m16.71 16.71 4.7-4.71-4.7-4.71-1.42 1.42 3.3 3.29-3.3 3.29zm-8-1.42L5.41 12l3.3-3.29-1.42-1.42L2.59 12l4.7 4.71zM14 3l-.98-.22-2 9-2 9L10 21l.98.22 2-9 2-9z"></path>
                            </svg>
                            <p>How to call it</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-[2.2rem] font-extrabold">Endpoint</p>
                            <p className="text-gray-500">One endpoint. Returns all upcoming campus events.</p>
                            <div className="flex justify-between my-4 p-4 border rounded-4xl bg-gray-50 border-gray-300 items-center">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-green text-white px-3 py-1 rounded-lg">
                                        <p>GET</p>
                                    </div>
                                    <p>https://futa-events-api.onrender.com/events</p>
                                </div>
                                <div onClick={() => { copyUrl }} className="cursor-pointer p-2 flex gap-2 text-gray-500 items-center hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}
                                        fill={"currentColor"} viewBox={"0 0 24 24"}>
                                        {/* Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free */}
                                        <path d="M20 2H10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H10V4h10z"></path><path d="M14 20H4V10h2V8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h-2z"></path>
                                    </svg>
                                    <p>Copy</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-18">
                            <p className="text-[2.2rem] font-extrabold">Response Format</p>
                            <p className="text-gray-500">Returns a JSON array of event objects</p>
                            <div className="bg-gray-900 rounded-2xl my-4">
                                <div className="flex justify-between items-center py-2 px-4 border-b border-gray-700">
                                    <div className="flex gap-2">
                                        <div className="bg-red-700 h-3 w-3 rounded-full"></div>
                                        <div className="bg-yellow-400 h-3 w-3 rounded-full"></div>
                                        <div className="bg-green-600 h-3 w-3 rounded-full"></div>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">json</p>
                                    </div>
                                </div>
                                <div className="text-gray-400 px-4 py-4">
                                    <pre className="text-start">
                                        {`
[
    {
        "id": "64f1a2b3c4d5e6f7a8b9c0d1",
        "title": "Tech Summit FUTA 2024",
        "description": "A one day summit bringing together tech minds across FUTA",
        "date": "2024-11-20",
        "location": "New Auditorium",
        "host": "CSC Department",
        "phoneNumber": "08012345678",
        "guests": ["Dr. Adewale", "Engr. Bello"],
        "registrationLink": "https://forms.gle/example"
    }
]                                       `}
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-[2.2rem] font-extrabold">Response Fields</p>
                            <p className="text-gray-500">Each events object contains the following field</p>
                            <div className="border border-gray-300 my-6 rounded-xl">
                                <div className="grid bg-gray-100 rounded-t-xl grid-cols-3 px-6 py-3 border-b border-gray-200">
                                    <p>FIELD</p>
                                    <p>TYPE</p>
                                    <p>DESCRIPTION</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">id</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>Unique event identifier</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">title</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>Name of the event</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">description</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>Short summary of the event</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">date</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>Date is YYYY-MM-DD format</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">location</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>Venue on campus</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">host</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>Organising department or group</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">phoneNumber</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>Contact numnber for event</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 border-b border-gray-200">
                                    <p className="text-bold-green">guests</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">array</p>
                                    </div>
                                    <p>List of notable attendees or speakers</p>
                                </div>
                                <div className="grid grid-cols-3 bg-white py-3 px-6 rounded-2xl">
                                    <p className="text-bold-green">registrationLink</p>
                                    <div className="bg-green-100 px-3 w-fit rounded-sm text-bold-green">
                                        <p className="text-[0.9rem]">string</p>
                                    </div>
                                    <p>External sign-up link if available</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[2.2rem] font-extrabold">How to Call It</p>
                            <p className="text-gray-500">No API keys, no auth. Just make a request.</p>
                            <div className="bg-gray-900 rounded-2xl my-8">
                                <div className="px-3 py-2 border-b border-gray-300 m-0">
                                    <p className="text-gray-300">javascript</p>
                                </div>
                                <pre className="text-gray-300 p-4">
{`
fetch('https://futa-events-api.onrender.com/events')
  .then(res => res.json())
  .then(events => console.log(events))
`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Developers;