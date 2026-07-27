export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  architecture: string[];
  features: string[];
  metrics: string[];
  github: string;
  liveDemo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'flight-pipeline',
    title: 'Flight Data Pipeline',
    subtitle: 'Batch Data Pipeline with Audit Logging',
    description: 'Batch data pipeline for global flight data with dimensional modeling, audit logging, and comprehensive data lineage tracking for operational analytics.',
    tech: ['AviationStack API', 'Python', 'Snowflake', 'dbt', 'Airflow'],
    problem: 'Aviation analytics needed reliable, auditable flight data with full lineage tracking for operational reporting and compliance.',
    solution: 'Built a robust batch pipeline with watermarking, audit logs, and comprehensive data lineage to ensure data trustworthiness and traceability.',
    impact: 'Delivered trusted flight data with full auditability and automated error handling.',
    architecture: ['AviationStack API', 'Python ETL', 'RAW', 'STAGING', 'dbt Models', 'Analytics'],
    features: [
      'Data watermarking for incremental loads',
      'Audit logging for data traceability',
      'Dimensional modeling for analytics',
      'Data lineage tracking',
      'Automated error handling and retries'
    ],
    metrics: [
      '100K+ flights processed',
      '99.9% pipeline reliability',
      'Full audit trail',
      'Automated monitoring'
    ],
    github: 'https://github.com/LEAKONO/flight-ops-analytics-platform'
  },
  {
    id: 'uber-analytics',
    title: 'Uber Analytics Platform',
    subtitle: 'Ride Data Pipeline with Dimensional Modeling',
    description: 'ETL pipeline that extracts Uber ride data via API, transforms the data, and loads it into a data warehouse for analysis of ride patterns, driver performance, and customer behavior.',
    tech: ['Uber API', 'Python', 'Snowflake', 'dbt', 'Power BI'],
    problem: 'Ride-sharing analytics needed to understand ride patterns, driver utilization, and customer behavior across different cities and time periods.',
    solution: 'Built an ETL pipeline with Uber API integration, dimensional models for ride analytics, and automated data validation to track key metrics.',
    impact: 'Enabled data-driven decisions for driver allocation, pricing strategies, and customer engagement.',
    architecture: ['Uber API', 'Python ETL', 'RAW', 'STAGING', 'dbt Models', 'Analytics Warehouse'],
    features: [
      'API data extraction with error handling',
      'Dimensional modeling for ride analytics',
      'Driver performance analysis',
      'Customer behavior metrics',
      'Automated data validation and monitoring'
    ],
    metrics: [
      '1M+ rides processed',
      '95% data accuracy',
      'Daily automated pipeline',
      'Real-time dashboards'
    ],
    github: 'https://github.com/LEAKONO/uber-trip-analytics-platform'
  },
  {
    id: 'retail-warehouse',
    title: 'Online Retail Data Warehouse',
    subtitle: 'Scalable ELT Pipeline with Star Schema',
    description: 'End-to-end ELT pipeline processing retail transaction data with dimensional modeling, incremental loading, and automated data quality validation.',
    tech: ['Python', 'Snowflake', 'dbt', 'Apache Airflow', 'Power BI'],
    problem: 'Retail company needed to consolidate sales data from multiple channels into a single source of truth for analytics and reporting.',
    solution: 'Designed and implemented an automated ELT pipeline with incremental loading strategies, dimensional modeling, and built-in data quality checks using dbt tests.',
    impact: 'Reduced reporting time by 85% and enabled daily business reviews with trusted, consistent data.',
    architecture: ['API Ingestion', 'RAW Layer', 'STAGING', 'dbt Models', 'Data Warehouse', 'Power BI'],
    features: [
      'Incremental loading strategies for efficient processing',
      'Data quality validation with dbt tests',
      'Star schema with 7 dimensions for analytics',
      'Automated workflow orchestration with Airflow',
      'Data lineage tracking and monitoring'
    ],
    metrics: [
      '10M+ transactions processed',
      '99.9% data accuracy',
      '85% faster reporting',
      '24/7 automated pipeline'
    ],
    github: 'https://github.com/LEAKONO/retail_pipeline'
  }
];