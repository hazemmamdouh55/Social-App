import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../component/layout/MainLayout/MainLayout'
import Profile from "../pages/profile/profile"
import Home from "../pages/Home/Home"
import Notfound from "../pages/Notfound/Notfound"
import Login from "../pages/Auth/login/login"
import Register from "../pages/Auth/register/register"
import AuthLayout from '../component/layout/AuthLayout/AuthLayout'
import Protectedroute from './Protectedroute'
import Authroutes from './Authroutes'
import PostDetails from '../pages/postDetails/postDetails'

export const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element:
                    <Protectedroute>
                        <Home />
                    </Protectedroute>

            },
            {
                path: "profile/:userId",
                element:
                    <Protectedroute>
                        <Profile />
                    </Protectedroute>
            },
            {
                path: "post-deatils/:postid",
                element:
                    <Protectedroute>
                        <PostDetails />
                    </Protectedroute>
            },
            {
                path: "*",
                element: <Notfound />
            }

        ]



    },
    {
        path: "",
        element: <AuthLayout />,
        children: [{
            path: "login",
            element:
                <Authroutes>
                    <Login />
                </Authroutes>

        }, {
            path: "register",
            element: <Authroutes>
                <Register />
            </Authroutes>

        }
        ]
    }

])
