export type StepState = 'done' | 'active' | 'queued';

export const releaseSteps = [
  { id: 'design', state: 'done' },
  { id: 'content', state: 'active' },
  { id: 'build', state: 'done' },
  { id: 'launch', state: 'queued' },
] as const satisfies ReadonlyArray<{ id: string; state: StepState }>;

export type StepId = (typeof releaseSteps)[number]['id'];

/** The latest step in progress, else the first one not done, else the last step. */
export function currentStep(): StepId {
  const active = releaseSteps.filter((s) => s.state === 'active');
  if (active.length) return active[active.length - 1].id;
  return (releaseSteps.find((s) => s.state !== 'done') ?? releaseSteps[releaseSteps.length - 1]).id;
}
