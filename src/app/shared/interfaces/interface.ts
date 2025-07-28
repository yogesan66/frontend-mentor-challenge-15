export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
export interface TodoState {
  list: Task[];
  selectedFilter: Filter;
}

export interface UpdateStatus {
  id: string;
  completed: boolean;
}
