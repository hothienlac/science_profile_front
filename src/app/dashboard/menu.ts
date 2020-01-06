import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/dashboard/home',
    home: true,
  },
  {
    title: 'Research',
    icon: 'edit-2-outline',
    link: '/dashboard/research',
    home: true,
  },
  {
    title: 'Setting',
    icon: 'settings-2-outline',
    link: '/dashboard/setting',
    home: true,
  },
];

export const MENU_ITEMS_ADMIN: NbMenuItem[] = [
  ...MENU_ITEMS,
  {
    title: 'ADMIN FEATURES',
    group: true,
  },
  {
    title: 'Published Paper',
    icon: 'file-text-outline',
    link: '/dashboard/published',
    home: true,
  },
  {
    title: 'Pending Papers',
    icon: 'pantone-outline',
    link: '/dashboard/pending',
    home: true,
  },
  {
    title: 'Reviewing Papers',
    icon: 'clipboard-outline',
    link: '/dashboard/reviewing',
    home: true,
  },
  {
    title: 'Users',
    icon: 'people-outline',
    link: '/dashboard/users',
    home: true,
  },
]