import { NavItem } from '@/types';

export const navigationConfig: NavItem[] = [
  {
    id: 'overview',
    title: 'Overview',
    iconName: 'LayoutDashboard',
    subItems: [
      { id: 'live-telemetry', title: 'Live Telemetry', badge: 'REALTIME' },
      { id: 'orbit-status', title: 'Orbit Status' },
    ],
  },
  {
    id: 'atmosphere',
    title: 'Atmospheric Data',
    iconName: 'Cloud',
    subItems: [
      { id: 'co2-levels', title: 'CO2 Levels' },
      { id: 'temperature', title: 'Sea Surface Temp' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    iconName: 'BarChart2',
  },
];