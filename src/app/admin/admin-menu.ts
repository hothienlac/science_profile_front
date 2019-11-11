import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'Post Paper',
    icon: 'edit-2-outline',
    link: '/admin/posting',
    home: true,
  },
  {
    title: 'Setting',
    icon: 'settings-2-outline',
    link: '/admin/setting',
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
    link: '/admin/published',
    home: true,
  },
  {
    title: 'Pending Papers',
    icon: 'pantone-outline',
    link: '/admin/pending',
    home: true,
  },
  {
    title: 'Reviewing Papers',
    icon: 'clipboard-outline',
    link: '/admin/review',
    home: true,
  },
  {
    title: 'Users',
    icon: 'people-outline',
    link: '/admin/users',
    home: true,
  },
]