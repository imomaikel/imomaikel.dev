export function IndexLabel({ n }: { n: number }) {
  return <span className="mono-label text-dim">{String(n).padStart(2, '0')}</span>;
}
