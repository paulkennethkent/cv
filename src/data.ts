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
    timelineEnd: new Date(2018, 10),
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
      "Built and maintained internal product dashboard systems that analysed the results of our AI driven test generation software. ",
  },
  {
    title: "Development Team Lead",
    type: TimelineEvent.JOB,
    timelineStart: new Date(2018, 10),
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
      "Expanding on my previous role I was tasked with leading a team of developers to build a pipleline that automatically analysed 1000s of open repositories. The aim was to gather feedback on the quality of the tests produced. ",
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
      "GraphQL - Apollo",
      "NextJS",
      "Auth",
      "HTML",
      "Docker",
      "Postgres",
      "e2e testing",
      "Prisma",
      "Next.js",
    ],
    place: "Venture Harbour",
    description:
      "I joined an exciting team of engineers with aim to plan, build and maintain multiple ventures at a rapid pace. As the team was small, we worked on all area of the technical stack. ",
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
      "GraphQL - Apollo",
      "NextJS",
      "Auth",
      "HTML",
      "Docker",
      "Postgres",
      "SQL",
      "e2e testing",
      "Prisma",
      "Next.js",
    ],
    place: "Venture Harbour",
    description:
      "I was promoted to a Lead Engineer to work on our most ambitious venture. I managed a team of engineers to plan and execute the delivery of a global saas marketing tool.  ",
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
