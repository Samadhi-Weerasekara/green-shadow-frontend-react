import '../css/Header.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import proPic from "../assets/profilePic.jpg"


export  function Header({searchbar}: { searchbar: string }) {

    const [currentDateTime, setCurrentDateTime] = useState<string>("");
    const navigate= useNavigate();

    useEffect(() => {
        const updateDateTime=()=>{
            const now=new Date();
            const formattedDateTime=now.toLocaleDateString("en-US",{
                month:"2-digit",
                day:"2-digit",
                year:"numeric",
                hour:"2-digit",
                minute:"2-digit",
                hour12:true,
            });

            setCurrentDateTime(formattedDateTime);
        }
        updateDateTime();
        const intervalId=setInterval(updateDateTime,1000);
        return ()=>{
            clearInterval(intervalId);
        }
    });




    return(
        <>
            <header className="flex justify-between items-center mb-6">
                <form className="form relative">
                    <button className="absolute left-2 -translate-y-1/2 top-1/2 p-25">
                        <svg
                            width="17"
                            height="16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-labelledby="search"
                            className="w-5 h-5 text-gray-700"
                        >
                            <path
                                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                stroke="currentColor"
                                stroke-width="1.333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </button>
                    <input
                        className="input rounded-full px-7 py-2 border-2 border-transparent focus:outline-none focus:border-bg-slate-600	 placeholder-gray-400 transition-all duration-300 shadow-md"
                        placeholder={searchbar}
                        required
                        type="text"
                    />
                    <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </form>
       <div >
            <div className="flex items-center gap-2">
                <h1 className="text-s font-normal">{currentDateTime}</h1>
                <img src={proPic} alt="logo" className="w-10 h-10 rounded-full cursor-pointer" onClick={()=>navigate("/profile")}/>
            </div>
       </div>
            </header>
        </>
    )
}