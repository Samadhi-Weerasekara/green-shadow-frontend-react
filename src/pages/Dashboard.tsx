import {Header} from "../components/Header.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 import {
    faLeaf,
    faMapMarkerAlt,
    faUser,
    faTools,
} from "@fortawesome/free-solid-svg-icons";


import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});
export function Dashboard() {

    // const currentUser = localStorage.getItem("name");
    const currentUser = "Samadhi Weerasekara";
    const [location, setLocation] = useState<{ lat: number; lng: number }>({
        lat: 6.9271, // Default location (e.g., Colombo, Sri Lanka)
        lng: 79.8612,
    });
    const [zoom, setZoom] = useState(13);

    useEffect(() => {
        // Fetch user's current location using Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        }
    }, []);
    return (
        <>
            <Header searchbar={"search crop here"}/>

            <div className={""}>

                <div className={"pl-5"}>
                    <h1 className={"nameText text-m text-gray-700"}>Hello,</h1>
                    <h1 className={"nameText text-4xl font-bold text-gray-700"}>{currentUser}</h1>
                </div>

                <div className="p-5 bg-gray-100">
                    {/* Overview Section */}
                    <section className="grid grid-cols-4 gap-5">
                        <div
                            className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-md h-32">
                            <FontAwesomeIcon icon={faLeaf} className="text-4xl text-green-600"/>
                            <p className="text-gray-700 mt-2">Active: 10</p>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-md h-32">
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="text-4xl text-red-500"
                            />
                            <p className="text-gray-700 mt-2">Monitored: 25</p>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-md h-32">
                            <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-500"/>
                            <p className="text-gray-700 mt-2">Available: 8</p>
                        </div>
                        <div
                            className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-md h-32">
                            <FontAwesomeIcon icon={faTools} className="text-4xl text-gray-600"/>
                            <p className="text-gray-700 mt-2">Operational: 12</p>
                        </div>
                    </section>


                    {/* Weather and Tasks Section */}
                    <section className="grid grid-cols-2 gap-5 mt-5">
                        <div className="bg-white p-5 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Weather Info</h3>
                            <p className="text-gray-600">Temperature: 26°C</p>
                            <p className="text-gray-600">Cloudy</p>
                            {/*<div><img src={cloud} alt="" className="w-10 h-10 rounded-full "/></div>*/}


                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Tasks</h3>
                            <ul className="text-gray-600 list-disc ml-5">
                                <li>Visit Field A - 9:00 AM</li>
                                <li>Inspect Crop B - 10:30 AM</li>
                            </ul>
                        </div>
                    </section>

                    {/*live location*/}
                    <div className="live-location mt-5  ">
                         <MapContainer
                            center={location}
                            zoom={zoom}
                            scrollWheelZoom={true}
                            className="h-[12rem] w-full rounded-lg shadow-md"
                        >
                            {/* Tile Layer */}
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {/* Marker */}
                            <Marker position={location}>
                                <Popup>
                                    <div>You are here!</div>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>


                </div>
            </div>
        </>

    )
}