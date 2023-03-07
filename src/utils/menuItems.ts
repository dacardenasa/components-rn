import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    iconName: 'star',
    route: 'animation-101',
  },
  {
    name: 'Animation 102',
    iconName: 'music',
    route: 'animation-102',
  },
  {
    name: 'Switches',
    iconName: 'toggle-on',
    route: 'switchScreen',
  },
  {
    name: 'Alerts',
    iconName: 'bell',
    route: 'AlertsScreen',
  },
  {
    name: 'TextInputs',
    iconName: 'font',
    route: 'TextInputsScreen',
  },
  {
    name: 'Refresh Control',
    iconName: 'rotate-left',
    route: 'RefreshScreen',
  },
  {
    name: 'Section List',
    iconName: 'list',
    route: 'SectionListScreen',
  },
  {
    name: 'Modal',
    iconName: 'window-restore',
    route: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    iconName: 'street-view',
    route: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    iconName: 'slideshare',
    route: 'SlidesScreen',
  },
  {
    name: 'Themes',
    iconName: 'camera',
    route: 'ThemeScreen',
  },
];
