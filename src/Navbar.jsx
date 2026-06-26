import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="font-space">
            <div className="max-w-7xl mx-auto flex justify-between items-center w-full py-4 max-sm:px-2 max-lg:px-4">
                <div>
                    <Link to="/" className="cursor-pointer">
                        <p className="text-[35px] font-extrabold max-sm:text-[1.6rem]">futa<span className="text-green">EVENTS</span></p>
                    </Link>
                </div>
                <div className="flex gap-3 text-gray-500 max-sm:hidden">
                    <p className="cursor-pointer">How it Works</p>
                    <Link to="/developers" className="cursor-pointer">
                        <p>Developers</p>
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link to="/login">
                        <div className="border cursor-pointer border-gray-200 px-5 py-1 w-fit rounded-lg max-sm:px-3">
                            <p className="max-sm:text-[0.85rem]">Log In</p>
                        </div>
                    </Link>
                    <Link to="/signup">
                        <div className="px-5 py-1 cursor-pointer w-fit rounded-lg bg-green text-white max-sm:px-3">
                            <p className="max-sm:text-[0.85rem]">Sign Up</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;