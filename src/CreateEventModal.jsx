import { useState } from "react";

const CreateEventModal = ({ setIsModalVisible }) => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState();
    const [category, setCategory] = useState();
    const [guests, setGuests] = useState([]);
    const [number, setNumber] = useState();
    const [registrationLink, setregistrationLink] = useState("");
    const [host, setHost] = useState("");
    const [description, setDescription] = useState("");

    async function postEvent() {
        e.preventDefault()

        const token = localStorage.getItem("token")

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
        })

        const data = response.json();

        if (response.ok) {
            console.log(data.message)
        }

    }


    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div onClick={(e) => { e.stopPropagation() }} className=" bg-white w-[35%] self-center p-6 rounded-xl dark:bg-[#1a2e1a] ">
                <div className="flex justify-between">
                    <p className="font-extrabold text-[1.3rem] dark:text-gray-100">Post an Event</p>
                    <div onClick={() => { setIsModalVisible(false) }} className="bg-gray-200 cursor-pointer h-7 w-7 rounded-full flex items-center justify-center dark:bg-[#0f1a0f]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className="grid gap-1 mt-6 ">
                    <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Event Title <span className="text-red-500 text-sm">*</span></p>
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="e.g Inter-Faculty Football Tournament" className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                </div>
                <div className="grid gap-1 mt-2">
                    <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Location</p>
                    <input onChange={(e) => { setLocation(e.target.value) }} type="text" placeholder="e.g Senate Building, New Hall" className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Date <span className="text-red-500 text-sm">*</span></p>
                        <input onChange={(e) => { setDate(e.target.value) }} type="date" className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                    <div>
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Category <span className="text-red-500 text-sm">*</span></p>
                        <input onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="e.g " className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Guests</p>
                        <input onChange={(e) => { setGuests(e.target.value) }} type="text" placeholder="e.g SRC Executives" className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                    <div>
                        <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Phone Number</p>
                        <input onChange={(e) => { setNumber(e.target.value) }} type="text" placeholder="e.g 08012344546" className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                    </div>
                </div>
                <div className="grid gap-1 mt-2">
                    <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Registration Link</p>
                    <input onChange={(e) => { setregistrationLink(e.target.value) }} type="text" placeholder="e.g Google Form" className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                </div>
                <div className="grid gap-1 mt-2">
                    <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Host</p>
                    <input onChange={(e) => { setHost(e.target.value) }} type="text" placeholder="e.g Google Form" className="bg-gray-50 w-full border border-gray-300 h-9 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" />
                </div>
                <div className="grid gap-1 mt-2">
                    <p className="text-[1.05rem] font-extrabold dark:text-gray-100">Description <span className="text-red-500 text-sm">*</span></p>
                    <textarea onChange={(e) => { setDescription(e.target.value) }} placeholder="What's this event about?" className="bg-gray-50 resize-none w-full py-2 border border-gray-300 h-18 rounded-lg px-3 placeholder:text-[0.9rem] dark:bg-[#0f1a0f] dark:placeholder:text-gray-300" ></textarea>
                </div>
                <div className="mt-4 bg-bold-green text-white h-10 cursor-pointer items-center flex justify-center rounded-lg">
                    <p className="text-center dark:text-gray-100">Post Event</p>
                </div>
            </div>
        </div>
    );
}

export default CreateEventModal;