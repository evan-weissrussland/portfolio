import {createBrowserRouter} from 'react-router-dom'
import {App, StartPageWrappper} from "./App";
import {About} from "./components/About";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Services} from "./components/Services/Services";
import {Portfolio} from "./components/Portfolio";
import {Store} from "./components/Store";
import {Blog} from "./components/Blog/Blog";
import {Statistics} from "./components/Statistics";
import {Contacts} from "./components/Contacts";
import {Footer} from "./components/Footer";

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <StartPageWrappper />,
        path: '/'
      },

      {
        element: <About />,
        path: 'about',
      },
    ],
    element: <App />,
    path: '/',
  },

])
