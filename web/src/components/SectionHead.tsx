export function SectionHead({ title, linkLabel }: { title: string; linkLabel: string }) {
  return (
    <div className="sechead">
      <h2>{title}</h2>
      <div className="rule" />
      <a href="#">
        {linkLabel} →
      </a>
    </div>
  );
}
