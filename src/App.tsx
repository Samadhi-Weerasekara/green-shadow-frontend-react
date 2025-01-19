import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Signup} from "./pages/Signup.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";
import {Crop} from "./pages/Crop.tsx";
import {Field} from "./pages/Field.tsx";
import {Staff} from "./pages/Staff.tsx";
import {MonitorLogs} from "./pages/MonitorLogs.tsx";
import {Vehicle} from "./pages/Vehicle.tsx";
import {User} from "./pages/User.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";

const routes = createBrowserRouter([
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <LoginPage /> },
    {  
        path: '',
        element: <Dashboard/>,
        children: [
            {path: '/crop', element: <Crop/>},
            {path: '/equipment', element: <Crop/>},
            {path: '/field', element: <Field/>},
            {path: '/staff', element: <Staff/>},
            {path: '/monitorlogs', element: <MonitorLogs/>},
            {path: '/vehicle', element: <Vehicle/>},
            {path: '/user', element: <User/>},

        ]
    },
])

function App() {
    return <RouterProvider router={routes}/>;

}

export default App;