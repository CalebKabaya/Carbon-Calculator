import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import ErrorBoundary from './ErrorBoundary';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

import { loader as productsLoader, productLoader } from 'api/products';
import React from 'react';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('CarbonCarculator/pages/shared/Default/index')));
const DashboardAnalytics = Loadable(lazy(() => import('views/dashboard/Analytics')));
const SocialProfile =Loadable(lazy(() => import('CarbonCarculator/pages/shared/Profile/index')));
const Users =Loadable(lazy(() => import('CarbonCarculator/pages/shared/Users/index')));
const Calculator =Loadable(lazy(() => import('CarbonCarculator/pages/shared/Externalcalaulator/index')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/profile',
            element: <SocialProfile />
        },
        {
            path: '/dashboard/analytics',
            element: <DashboardAnalytics />
        },
        {
            path: '/users',
            element: <Users />
        },
        {
            path: '/calculator',
            element: <Calculator />
        },
        
    ]
};

export default AdminRoutes;
