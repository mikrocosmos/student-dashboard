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
  academicAverage: string | null;
  completion: number;
}
