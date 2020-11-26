import { PositionId } from './position.type';
import { SeniorityId } from './seniority-level.type';

export type Domain = 'Medical' | 'Automotive';

export interface Resume {
  name: string;
  domain: Domain;
  mainTechnology: string;
  positionType: PositionId;
  seniorityLevel: SeniorityId;
}
