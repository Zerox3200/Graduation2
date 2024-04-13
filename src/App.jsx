import './App.scss';
import { Home } from './pages/Home/home';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Forgetting = lazy(() => import('./pages/ForgetPassword/Forgetting'));
const ChangePassword = lazy(() => import('./pages/ChangePassword/Change'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
const CameraMen = lazy(() => import('./pages/CameraMen/CameraMen'));
const Profiles = lazy(() => import('./components/Profiles/Profiles'));
const Events = lazy(() => import("./pages/Events/Events"));
const EventsDetails = lazy(() => import('./pages/Events/EventDetails/EventsDetails'))
const EventsLayOut = lazy(() => import('./pages/Events/EventsLayOut'))
const PersonalProfile = lazy(() => import('./pages/PersonalProfile/PersonalProfile'))
const PhotoGrapherProfile = lazy(() => import('./pages/PhotoGrapher_Profile/PhotoGrapher_Profile'))

function App() {
  const routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/Login', element: <Suspense fallback={<Loading />}><Login /></Suspense> },
        { path: '/SignUp', element: <Suspense fallback={<Loading />}><SignUp /></Suspense> },
        { path: '/ForgetPassword', element: <Suspense fallback={<Loading />}><Forgetting /></Suspense> },
        { path: '/ChangePassword', element: <Suspense fallback={<Loading />}><ChangePassword /></Suspense> },
        { path: "/ContactUs", element: <Suspense fallback={<Loading />}><ContactUs /></Suspense> },
        {
          path: "/CameraMen", element: <Suspense fallback={<Loading />}><CameraMen /></Suspense>,
          children: [
            {
              path: ':PhotgrapherId',
              element: <Suspense fallback={<Loading />}><PhotoGrapherProfile /></Suspense>
            }, {
              index: true,
              element: <Suspense fallback={<Loading />}><Profiles /></Suspense>
            }
          ]
        },
        {
          path: '/Events', element: <Suspense fallback={<Loading />}><EventsLayOut /></Suspense>, children: [
            { index: true, element: <Events /> },
            { path: ':id', element: <Suspense fallback={<Loading />}><EventsDetails /> </Suspense> }
          ]
        },
        { path: "/PersonalProfile", element: <Suspense fallback={<Loading />}><PersonalProfile /></Suspense> }
      ]
    }
  ])
  return (
    <RouterProvider router={routers}></RouterProvider>

  );
}

export default App;
