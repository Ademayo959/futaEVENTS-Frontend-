import { Link } from "react-router-dom";
import { useState } from "react";
import CreateEventModal from "./CreateEventModal";
import FooterMobile from "./FooterMobile";

const Dashboard = () => {
    const events = [
        {
            "id": 1,
            "title": "AI & The Future of African Tech",
            "category": "Tech",
            "date": "2026-07-04",
            "time": "10:00 AM",
            "location": "ICT Building Auditorium",
            "postedBy": "Hack Club FUTA"
        },
        {
            "id": 2,
            "title": "End of Semester Hangout",
            "category": "Social",
            "date": "2026-07-10",
            "time": "4:00 PM",
            "location": "SUB Complex",
            "postedBy": "Student Union Government"
        },
        {
            "id": 3,
            "title": "Inter-Faculty Football Tournament",
            "category": "Sport",
            "date": "2026-07-15",
            "time": "8:00 AM",
            "location": "FUTA Sports Complex",
            "postedBy": "FUTA Sports Council"
        },
        {
            "id": 4,
            "title": "Final Year Project Defense Seminar",
            "category": "Academic",
            "date": "2026-07-08",
            "time": "9:00 AM",
            "location": "SEET Lecture Theatre 1",
            "postedBy": "Dept. of Computer Science"
        },
        {
            "id": 5,
            "title": "Campus Fellowship Revival Night",
            "category": "Religious",
            "date": "2026-07-11",
            "time": "6:00 PM",
            "location": "FUTA Chapel",
            "postedBy": "FUTA Christian Association"
        },
        {
            "id": 6,
            "title": "Web3 & Blockchain Workshop",
            "category": "Tech",
            "date": "2026-07-18",
            "time": "11:00 AM",
            "location": "ICT Building Lab 2",
            "postedBy": "FUTA Tech Society"
        },
        {
            "id": 7,
            "title": "Cultural Day Celebration",
            "category": "Social",
            "date": "2026-07-20",
            "time": "2:00 PM",
            "location": "FUTA Main Auditorium",
            "postedBy": "Student Affairs Division"
        },
        {
            "id": 8,
            "title": "100 Level Mathematics Clinic",
            "category": "Academic",
            "date": "2026-07-06",
            "time": "10:00 AM",
            "location": "FUTA Library Seminar Room",
            "postedBy": "Dept. of Mathematics"
        },
        {
            "id": 9,
            "title": "Basketball Interhouse Competition",
            "category": "Sport",
            "date": "2026-07-22",
            "time": "3:00 PM",
            "location": "FUTA Basketball Court",
            "postedBy": "Hall of Residence Council"
        },
        {
            "id": 10,
            "title": "Muslim Students Society Jumat Lecture",
            "category": "Religious",
            "date": "2026-07-12",
            "time": "1:00 PM",
            "location": "FUTA Central Mosque",
            "postedBy": "Muslim Students Society"
        },
        {
            "id": 11,
            "title": "SOC Governor's Cup",
            "category": "Sport",
            "date": "2026-07-11",
            "time": "5:00 PM",
            "location": "Mini Pitch",
            "postedBy": "Hall of Residence Council"
        },
        {
            "id": 12,
            "title": "JCCF Bible Teaching",
            "category": "Religious",
            "date": "2026-07-14",
            "time": "5:00 PM",
            "location": "FUTA Central Mosque",
            "postedBy": "JCCF Media Team"
        }
    ]

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

    return (
        <div className="font-space bg-gray-100 dark:bg-[#0f1a0f] overflow-hidden">
            <div className="border-b py-3 bg-white dark:bg-[#1a2e1a] border-gray-300 dark:border-gray-700 max-lg:px-3">
                <div className="max-w-7xl mx-auto flex justify-between items-center max-sm:gap-6">
                    <div>
                        <Link to="/" className="cursor-pointer">
                            <p className="text-[35px] font-extrabold dark:text-gray-100 max-sm:text-[1.2rem]">futa<span className="text-green">EVENTS</span></p>
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center max-sm:gap-2">
                        <div>
                            <input type="text" className="h-9 bg-gray-100 w-100 px-2 dark:bg-[#0f1a0f] dark:placeholder:text-gray-300 max-lg:w-80 max-sm:h-8 max-sm:w-full" placeholder="Search events..." />
                        </div>
                        <div>
                            <div className="bg-green-100 h-11 w-11 flex items-center justify-center rounded-full max-sm:h-7 max-sm:w-7 dark:bg-green-900">
                                <p className="text-green-700 font-extrabold text-[1.2rem] dark:text-green-200 max-sm:text-[0.7rem]">OA</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            const newMode = document.documentElement.classList.toggle('dark')
                            localStorage.setItem('theme', newMode ? 'dark' : 'light')
                            setIsDark(newMode)
                        }}>
                            {!isDark ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-5 w-5 text-gray-600 cursor-pointer dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-5 w-5 text-gray-600 cursor-pointer dark:text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto  w-full py-4 ">
                <div className="flex justify-between items-end max-lg:px-3 max-sm:grid max-sm:gap-3">
                    <div>
                        <p className="font-bold-space text-[1.9rem] dark:text-gray-100">What's Happening</p>
                        <p className="text-gray-500 text-[0.9rem] dark:text-gray-400">Latest events across FUTA campus</p>
                    </div>
                    <div className="flex gap-2 max-sm:flex-wrap">
                        <div className="bg-white border border-gray-300 px-3 py-1 rounded-lg w-fit dark:border-gray-700 dark:bg-[#1e2a1e]">
                            <p className="text-gray-500 dark:text-gray-400">Tech</p>
                        </div>
                        <div className="bg-white border border-gray-300 px-3 py-1 rounded-lg w-fit dark:border-gray-700 dark:bg-[#1e2a1e]">
                            <p className="text-gray-500 dark:text-gray-400">Social</p>
                        </div>
                        <div className="bg-white border border-gray-300 px-3 py-1 rounded-lg w-fit dark:border-gray-700 dark:bg-[#1e2a1e]">
                            <p className="text-gray-500 dark:text-gray-400">Sport</p>
                        </div>
                        <div className="bg-white border border-gray-300 px-3 py-1 rounded-lg w-fit dark:border-gray-700 dark:bg-[#1e2a1e]">
                            <p className="text-gray-500 dark:text-gray-400">Academic</p>
                        </div>
                        <div className="bg-white border border-gray-300 px-3 py-1 rounded-lg w-fit dark:border-gray-700 dark:bg-[#1e2a1e]">
                            <p className="text-gray-500 dark:text-gray-400">Religious</p>
                        </div>
                    </div>
                </div>
                <div className="columns-4 my-8 max-lg:columns-3 max-sm:columns-1 max-sm:px-4">
                    {events.map((event) => (
                        <div className="w-full rounded-2xl bg-white h-fit border border-gray-300 p-4 mb-4 break-inside-avoid dark:border-gray-700 dark:bg-[#1e2a1e]">
                            <div className="bg-green-100 px-2 py-1 rounded-md w-fit dark:bg-green-900">
                                <p className="font-extrabold text-green-700 text-[0.8rem] dark:text-green-200">{event.category}</p>
                            </div>
                            <div className="my-3">
                                <p className="text-[1.2rem] font-extrabold cursor-pointer leading-7 hover:underline hover:underline-offset-2 dark:text-gray-100">{event.title}</p>
                            </div>
                            <div className="grid gap-1  dark:text-gray-400">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-gray-500  dark:text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    <p className="text-gray-500 dark:text-gray-400">{new Date(event.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} | {event.time}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-gray-500  dark:text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p className="text-gray-500 dark:text-gray-400">{event.location}</p>
                                </div>
                            </div>
                            <hr className="text-gray-300 my-3 dark:text-gray-500" />
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3 w-3 text-gray-500  dark:text-gray-400" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <p className="text-gray-500 text-[0.8rem]  dark:text-gray-400">Posted by <span className="font-extrabold text-black dark:text-gray-100">{event.postedBy}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div onClick={() => { setIsModalVisible(true) }} className="right-15 top-[85vh] fixed bg-green h-16 w-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg max-sm:right-8 max-sm:top-[82vh] max-sm:h-13 max-sm:w-13 dark:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-10 w-10 text-white max-sm:h-8 max-sm:w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>
            <div className="hidden max-sm:block">
                <FooterMobile />
            </div>
            {isModalVisible && (<div className="h-screen fixed z-10 inset-0 w-full bg-black/60" onClick={() => { setIsModalVisible(false) }}>
                <CreateEventModal setIsModalVisible={setIsModalVisible} />
            </div>)
            }
        </div>
    );
}

export default Dashboard;