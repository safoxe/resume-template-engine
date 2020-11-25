export const positionIds = ['developer', 'testEngineer'];

export type PositionId = typeof positionIds[number];
export type PositionName = 'Developer' | 'Test Engineer';

export const positions: Record<PositionId, PositionName> = {
  developer: 'Developer',
  testEngineer: 'Test Engineer',
};
