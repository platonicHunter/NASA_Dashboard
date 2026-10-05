// Navigation Type Definition
export interface SubNavItem {
  id: string;
  title: string;
  badge?: string;
}

export interface NavItem {
  id: string;
  title: string;
  iconName: string;
  subItems?: SubNavItem[];
}

// NASA Telemetry / Data Type
export interface SatelliteData {
  id: string;
  timestamp: string;
  value: number;
  status: 'normal' | 'warning' | 'critical';
}