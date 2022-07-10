/// <reference types="react-scripts" />

interface UserList {
  id: number;
  name: string;
  fullName: string;
  status: string;
  img: string;
}

interface ElementList {
  title: string;
  icon: string;
  activeIcon: string;
  isActive: boolean;
  destination: string;
}

interface ActivePrograms {
  title: string;
  university: string;
  universityImage: string;
  overdueAssignments: number;
  remainingAbsenses: number;
  academicAverage: string;
  completion: number;
}

interface Card {
  title: string;
  theme: string;
  checkedIn: boolean;
  img: string;
  day: number;
  month: string;
  state: string;
}

interface Session {
  day: number;
  month: string;
  title: string;
  theme: string;
  time: string;
}
