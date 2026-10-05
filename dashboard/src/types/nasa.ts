export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
}

export interface DataTableProps<T> {
  title: string;
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
}

export interface AsteroidItem {
  id: string;
  name: string;
  diameter: string;
  velocity: string;
  missDistance: string;
  status: 'Safe' | 'Tracking' | 'Hazardous';}