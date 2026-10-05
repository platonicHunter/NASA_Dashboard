import { NavItem } from '@/types';

export const navigationConfig: NavItem[] = [
  {
    id: 'overview',
    title: 'Overview',
    iconName: 'LayoutDashboard',
    subItems: [
      { id: 'live-telemetry', title: 'Live Telemetry', badge: 'REALTIME', path: '/overview/live-telemetry' },
      { id: 'orbit-status', title: 'Orbit Status', path: '/overview/orbit-status' },
    ],
  },
  {
    id: 'atmosphere',
    title: 'Atmospheric Data',
    iconName: 'Cloud',
    subItems: [
      { id: 'co2-levels', title: 'CO2 Levels', path: '/atmosphere/co2-levels' },
      { id: 'temperature', title: 'Sea Surface Temp', path: '/atmosphere/temperature' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    iconName: 'BarChart2',
    path: '/analytics', 
  },
];