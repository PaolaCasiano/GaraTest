import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Wellcome',
    url: '/',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Orders'
  },
  {
    name: 'My Orders',
    url: '/orders/',
    icon: 'icon-list'
  }
];
