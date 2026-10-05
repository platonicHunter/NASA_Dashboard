import { AsteroidItem, TableColumn } from "@/types";


export const sampleTableDataHeader: TableColumn<AsteroidItem>[] = [
  { header: 'Designation', accessor: 'name' },
  { header: 'Estimated Diam (m)', accessor: 'diameter' },
  { header: 'Relative Velocity', accessor: 'velocity' },
  { header: 'Miss Distance (km)', accessor: 'missDistance' },
  { header: 'Status', accessor: 'status' }, // ရိုးရိုး Key ပဲ သုံးပါမည်
];

export const sampleTableData: AsteroidItem[] = [
  {
    id: '1',
    name: '(2026 AB1)',
    diameter: '120 - 270',
    velocity: '24,120 km/h',
    missDistance: '1,240,500',
    status: 'Safe',
  },
  {
    id: '2',
    name: '(2026 CQ4)',
    diameter: '45 - 100',
    velocity: '18,450 km/h',
    missDistance: '850,200',
    status: 'Tracking',
  },
];