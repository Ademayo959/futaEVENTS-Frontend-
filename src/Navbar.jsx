import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="font-space">
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full py-4 ">
                <div>
                    <Link to="/" className="cursor-pointer">
                        <p className="text-[35px] font-extrabold">futa<span className="text-green">EVENTS</span></p>
                    </Link>
                </div>
                <div className="flex gap-3 text-gray-500">
                    <p className="cursor-pointer">How it Works</p>
                    <Link to="/developers" className="cursor-pointer">
                        <p>Developers</p>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <div className="border cursor-pointer border-gray-200 px-5 py-1 w-fit rounded-lg">
                        <p>Log In</p>
                    </div>
                    <div className="px-5 py-1 cursor-pointer w-fit rounded-lg bg-green text-white">
                        <p>Sign Up</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;