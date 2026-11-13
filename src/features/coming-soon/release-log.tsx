import { DateText } from '@/components/ui/date-text';
import { IndexLabel } from '@/components/ui/index-label';
import { Panel, PanelHeader } from '@/components/ui/panel';
import { site } from '@/config/site';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { cx } from '@/lib/cx';
import { releaseSteps, type StepState } from './release-steps';

const titleStyle: Record<StepState, string> = { done: '', active: 'font-extrabold', queued: 'text-muted' };
const stateStyle: Record<StepState, string> = { done: 'text-accent', active: 'text-fg', queued: 'text-dim' };

export function ReleaseLog({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).comingSoon.releaseLog;
  return (
    <Panel as="aside" aria-labelledby="release-log">
      <PanelHeader title={t.title} titleId="release-log" meta={`${site.name} ${site.version}`} />
      <ol className="m-0 list-none p-0">
        {releaseSteps.map(({ id, state }, i) => (
          <li key={id} className="flex items-baseline gap-4 border-t border-line px-5 py-[18px]">
            <IndexLabel n={i + 1} />
            <span className={cx('flex-auto text-ui', titleStyle[state])}>{t.steps[id]}</span>
            <span className={cx('mono-label', stateStyle[state])}>{t.states[state]}</span>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1.5 border-t border-fg px-5 py-[22px]">
        <span className="text-ui text-muted">{t.expectedLaunch}</span>
        <DateText date={site.launchDate} locale={locale} className="text-ui text-fg" />
      </div>
    </Panel>
  );
}
