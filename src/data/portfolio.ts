export const profile = {
  name: "Oussama Yinssi",
  title: "Data Science Master's Student | Big Data & AI Engineer",
  email: "oussamayinssi@gmail.com",
  linkedIn: "https://www.linkedin.com/in/oussama-yinssi-328396228/",
  github: "https://github.com/O2S-Y",
  bio: "I'm a master's student in Data Science and Intelligent Systems with a passion for turning raw data into actionable insights. I specialize in machine learning, big data pipelines, and AI-driven solutions. Whether it's building predictive models, engineering scalable data pipelines, or deploying intelligent systems, I enjoy solving complex problems with clean, reproducible code.",
  location: "Morocco",
  tagline: "Turning data into decisions with machine learning and big data engineering.",
};

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  outcomes: string[];
  github?: string;
  demo?: string;
  imagePrompt?: string;
}

export const projects: Project[] = [
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance for Industrial Equipment",
    shortDescription:
      "A machine learning system that predicts equipment failures before they happen, reducing downtime and maintenance costs.",
    fullDescription:
      "Industrial equipment downtime is expensive. This project builds an end-to-end predictive maintenance pipeline that ingests sensor data, extracts time-series features, trains a gradient boosting classifier to predict failure windows, and surfaces alerts through a simple dashboard. I handled data cleaning, feature engineering, model selection, and evaluation using cross-validation and business-cost-aware metrics.",
    tags: ["Python", "scikit-learn", "XGBoost", "Pandas", "Time-Series", "Feature Engineering"],
    outcomes: [
      "Achieved 87% recall on failure detection",
      "Reduced false alarms by 35% compared to threshold-based rules",
      "Built an interpretable feature-importance report for operators",
    ],
    github: "https://github.com/O2S-Y",
  },
  {
    slug: "big-data-pipeline",
    title: "Real-Time Big Data Pipeline for E-commerce Events",
    shortDescription:
      "A scalable data pipeline that processes clickstream events, aggregates metrics in real time, and stores results for analytics.",
    fullDescription:
      "Modern e-commerce platforms generate millions of events per day. This project implements a real-time data pipeline using Kafka for ingestion, Spark Streaming for processing, and PostgreSQL for serving aggregated metrics. The pipeline computes session-level metrics, product popularity, and conversion funnels with sub-minute latency.",
    tags: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Docker", "Stream Processing"],
    outcomes: [
      "Processed 10K+ events per second in benchmark tests",
      "Reduced analytics latency from hours to under 60 seconds",
      "Containerized the entire stack for reproducible deployments",
    ],
    github: "https://github.com/O2S-Y",
  },
  {
    slug: "nlp-sentiment",
    title: "NLP Sentiment Analysis for Social Media",
    shortDescription:
      "A deep learning model that classifies social media posts into sentiment categories, with analysis and visualization.",
    fullDescription:
      "Understanding public sentiment at scale is valuable for brands and researchers. This project fine-tunes a transformer-based model on multilingual social media posts to classify sentiment. It includes text preprocessing, tokenization, training with class weights for imbalance, and an interactive notebook for error analysis and visualization.",
    tags: ["Python", "PyTorch", "Hugging Face", "Transformers", "NLP", "Data Visualization"],
    outcomes: [
      "Reached 82% F1-score on a multilingual test set",
      "Improved minority-class recall by 24% with class weighting",
      "Delivered a reproducible training pipeline with experiment tracking",
    ],
    github: "https://github.com/O2S-Y",
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Databases",
    skills: ["Python", "R", "SQL", "PostgreSQL", "MongoDB", "NoSQL"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Hugging Face", "Deep Learning"],
  },
  {
    category: "Big Data & Engineering",
    skills: ["Apache Spark", "Apache Kafka", "Hadoop", "Airflow", "Docker", "Git"],
  },
  {
    category: "Data Visualization & Analytics",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Pandas"],
  },
  {
    category: "MLOps & Cloud",
    skills: ["MLflow", "Docker", "GitHub Actions", "AWS Basics", "Linux"],
  },
];

export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const education: TimelineEntry[] = [
  {
    title: "Master's in Data Science and Intelligent Systems",
    organization: "University Program (example)",
    period: "2023 — Present",
    description:
      "Advanced coursework in machine learning, deep learning, big data systems, natural language processing, and statistical modeling.",
  },
  {
    title: "Bachelor's in Computer Science / Engineering",
    organization: "University Program (example)",
    period: "2019 — 2023",
    description:
      "Foundation in algorithms, data structures, databases, software engineering, and introductory data science.",
  },
];

export const experience: TimelineEntry[] = [
  {
    title: "Data Science Intern",
    organization: "Example Company / Research Lab",
    period: "Summer 2024",
    description:
      "Built predictive models and dashboards from real-world datasets. Collaborated with engineers to deploy a model into a production-like environment.",
  },
  {
    title: "Machine Learning Research Assistant",
    organization: "University Lab",
    period: "2023 — 2024",
    description:
      "Assisted on a research project involving NLP and data mining. Preprocessed datasets, ran experiments, and documented results.",
  },
];

export interface Award {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export const awards: Award[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera / Stanford Online",
    year: "2024",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    year: "2023",
  },
  {
    title: "Kaggle Competition — Top 10%",
    issuer: "Kaggle",
    year: "2024",
    link: "https://www.kaggle.com/",
  },
  {
    title: "University Merit Scholarship",
    issuer: "University Program",
    year: "2022",
  },
];
