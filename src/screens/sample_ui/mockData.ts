import {Training} from '@src/components/svgs';
import TrainingWeb from '@src/assets/logo/training.svg';
import PlayIcon from '@src/assets/logo/play.png';
import {ImageSourcePropType} from 'react-native';
import {Course} from '@src/redux/features/courses/course';

export interface LastestCourse {
  id: number;
  leftImage: LeftImage;
  right: ImageSourcePropType;
  title: string;
  duration: string;
}

export interface LeftImage {
  web?: string;
  mobile?: string;
}

export const lastestCourses: LastestCourse[] = [
  {
    id: 1,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 2,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 3,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 4,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 5,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 6,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 7,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 8,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 9,
    leftImage: {
      mobile: Training,
      web: TrainingWeb,
    },
    right: PlayIcon,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
];

export const courses: Course[] = [
  {
    id: 1,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 2,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 3,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 4,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 5,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 6,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 7,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 8,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
  {
    id: 9,
    duration: '3 hours',
    title: 'Want to become a DevOps Developer?',
  },
];
