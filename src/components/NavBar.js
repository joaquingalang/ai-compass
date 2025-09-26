import AppLogo from "../assets/logo.png";

function NavBar() {
    return (
        <div className="bg-brand-indigo-400 w-full h-20">
            <div className="h-full mx-10 flex justify-between items-center">
                <img src={AppLogo} className="h-10"/>
                <div className="w-[40%] flex justify-between items-center">
                    <p className="text-white font-outfit text-xl cursor-pointer">Home</p>
                    <p className="text-white font-outfit text-xl cursor-pointer">Features</p>
                    <p className="text-white font-outfit text-xl cursor-pointer">Researchers</p>
                    <div className="bg-brand-turqoise-200 rounded-xl  cursor-pointer">
                        <p className="text-white font-outfit text-xl py-2 px-5">Get in Touch →</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;