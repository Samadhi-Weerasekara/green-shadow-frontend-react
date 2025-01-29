import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Signup} from "./pages/Signup.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {Crop} from "./pages/Crop.tsx";
import {Field} from "./pages/Field.tsx";
import {Staff} from "./pages/Staff.tsx";
import {MonitorLogs} from "./pages/MonitorLogs.tsx";
import {Vehicle} from "./pages/Vehicle.tsx";
import {Profile} from "./pages/Profile.tsx";
import {MainContent} from "./pages/MainContent.tsx";
import {Equipment} from "./pages/Equipment.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";

const routes = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <LoginPage /> },
    {  
        path: '',
        element: <MainContent/>,
        children: [
            {path: '/dashboard', element: <Dashboard/>},
            {path: '/crop', element: <Crop/>},
            {path: '/equipment', element: <Equipment/>},
            {path: '/field', element: <Field/>},
            {path: '/staff', element: <Staff/>},
            {path: '/monitorlogs', element: <MonitorLogs/>},
            {path: '/vehicle', element: <Vehicle/>},
            {path: '/profile', element: <Profile/>},

        ]
    },
])

function App() {
    return <RouterProvider router={routes}/>;

}

export default App;