import '../css/Main.css'
import {Outlet} from "react-router-dom";
import {Sidebar} from "../components/Sidebar.tsx";

export const MainContent = () => {
    return (
        <>
            <div className={"grid grid-cols-12 h-screen  w-screen overflow-hidden"}>
                <div className={"col-span-2 "}>
                    <Sidebar/>
                </div>
                <div className={"content col-span-10  p-6"}><Outlet/></div>

            </div>

        </>
    );
};