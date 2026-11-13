export type StepState = 'done' | 'active' | 'queued';

export const releaseSteps = [
  { id: 'design', state: 'done' },
  { id: 'content', state: 'done' },
  { id: 'build', state: 'active' },
  { id: 'launch', state: 'queued' },
] as const satisfies ReadonlyArray<{ id: string; state: StepState }>;
