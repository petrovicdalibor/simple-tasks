export interface Task {
  id: number;
  text: string;
  day: string;
  completed: boolean;
  reminder: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    completed: false,
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    completed: false,
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 2:30pm",
    completed: false,
    reminder: false,
  },
];

export default tasks;
