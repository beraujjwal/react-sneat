export default [
    {
      key: 1,
      title: 'Dashboard',
      icon: 'bx-home-circle',
      url: 'dashboard'
    },
    {
      key: 2,
      title: 'Resources',
      icon: 'bx-home-circle',
      url: 'resources'
    },
    {
      key: 3,
      title: 'Roles',
      icon: 'bx-home-circle',
      url: 'roles'
    },
    {
      key: 4,
      title: 'Permissions',
      icon: 'bx-home-circle',
      url: 'permissions'
    },
    {
      key: 4,
      title: 'Layouts',
      icon: 'bx-layout',
      submenu: [
        {
          key: 41,
          title: 'Without menu',
          url: 'without-menu',
        },
        {
          key: 42,
          title: 'Without navbar',
          url: 'without-navbar',
        },
        {
          key: 43,
          title: 'Container',
          url: 'container',
        },
        {
          key: 44,
          title: 'Fluid',
          url: 'fluid',
        },
        {
          key: 45,
          title: 'Blank',
          url: 'blank',
        },
      ],
    },
    {
      key: 6,
      title: 'Pages',
    },
    {
      key: 7,
      title: 'Account Settings',
      icon: 'bx-dock-top',
      submenu: [
        {
          key: 71,
          title: 'Account',
          url: 'user-account',
        },
        {
          key: 72,
          title: 'Notifications',
          url: 'notifications',
        },
        {
          key: 73,
          title: 'Connections',
          url: 'connections',
        },
      ],
    },
  ];