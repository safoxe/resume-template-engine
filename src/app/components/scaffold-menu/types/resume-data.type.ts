import { PositionId } from './position.type';
import { SeniorityId } from './seniority-level.type';

export interface FullResumeData {
  name: string;
  description: string;
  usedTechnologies: string[];
  assignedTo: string;
  professionType: string;
  location: string;
  seniorityLevel: string;
}
