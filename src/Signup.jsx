import { use } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    async function handleSignup(e) {
        e.preventDefault();

        const response = await fetch("")
    }



    return (
        <div className="bg-[url('./assets/loginBg13.png')] h-screen w-full bg-cover bg-no-repeat overflow-hidden font-space flex items-center justify-center">
            <div className="bg-white rounded-2xl w-100 p-8">
                <p className="font-bold-space text-[1.8rem] flex gap-1 items-center">Join <p className="text-[1.8rem] font-extrabold">futa<span className="text-green">EVENTS</span></p></p>
                <p className="text-gray-500 text-[0.8rem] w-[85%]">Create your account and never miss a campus event.</p>
                <div>
                    <div className="my-2">
                        <p className="text-[0.9rem] py-1">Full Name</p>
                        <div className="flex gap-2 items-center w-full border border-gray-200 px-2 rounded-lg bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-4.5 w-4.5 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <input onChange={(e)=> {setFullName(e.target.value)}} type="text" className="bg-gray-100 w-full h-10 outline-0" />
                        </div>
                    </div>
                    <div className="my-2">
                        <p className="text-[0.9rem] py-1">Email</p>
                        <div className="flex gap-2 items-center w-full border border-gray-200 px-2 rounded-lg bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-4.5 w-4.5 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input onChange={(e)=> {setEmail(e.target.value)}} type="text" className="bg-gray-100 w-full h-10 outline-0" />
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="flex my-1">
                            <p className="text-[0.9rem]">Password</p>
                        </div>
                        <div className="flex gap-2 items-center w-full border border-gray-200 px-2 rounded-lg bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-4.5 w-4.5 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input onChange={(e)=> {setPassword(e.target.value)}} type={isPasswordVisible ? "text" : "password"} className="bg-gray-100 w-full h-10 outline-0" />
                            {isPasswordVisible ? <svg onClick={() => { setIsPasswordVisible(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-5 w-5 text-gray-500 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg> :
                                <svg onClick={() => { setIsPasswordVisible(true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="h-5 w-5 text-gray-500 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>}
                        </div>
                        <div className="mt-4">
                            <div className="bg-green flex items-center justify-center h-10 my-3 rounded-lg cursor-pointer">
                                <p className="text-white">Log In</p>
                            </div>
                            <p className="text-gray-500 text-center text-[0.8rem]">Already have an account? <Link to="/login"><span className="text-green">Log In</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;