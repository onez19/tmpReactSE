export interface Activity {
  id: string;
  title: string;
  description: string;
  color: string;
  status: string;
  assignee: string;
  date: string;
}

export interface Section {
  id: string;
  title: string;
  activities: Activity[];
}