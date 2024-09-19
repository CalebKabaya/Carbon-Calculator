// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics,IconUserCheck,IconDatabase,IconReport,IconUserCircle
} from '@tabler/icons-react';
import React from 'react';

const icons = {
    IconDashboard: IconDashboard,
    IconDeviceAnalytics: IconDeviceAnalytics,
    IconUserCheck:IconUserCheck,
    IconDatabase:IconDatabase,
    IconReport:IconReport,
    IconUserCircle:IconUserCircle

};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="Admin dashboard" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'default',
            title: <FormattedMessage id="home" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'reporting',
            title: <FormattedMessage id="Reporting" />,
            type: 'item',
            url: '/sample-page',
            icon: icons.IconReport,
            breadcrumbs: false
        },
        {
            id: 'data',
            title: <FormattedMessage id="Data Managment" />,
            type: 'item',
            url: '/sample-page',
            icon: icons.IconDatabase,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: <FormattedMessage id="Users" />,
            type: 'item',
            url: '/users',
            icon: icons.IconUserCheck,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: <FormattedMessage id="Profile" />,
            type: 'item',
            url: '/dashboard/profile',
            icon: icons.IconUserCircle,
            breadcrumbs: false
        },
    
    ]
};

export default dashboard;
