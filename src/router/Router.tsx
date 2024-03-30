import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
import RestaurantDashboard from "../pages/RestaurantDashboard/RestaurantDashboard"
// import About from "../pages/About/About"
import Layout from "../components/global/Layout/Layout"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails"
import Profile from "../pages/Profile/Profile"
import { Suspense, lazy } from "react"

const About = lazy(() => import("../pages/About/About"));

const appRoutes = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: '/',
                element: <Navigate replace to="/dashboard" />
            },
            {
                path: '/dashboard',
                element: <RestaurantDashboard/>
            },
            {
                path: '/about',
                // loader: getRestaurantList,
                element: <Suspense fallback={<h1>Loading...</h1>}>
                    <About/>
                </Suspense>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/restaurant/:restId',
                element: <RestaurantDetails/>
            }
        ]
    }
])

const AppRouter = () => {
  return (
    <RouterProvider router={appRoutes}/>
  )
}

export default AppRouter;