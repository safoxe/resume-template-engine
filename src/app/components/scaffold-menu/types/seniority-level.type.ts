export enum Seniority {
  lead = 'Lead',
  senior = 'Senior',
  middle = 'Middle',
  junior = 'Junior',
  trainee = 'Trainee',
}

export const seniorityIds = ['lead', 'senior', 'middle', 'junior', 'trainee'];

export type SeniorityId = typeof seniorityIds[number];
export type SeniorityName = 'Lead' | 'Senior' | 'Middle' | 'Junior' | 'Trainee';

export const seniorityTypes: Record<SeniorityId, SeniorityName> = {
  lead: 'Lead',
  senior: 'Senior',
  middle: 'Middle',
  junior: 'Junior',
  trainee: 'Trainee',
};
