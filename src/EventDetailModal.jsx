import { useState, useEffect } from "react";

const getCountdown = (eventDateTime) => {
    const diff = eventDateTime - new Date();
    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
}

const EventDetailModal = ({ event, onClose }) => {
    const eventDateTime = new Date(`${event.date} ${event.time}`);
    const [countdown, setCountdown] = useState(() => getCountdown(eventDateTime));

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(getCountdown(eventDateTime));
        }, 1000);
        return () => clearInterval(interval);
    }, [event]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center sm:bg-black/60">
            <div className="bg-white dark:bg-[#1a2e1a] w-full h-full sm:h-auto sm:max-w-lg sm:rounded-2xl overflow-y-auto">
                <div className="flex items-center px-6 pt-6 pb-2 sm:justify-end">
                    <div onClick={onClose} className="sm:hidden flex items-center gap-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 dark:text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <p className="dark:text-gray-100">Back</p>
                    </div>
                    <div onClick={onClose} className="hidden sm:flex bg-gray-200 cursor-pointer h-7 w-7 rounded-full items-center justify-center dark:bg-[#0f1a0f]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <div className="px-6 pb-8">
                    <div className="bg-green-100 px-3 py-1 rounded-full w-fit dark:bg-green-900">
                        <p className="font-extrabold text-green-700 text-[0.85rem] dark:text-green-200">{event.category}</p>
                    </div>

                    <p className="text-[1.6rem] font-extrabold mt-4 leading-8 dark:text-gray-100">{event.title}</p>

                    <div className="grid gap-3 mt-5">
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-5 w-5 text-green-700 dark:text-green-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            <p className="text-gray-600 dark:text-gray-300">
                                {new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })} at {event.time}
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-5 w-5 text-green-700 dark:text-green-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p className="text-gray-600 dark:text-gray-300">{event.location || "Location TBA"}</p>
                        </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mt-5 leading-6">
                        {event.description || `Posted by ${event.postedBy}. Come through and be part of it.`}
                    </p>

                    {countdown && (
                        <div className="bg-gray-50 dark:bg-[#0f1a0f] rounded-xl p-5 mt-6">
                            <p className="text-green-700 dark:text-green-300 font-extrabold text-[0.85rem] tracking-wide mb-3">STARTS IN</p>
                            <div className="grid grid-cols-4 gap-2 text-center">
                                <div>
                                    <p className="text-[1.8rem] font-extrabold text-green-700 dark:text-green-300">{String(countdown.days).padStart(2, "0")}</p>
                                    <p className="text-[0.7rem] text-gray-500 dark:text-gray-400">DAYS</p>
                                </div>
                                <div>
                                    <p className="text-[1.8rem] font-extrabold text-green-700 dark:text-green-300">{String(countdown.hours).padStart(2, "0")}</p>
                                    <p className="text-[0.7rem] text-gray-500 dark:text-gray-400">HOURS</p>
                                </div>
                                <div>
                                    <p className="text-[1.8rem] font-extrabold text-green-700 dark:text-green-300">{String(countdown.minutes).padStart(2, "0")}</p>
                                    <p className="text-[0.7rem] text-gray-500 dark:text-gray-400">MINUTES</p>
                                </div>
                                <div>
                                    <p className="text-[1.8rem] font-extrabold text-green-700 dark:text-green-300">{String(countdown.seconds).padStart(2, "0")}</p>
                                    <p className="text-[0.7rem] text-gray-500 dark:text-gray-400">SECONDS</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EventDetailModal;