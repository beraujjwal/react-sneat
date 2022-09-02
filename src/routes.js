import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Sample = React.lazy(() => import('./views/dashboard/Sample'));


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/sample', name: 'Sample', element: Sample },
]

export default routes
