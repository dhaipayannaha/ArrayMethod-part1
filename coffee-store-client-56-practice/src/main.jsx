import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Component/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import CoffeeDetails from './Component/CoffeeDetails.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
