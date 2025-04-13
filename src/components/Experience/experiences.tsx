interface Experience {
  title: string;
  company: string;
  url: string;
  location: string;
  date: string;
  type: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Zendesk",
    url: "https://www.zendesk.com/",
    location: "Dublin, Ireland",
    date: "February 2023 - August 2023",
    type: "Hybrid",
    details: [
      "Built and tested a Kafka topic integration and created a Protobuf schema for inter-service communication",
      "Resolved UI issues across browsers by implementing CSS fixes, developing new components using React TypeScript",
      "Led daily stand-ups, sprint planning, retrospectives, and backlog refinement sessions as a Scrum Master, ensuring efficient task prioritization and progress tracking",
      "Conducted E2E testing and implemented smoke tests to ensure the reliability of new features across environments",
      "Worked with tools such as GitHub, Jenkins, Spinnaker, Samson, Datadog, and Docker for coding, testing, and deployment workflows",
      "Gained exposure to cross functional processes, including sprint demos and incident response management",
    ],
  },
];

export default experiences;
