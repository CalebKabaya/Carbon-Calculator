import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// project import
import Loadable from 'ui-component/Loadable';
import AdminRoutes from './AdminRoutes';

const AuthLogin2 = Loadable(lazy(() => import('views/pages/authentication/authentication2/Login2')));


// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([{ path: '/', element: <AuthLogin2  /> }, AuthenticationRoutes, LoginRoutes, MainRoutes, AdminRoutes], {
    basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
