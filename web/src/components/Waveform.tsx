const BARS: number[] = (() => {
  let seed = 7;
  const out: number[] = [];
  for (let i = 0; i < 42; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    out.push(Math.round(8 + (seed / 233280) * 26));
  }
  return out;
})();

export function Waveform() {
  return (
    <div className="wave" aria-hidden="true">
      {BARS.map((h, i) => (
        <i key={i} style={{ height: h }} />
      ))}
    </div>
  );
}
