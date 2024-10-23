import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout=()=>{
    const[userName,setUserName]=useState();
    useEffect(()=>{
        const data={
            loggedInUser:"Suraj Kumar"
        }
        setUserName(data.loggedInUser);
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="app">
                <Header></Header>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
};
const appRouter=createBrowserRouter([
    {
        element:<AppLayout/>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/',
                element:<Body></Body>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:'*',
                element:<NotFound/>
            },{
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            }
        ],
    }
]);
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);