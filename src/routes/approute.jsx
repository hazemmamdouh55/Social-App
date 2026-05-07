import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../component/layout/MainLayout/MainLayout'
import Profile from "../pages/profile/profile"
import Home from "../pages/Home/home2/Home"
import Notfound from "../pages/Notfound/Notfound"
import Login from "../pages/Auth/login/login"
import Register from "../pages/Auth/register/register"
import AuthLayout from '../component/layout/AuthLayout/AuthLayout'
import Protectedroute from './Protectedroute'
import Authroutes from './Authroutes'
import PostDetails from '../pages/postDetails/postDetails'
import Welcome from '../pages/Auth/HowItWork/Welcome'
import SchoolPortal from '../pages/SchoolPortal/SchoolPortal'
import Notification from '../pages/notification/Notification'
import TermOfService from '../pages/TermOfService/TermsOfServicePage'
import PrivacyPage from '../pages/privacy/PrivacyPage'
import ContactPage from '../pages/contact/ContactPage'
import TeacherDashboard from '../pages/TeacherPortal/TeacherDashboard'
import BrowseJobs from '../pages/TeacherPortal/BrowseJobs'
import ApplyJobs from '../pages/TeacherPortal/ApplyJob'
import SuccessPage from '../pages/TeacherPortal/SuccessPage'
import TeacherProfile from '../pages/TeacherPortal/TeacherProfile'
import JobDetails from '../pages/TeacherPortal/JobDetails'
import SurveyCompleted from '../pages/Home/home2/SurveyCompleted'
import TeacherSurvey from '../pages/Home/home2/TeacherSurvey'
import School from '../pages/SchoolProfile/school'
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
                index: true,
                path: "SchoolDashpord",
                element:
                    <Protectedroute>

                        <SchoolPortal></SchoolPortal>
                    </Protectedroute>

            }, {
                index: true,
                path: "SchoolProfile",
                element:
                    <Protectedroute>

                        <School></School>
                    </Protectedroute>

            },
            {
                index: true,
                path: "TeacherSurvey",
                element:
                    <Protectedroute>

                        <TeacherSurvey></TeacherSurvey>
                    </Protectedroute>

            },
            {
                index: true,
                path: "Survey-Complete",
                element:
                    <Protectedroute>

                        <SurveyCompleted></SurveyCompleted>
                    </Protectedroute>

            },
            {
                index: true,
                path: "TeacherPortal",
                element:
                    <Protectedroute>

                        <TeacherDashboard></TeacherDashboard>
                    </Protectedroute>

            },
            {
                index: true,
                path: "TeacherProfile",
                element:
                    <Protectedroute>

                        <TeacherProfile></TeacherProfile>
                    </Protectedroute>

            }, {
                index: true,
                path: "browse-jobs",
                element:
                    <Protectedroute>

                        <BrowseJobs>
                        </BrowseJobs>
                    </Protectedroute>

            }, {
                path: "JobDetails",
                // /:userId
                element:
                    <Protectedroute>
                        <JobDetails></JobDetails>
                    </Protectedroute>
            },
            {
                index: true,
                path: "ApplyJob",
                element:
                    <Protectedroute>

                        <ApplyJobs></ApplyJobs>
                    </Protectedroute>

            },
            {
                index: true,
                path: "success",
                element:
                    <Protectedroute>

                        <SuccessPage></SuccessPage>
                    </Protectedroute>

            },

            {
                index: true,
                path: "contact",
                element:


                    <ContactPage></ContactPage>


            },
            {
                index: true,
                path: "terms",
                element:


                    <TermOfService></TermOfService>


            },
            {
                index: true,
                path: "privacy",
                element:

                    <PrivacyPage></PrivacyPage>


            },
            {
                index: true,
                path: "Notifications",
                element:
                    <Protectedroute>

                        <Notification />
                    </Protectedroute>

            },
            {
                path: "profile",
                // /:userId
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

            path: "welcome",
            element:
                <Authroutes>
                    <Welcome />
                </Authroutes>

        }, {
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
