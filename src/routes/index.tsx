import { useRoutes } from 'react-router-dom';
import routeNames from './names';
import PageHome from '../pages/home';
import PageNotFound from '../pages/not-found';
import PageSignIn from '../pages/sign-in';

export const routes = [
    { path: routeNames.home, element: <PageHome /> },
    { path: routeNames.login, element: <PageSignIn /> },
    // example for nested routes
    // {
    //     path: 'parent-component',
    //     element: <Component />,
    //     children: [
    //         { path: ":id", element: <ChildComponent1 /> },
    //         { path: "child-component", element: <ChildComponent2 /> },
    //     ],
    // },
    // Not found routes work as you'd expect, always in the end of array
    { path: '*', element: <PageNotFound /> },
];

const Routes = () => useRoutes(routes);

export default Routes;
