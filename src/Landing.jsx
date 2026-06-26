import { Link } from "react-router-dom"
import cup from "./assets/greencup.png"
import confetti from "./assets/confetti2.png"
import balloon from "./assets/balloon.png"
import ticket from "./assets/ticket.png"
import microphone from "./assets/microphone.png"
import Navbar from "./Navbar"
import FAQ from "./FAQ"
import Footer from "./Footer"

const Landing = () => {
    const faqs = [
        {
            question: "Who can post an event?",
            answer: "Anyone with a futaEVENTS account can post an event. Whether you're a student, a department, a club, or a society — if it's happening in FUTA, you can put it here."
        },
        {
            question: "Is futaEVENTS free to use?",
            answer: "Completely free. No subscription, no hidden charges. Discover and post events without spending a kobo."
        },
        {
            question: "How do I register for an event?",
            answer: "Each event has a registration link provided by the organizer. Just click it and you'll be taken directly to their registration form — could be a Google Form, Eventbrite, or wherever they set it up."
        },
        {
            question: "What kind of events can I find here?",
            answer: "Tech talks, parties, sports competitions, academic seminars, fellowship programs, departmental events — if it's on FUTA campus, it belongs here."
        },
        {
            question: "How do I contact an event organizer?",
            answer: "Every event listing includes the organizer's phone number so you can reach them directly for any questions."
        }
    ]

    return (
        <div className="relative h-screen font-space max-lg:overflow-x-hidden">
            <Navbar />
            <div className="mt-24 max-md:mt-18">
                <img src={cup} alt="" className="absolute z-0 -left-46 rotate-45 w-100  max-lg:w-80 top-70 max-lg:-left-55 max-sm:hidden" />
                <img src={confetti} alt="" className="absolute z-0 -left-29 rotate-275 w-100 top-40 max-lg:-left-50 max-sm:hidden" />
                <img src={ticket} alt="" className="absolute z-0 -right-56 -rotate-135 w-120 max-lg:w-100 max-lg:-right-65 top-70 max-sm:hidden" />
                <img src={confetti} alt="" className="absolute z-0 -right-26 rotate-0 w-100 top-40 max-lg:-right-50 max-sm:hidden" />
                <div>
                    <div className="bg-green-100 rounded-2xl w-fit px-4 py-1 flex gap-2 items-center justify-self-center text-center my-8 max-md:my-4">
                        <div className="h-2 w-2 bg-bold-green rounded-full"></div>
                        <p className="text-bold-green font-extrabold">Built for FUTA students</p>
                    </div>
                    <div className="text-center leading-21 font-space max-md:leading-19">
                        <p className="text-[5rem] font-bold-space tracking-tighter max-lg:text-[4.1rem] max-md:font-space max-md:text-[3.7rem] z-10">Every Event.</p>
                        <p className="text-[5rem] font-bold-space tracking-tighter max-lg:text-[4.1rem] max-md:font-space max-md:text-[3.7rem] z-10">Every Corner of <span className="text-green">FUTA.</span></p>
                    </div>
                    <div className="justify-self-center">
                        <p className="text-gray-400 text-[1.2rem] text-center w-130 justify-self-center mt-12 mb-4 max-md:w-[90%]">One platform to discover, save, and attend every event happening on campus.</p>
                        <Link to="/dashboard">
                            <div className="bg-green py-3 px-12 w-fit rounded-3xl justify-self-center text-white">
                                <p className="text-[1.1rem]">See what's happening</p>
                            </div>
                        </Link>
                        <div className="flex items-center justify-self-center my-7">
                            <div className="h-8 w-8 rounded-full bg-green-300 border border-white"></div>
                            <div className="h-8 w-8 rounded-full bg-green-300 -ml-3 border border-white"></div>
                            <div className="h-8 w-8 rounded-full bg-green-400 -ml-3 border border-white"></div>
                            <div className="h-8 w-8 rounded-full bg-green-500 -ml-3 border border-white"></div>
                            <div className="ml-3 text-gray-500">500+ students already in</div>
                        </div>
                    </div>
                    <hr className="text-gray-200 mt-26 " />
                </div>
                <div className="justify-self-center py-6 mt-8">
                    <p className="text-green font-extrabold text-[15px] text-center">HOW IT WORKS</p>
                    <p className="text-[3rem] font-extrabold text-center max-lg:text-[2.5rem]">Three steps. Zero stress</p>
                    <div className="grid grid-cols-3 gap-12 my-8 max-md:grid-cols-1 max-md:justify-self-center max-lg:px-6">
                        <div className="w-full">
                            <div className="my-2 justify-self-center">
                                <div className="bg-green z-10 relative text-white ml-8 h-6 w-6 flex items-center justify-center rounded-full">
                                    <p>1</p>
                                </div>
                                <div className="bg-green-100 -mt-4 z-0 h-12 w-12 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-center font-extrabold text-[1.2rem]">Search</p>
                            <p className="text-gray-500 text-center text-[0.9rem]">Type in what you're looking for - a genre, a department, a keyword. Find it fast.</p>
                        </div>
                        <div className="w-full">
                            <div className="my-2 justify-self-center">
                                <div className="bg-green z-10 relative text-white ml-8 h-6 w-6 flex items-center justify-center rounded-full">
                                    <p>2</p>
                                </div>
                                <div className="bg-green-100 -mt-4 z-0 h-12 w-12 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-center font-extrabold text-[1.2rem]">Discover</p>
                            <p className="text-gray-500 text-center text-[0.9rem]">Stumble on events you knew existed. From underground hangouts to major campus shows</p>
                        </div>
                        <div className="w-full">
                            <div className="my-2 justify-self-center">
                                <div className="bg-green z-10 relative text-white ml-8 h-6 w-6 flex items-center justify-center rounded-full">
                                    <p>3</p>
                                </div>
                                <div className="bg-green-100 -mt-4 z-0 h-12 w-12 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-center font-extrabold text-[1.2rem]">Show Up</p>
                            <p className="text-gray-500 text-center text-[0.9rem]">Get there. Be present. Make the most of every momenton campus</p>
                        </div>
                    </div>
                </div>
                <div className="justify-self-center py-6 mt-8">
                    <p className="text-green font-extrabold text-[15px] text-center">WHY FUTAEVENTS</p>
                    <p className="text-[3rem] font-extrabold text-center max-lg:text-[2.5rem]">Built Different. On purpose.</p>
                    <div className="grid grid-cols-3 gap-12 my-8 max-lg:gap-4 max-md:grid-cols-1 max-md:justify-self-center max-lg:px-4">
                        <div className="w-80 max-lg:w-full max-lg:p-5 border p-8 border-gray-300 rounded-3xl">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                            </div>
                            <p className="font-extrabold text-[1.1rem] my-3">No More Missing Out</p>
                            <p className="text-gray-500 text-[0.9rem]">Never be the last to hear about an event on campus. Stay in the loop, always.</p>
                        </div>
                        <div className="w-80 max-lg:w-full max-lg:p-5 border p-8 border-gray-300 rounded-3xl">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                </svg>
                            </div>
                            <p className="font-extrabold text-[1.1rem] my-3">Everything in One Place</p>
                            <p className="text-gray-500 text-[0.9rem]">Tech talks, parties, sports, academic events - all here, all organised, no hunting around.</p>
                        </div>
                        <div className="w-80 max-lg:w-full max-lg:p-5 border p-8 border-gray-300 rounded-3xl">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                </svg>
                            </div>
                            <p className="font-extrabold text-[1.1rem] my-3">Built for FUTA, By FUTA</p>
                            <p className="text-gray-500 text-[0.9rem]">This isn't a generic app. It was made by people who walk the same paths you do. It's yours.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-50 py-3 ">
                    <div className="mt-12">
                        <p className="text-center text-green">FAQ</p>
                        <p className="text-center text-[2.5rem] font-extrabold">Got Questions? We got you.</p>
                    </div>
                    <div>
                        <FAQ faqs={faqs} />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Landing;