// Navigation Type Definition
export interface SubNavItem {
  id: string;
  title: string;
  badge?: string;
  path:string;
}

export interface NavItem {
  id: string;
  title: string;
  iconName: string;
  path?: string;
  subItems?: SubNavItem[];
}


export interface SidebarProps {
  activeNav: string;
  activeSubNav: string;
  onSelectNav: (id: string) => void;
  onSelectSubNav: (id: string) => void;
}