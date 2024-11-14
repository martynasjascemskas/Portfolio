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
      "Contributed to an agile environment with CI/CD development workflow, fostering a collaborative and productive team environment.",
      "Assess and troubleshoot errors using Datadog",
      "Deploying and managing pipiles in Spinnaker and Samson",
      "Developed several front-end components using React TypeScript",
      "Contributed to production level software development",
    ],
  },
];

export default experiences;
