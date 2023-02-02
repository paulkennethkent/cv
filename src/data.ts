export enum TimelineEvent {
  JOB = "JOB",
  QUALIFICATION = "QUALIFICATION",
  PROJECT = "PROJECT",
  CONTRACTING = "PROJECT",
}

const data: {
  title: string;
  type: TimelineEvent;
  timelineStart: Date;
  timelineEnd: Date;
  skills: string[];
  place: string;
  description: string;
  notRelevant?: boolean;
}[] = [
  {
    title: "Technical Support Analyst",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2012, 8),
    timelineEnd: new Date(2015, 8),
    skills: ["HTML", "CSS", "Javascript"],
    place: "Oxford University Press",
    description:
      "Provided 2nd line support for customers using OUP platforms and software.",
    notRelevant: true,
  },
  {
    title: "Platform Support Team Lead",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2015, 9),
    timelineEnd: new Date(2017, 9),
    skills: ["HTML", "CSS", "Javascript"],
    place: "Oxford University Press",
    description:
      "Managed a 1st and 2nd line team providing support for OUP platform and software.",
    notRelevant: true,
  },
  {
    title: "Software Engineer",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2017, 10),
    timelineEnd: new Date(2017, 12),
    skills: [
      "Java",
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "Unit Tests",
      "Docker",
      "Kubernetes",
      "git",
    ],
    place: "Diffblue",
    description:
      "At the early stages of my engineering career I worked for a well funded startup to build and maintain their internal product dashboard systems. This analysis was key in shaping the AI test driven software. ",
  },
  {
    title: "Development Team Lead",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2017, 12),
    timelineEnd: new Date(2020, 5),
    skills: [
      "Java",
      "React",
      "Project Planning",
      "Agile",
      "GCP",
      "HTML",
      "CSS",
      "Unit Tests",
      "Kubernetes",
      "Docker",
    ],
    place: "Diffblue",
    description:
      "Expanding on my previous role I was quickly given my own team tasked with building a pipleline that automatically built and analysed 1000s of open repositories.  This gave our core technology teams invaluable insights to the crediabilty and performance of the software. We extended the project to automatically contribute the tests that it generated to the open source repositories.",
  },
  {
    title: "Software Engineer",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2020, 5),
    timelineEnd: new Date(2022, 8),
    skills: [
      "Typescript",
      "React",
      "GCP",
      "GraphQL",
      "Apollo",
      "NextJS",
      "Auth",
      "HTML",
      "Docker",
      "Postgres",
      "e2e testing",
      "Prisma",
      "Next.js",
      "SEO",
    ],
    place: "Venture Harbour",
    description:
      "I joined an ambitious team of engineers with aim to plan, build and maintain multiple ventures at a rapid pace. As the team was small, we worked on all areas of the technical stack. We produced a wide range of products from electron and slack apps to referal and saas based platforms. ",
  },
  {
    title: "Lead Engineer",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2022, 8),
    timelineEnd: new Date(2023, new Date().getMonth()),
    skills: [
      "Typescript",
      "React",
      "GCP",
      "GraphQL",
      "Apollo",
      "NextJS",
      "Auth",
      "HTML",
      "Docker",
      "Postgres",
      "SQL",
      "e2e testing",
      "Prisma",
      "Next.js",
      "SEO",
    ],
    place: "Venture Harbour",
    description:
      "My willness to lead earned me a promotion to Lead Engineer to focus on their most ambitious venture called Truenorth.io which was a global saas marketing platform. I managed a team of engineers to plan and execute the delivery of new features and bugs based on requirements from the product team, whilst still contributing to codebase as my day to day.",
  },
  {
    title: "Oxford Brookes University",
    type: TimelineEvent.QUALIFICATION,
    timelineStart: new Date(2005, 8),
    timelineEnd: new Date(2010, 8),
    skills: [],
    place: "Oxford",
    description: "Computer Science and Multimedia Systems - 2:1",
  },
  {
    title: "Castle School Secondary & 6th Form",
    type: TimelineEvent.QUALIFICATION,
    timelineStart: new Date(1997, 8),
    timelineEnd: new Date(2005, 6),
    skills: [],
    place: "Bristol",
    description: "Grades A - C",
  },
];

export default data;
