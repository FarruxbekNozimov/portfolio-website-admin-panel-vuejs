export const navLinks = [
  {
    id: 1,
    name: 'Home',
    icon: 'bx bx-home-alt',
    path: '/',
    childrens: []
  },
  {
    id: 5,
    name: 'About',
    icon: 'bx bx-user-pin',
    path: '/about',
    childrens: [
      {
        id: 2,
        name: 'Projects',
        icon: 'bx bx-briefcase',
        path: '/projects'
      },
      {
        id: 3,
        name: 'Experience',
        icon: 'bx bx-signal-4',
        path: '/experience'
      },
      {
        id: 4,
        name: 'Skills',
        icon: 'bx bx-dumbbell',
        path: '/skills'
      },
      {
        id: 6,
        name: 'Socials',
        icon: 'bx bxl-meta',
        path: '/socials'
      }
    ]
  },
  {
    id: 8,
    name: 'Blog',
    icon: 'bx bx-code-block',
    path: '/blog',
    childrens: [
      {
        id: 7,
        name: 'Reactions',
        icon: 'bx bx-wink-smile',
        path: '/reactions'
      }
    ]
  },
  {
    id: 9,
    name: 'Settings',
    icon: 'bx bx-cog',
    path: '/settings',
    childrens: []
  }
]
