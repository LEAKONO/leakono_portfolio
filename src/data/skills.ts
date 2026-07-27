export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: '💻',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Data Engineering',
    icon: '📊',
    skills: ['Snowflake', 'dbt', 'Apache Airflow', 'PostgreSQL', 'Data Warehousing', 'ETL/ELT', 'Data Modeling']
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Linux']
  },
  {
    title: 'Analytics & BI',
    icon: '📈',
    skills: ['Power BI', 'Seaborn', 'Matplotlib']
  },
  {
    title: 'Software Engineering',
    icon: '🔧',
    skills: ['REST APIs', 'Flask', 'Django', 'React', 'Git']
  }
];