import { PositionId } from './position.type';
import { SeniorityId } from './seniority-level.type';

export interface Resume {
  positionType: PositionId;
  seniorityLevel: SeniorityId;
}

export interface GeneratedResumeData {
  name: string;
  domain: string;
  positionType: PositionId;
  seniorityLevel: SeniorityId;
  mainTechnology: string;
  additionalTechnologies: string[];
}
