import { useState } from "react";
import toast from "react-hot-toast";

const CreateEventModal = ({ setIsModalVisible }) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [guests, setGuests] = useState([]);
    const [number, setNumber] = useState("");
    const [registrationLink, setregistrationLink] = useState("");
    const [host, setHost] = useState("");
    const [description, setDescription] = useState("");
    const [isPosting, setIsPosting] = useState(false);

    async function postEvent() {
        if (!title || !date || !category || !description) {
            toast.error("Please fill all required fields");
            return;
        }

        setIsPosting(true);
        const token = localStorage.getItem("token");

        try {
            const response = await fetch("https://futa-events-api.onrender.com/events", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    title,
                    description,
                    date,
                    category,
                    location,
                    host,
                    number,
                    guests,
                    registrationLink
                })
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message || "Event posted successfully");
                setIsModalVisible(false);
            } else {
                toast.error(data.message || "Something went wrong");
            }
        } catch (err) {
            console.log("Err detected:", err);
            toast.error("Something went wrong");
        } finally {
            setIsPosting(false);
        }
    }

    return (
        <div className="flex justify-center items-end sm:items-center w-screen h-screen sm:p-4">
            <div
                onClick={(e) => { e.stopPropagation() }}
                className="bg-white w-full sm:max-w-md md:max-w-lg lg:w-[35%] self-end sm:self-center rounded-t-2xl sm:rounded-xl dark:bg-[#1a2e1a] h-full sm:h-auto flex flex-col"
            >
                <div className="flex justify-between items-center px-6 pt-6 pb-4 sticky top-0 bg-white dark:bg-[#1a2e1a] z-10 sm:static">
                    <p className="font-extrabold text-[1.3rem] dark:text-gray-100">Post an Event</p>
                    <div onClick={() => { setIsModalVisible(false) }} className="bg-gray-200 cursor-pointer h-8 w-8 sm:h-7 sm:w-7 rounded-full flex items-center justify-center dark:bg-[#0f1a0f]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <div className="px-6 overflow-y-auto flex-1">
                    <div className="grid gap-1 mt-2">
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Event Title <span className="text-red-500 text-sm">*</span></p>
                        <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="e.g Inter-Faculty Football Tournament" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                    <div className="grid gap-1 mt-3">
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Location</p>
                        <input value={location} onChange={(e) => { setLocation(e.target.value) }} type="text" placeholder="e.g Senate Building, New Hall" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                        <div>
                            <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Date <span className="text-red-500 text-sm">*</span></p>
                            <input value={date} onChange={(e) => { setDate(e.target.value) }} type="date" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                        </div>
                        <div>
                            <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Category <span className="text-red-500 text-sm">*</span></p>
                            <input value={category} onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="e.g Tech" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                        <div>
                            <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Guests</p>
                            <input value={guests} onChange={(e) => { setGuests(e.target.value) }} type="text" placeholder="e.g SRC Executives" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                        </div>
                        <div>
                            <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Phone Number</p>
                            <input value={number} onChange={(e) => { setNumber(e.target.value) }} type="text" placeholder="e.g 08012344546" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                        </div>
                    </div>
                    <div className="grid gap-1 mt-3">
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Registration Link</p>
                        <input value={registrationLink} onChange={(e) => { setregistrationLink(e.target.value) }} type="text" placeholder="e.g Google Form" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                    <div className="grid gap-1 mt-3">
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Host</p>
                        <input value={host} onChange={(e) => { setHost(e.target.value) }} type="text" placeholder="e.g Hack Club FUTA" className="bg-gray-50 w-full border border-gray-300 h-11 sm:h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                    <div className="grid gap-1 mt-3 mb-4">
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Description <span className="text-red-500 text-sm">*</span></p>
                        <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="What's this event about?" className="bg-gray-50 resize-none w-full py-2 border border-gray-300 h-24 sm:h-18 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" ></textarea>
                    </div>
                </div>

                <div className="px-6 py-4 sticky bottom-0 bg-red-600 dark:bg-[#1a2e1a] sm:static">
                    <div
                        onClick={isPosting ? undefined : postEvent}
                        className={`bg-bold-green text-white h-12 sm:h-10 items-center flex justify-center rounded-lg ${isPosting ? "opacity-60" : "cursor-pointer"}`}
                    >
                        <p className="text-center dark:text-gray-100">{isPosting ? "Posting..." : "Post Event"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEventModal;