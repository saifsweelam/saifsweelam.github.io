export type ExperienceMetric = {
  label: string;
  value: string;
  detail: string;
};

export type ExperienceRecord = {
  company: string;
  role: string;
  period: string;
  summary: string;
  initiatives: string[];
  accomplishments: string[];
  metrics: ExperienceMetric[];
};

export const experienceRecords: ExperienceRecord[] = [
  {
    company: "TeamCoderz",
    role: "Backend Engineer",
    period: "Jul 2025 - Apr 2026",
    summary:
      "Supported product delivery across Wordy.me and ReactSuite, keeping the backend steady while the surface area kept moving.",
    initiatives: ["Wordy.me", "ReactSuite"],
    accomplishments: [
      "Shaped backend flows that kept delivery moving without adding friction for the product team.",
      "Translated product needs into maintainable APIs and clearer release paths.",
      "Kept handoffs clean by tightening documentation, edge cases, and implementation details.",
    ],
    metrics: [
      {
        label: "Product touchpoints",
        value: "2",
        detail: "Wordy.me and ReactSuite",
      },
      {
        label: "Primary focus",
        value: "Backend",
        detail: "Delivery and reliability",
      },
      {
        label: "Team outcome",
        value: "Cleaner handoff",
        detail: "Less rework between functions",
      },
    ],
  },
];
