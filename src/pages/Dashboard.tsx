import '../css/Dashboard.css'
import {Outlet} from "react-router-dom";
import {Sidebar} from "../components/Sidebar.tsx";

export const Dashboard = () => {
    return (
        <>
            <div className={"grid grid-cols-12 h-screen  w-screen"}>
                <div className={"col-span-2"}>
                    <Sidebar/>
                </div>
                <div className={"col-span-10 bg-gray-300 p-4"}><Outlet/></div>

            </div>

        </>
    );
};