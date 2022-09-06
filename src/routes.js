import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Sample = React.lazy(() => import('./views/dashboard/Sample'));

const Role = React.lazy(() => import('./views/acl/roles/Roles'));
const Permission = React.lazy(() => import('./views/acl/permissions/Permissions'));
const Resource = React.lazy(() => import('./views/acl/resources/Resources'));


const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', element: Dashboard },
    { path: '/sample', name: 'Sample', element: Sample },
    { path: '/roles', name: 'Role', element: Role },
    { path: '/permissions', name: 'Permission', element: Permission },
    { path: '/resources', name: 'Resource', element: Resource },
]

export default routes
