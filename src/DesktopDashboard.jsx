import { useState } from "react";
import { Link } from "react-router-dom";
import CreateEventModal from "./CreateEventModal";
import EventDetailModal from "./EventDetailModal";

const DesktopDashboard = ({ events, isDark, toggleDark, isModalVisible, setIsModalVisible }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    return (
        <div className="font-space bg-gray-100 dark:bg-[#0f1a0f] overflow-hidden">
            <div className="border-b py-3 bg-white dark:bg-[#1a2e1a] border-gray-300 dark:border-gray-700">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="cursor-pointer">
                            <p className="text-[35px] font-extrabold dark:text-gray-100">futa<span className="text-green">EVENTS</span></p>
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div>
                            <input type="text" className="h-9 bg-gray-100 w-100 px-2 dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" placeholder="Search events..." />
                        </div>
                        <div>
                            <div className="bg-green-100 h-11 w-11 flex items-center justify-center rounded-full dark:bg-green-900">
                                <p className="text-green-700 font-extrabold text-[1.2rem] dark:text-green-200">OA</p>
                            </div>
                        </div>
                        <div onClick={toggleDark}>
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
            <div className="max-w-7xl mx-auto w-full py-4">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="font-bold-space text-[1.9rem] dark:text-gray-100">What's Happening</p>
                        <p className="text-gray-500 text-[0.9rem] dark:text-gray-400">Latest events across FUTA campus</p>
                    </div>
                    <div className="flex gap-2">
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
                <div className="columns-4 my-8">
                    {events.map((event) => (
                        <div key={event.id} onClick={() => setSelectedEvent(event)} className="w-full rounded-2xl bg-white h-fit border border-gray-300 p-4 mb-4 break-inside-avoid cursor-pointer dark:border-gray-700 dark:bg-[#1e2a1e]">
                            <div className="bg-green-100 px-2 py-1 rounded-md w-fit dark:bg-green-900">
                                <p className="font-extrabold text-green-700 text-[0.8rem] dark:text-green-200">{event.category}</p>
                            </div>
                            <div className="my-3">
                                <p className="text-[1.2rem] font-extrabold cursor-pointer leading-7 hover:underline hover:underline-offset-2 dark:text-gray-100">{event.title}</p>
                            </div>
                            <div className="grid gap-1 dark:text-gray-400">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-gray-500 dark:text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                    <p className="text-gray-500 dark:text-gray-400">{new Date(event.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} | {event.time}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-gray-500 dark:text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <p className="text-gray-500 dark:text-gray-400">{event.location}</p>
                                </div>
                            </div>
                            <hr className="text-gray-300 my-3 dark:text-gray-500" />
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-3 w-3 text-gray-500 dark:text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <p className="text-gray-500 text-[0.8rem] dark:text-gray-400">Posted by <span className="font-extrabold text-black dark:text-gray-100">{event.postedBy}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div onClick={() => { setIsModalVisible(true) }} className="right-15 top-[85vh] fixed bg-green h-16 w-16 rounded-full flex items-center justify-center cursor-pointer shadow-lg dark:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-10 w-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>
            {isModalVisible && (
                <div className="h-screen fixed z-10 inset-0 w-full bg-black/60" onClick={() => { setIsModalVisible(false) }}>
                    <CreateEventModal setIsModalVisible={setIsModalVisible} />
                </div>
            )}
            {selectedEvent && (
                <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
            )}
        </div>
    );
}

export default DesktopDashboard;