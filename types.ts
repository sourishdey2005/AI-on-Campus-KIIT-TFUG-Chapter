
export interface Domain {
  name: string;
  details?: string;
}

export interface Cluster {
  id: string;
  title: string;
  icon: string;
  description: string;
  domains: Domain[];
  color: string;
}

export interface Activity {
  title: string;
  icon: string;
  description: string;
  outcome: string;
}

export interface TeamMember {
  role: string;
  name: string;
  level: number;
  image?: string;
}