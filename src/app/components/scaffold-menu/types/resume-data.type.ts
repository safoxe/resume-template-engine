import { PositionId } from './position.type';
import { SeniorityId } from './seniority-level.type';

export interface Resume {
  positionType: PositionId;
  seniorityLevel: SeniorityId;
}
