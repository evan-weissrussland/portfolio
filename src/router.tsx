import {createBrowserRouter, Navigate} from 'react-router-dom'
import {AboutPageWrappper, App, StartPageWrappper} from "./App";

export const router = createBrowserRouter([
    {
        children: [
            {
                element: <StartPageWrappper/>,
                path: '/'
            },

            {
                element: <AboutPageWrappper/>,
                path: 'about',
            },
        ],
        element: <App/>,
        path: '/',
        errorElement:<><Navigate to={'/'}/></>,
    },

])
