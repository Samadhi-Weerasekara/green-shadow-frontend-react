import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faClipboardList,
    faHouse,
    faLeaf,
    faLocationDot,
    faScrewdriverWrench,
    faTruck,
    faUser,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import '../css/SideBar.css'
import logo from '../assets/Green__1_-removebg-preview.png';

export const Sidebar = () => {
    return (
        <div className=" sidebar flex flex-col h-screen   p-4">

            <div className="flex justify-center mb-6">
                <img src={logo} alt="Green Shadow Logo" className="image" />
            </div>


            <nav>
                <ul className="space-y-3">
                    <li>
                        <Link
                            to="/dashboard"
                            className="link flex items-center gap-3 p-2 rounded-md   hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faHouse} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/crop"
                            className="link flex items-center gap-3 p-2 rounded-md   hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faLeaf} />
                            <span>Crops</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/field"
                            className="link flex items-center gap-3 p-2 rounded-md  text-base hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>Fields</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/staff"
                            className="link flex items-center gap-3 p-2 rounded-md   hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Staff</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className="link flex items-center gap-3 p-2 rounded-md   hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faUser} />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/equipment"
                            className="link flex items-center gap-3 p-2 rounded-md   hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                            <span>Equipment</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/vehicle"
                            className="link flex items-center gap-3 p-2 rounded-md   hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faTruck} />
                            <span>Vehicles</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/monitorLogs"
                            className="link flex items-center gap-3 p-2 rounded-md   hover:text-green-900 transition"
                        >
                            <FontAwesomeIcon icon={faClipboardList} />
                            <span>Monitor Logs</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};