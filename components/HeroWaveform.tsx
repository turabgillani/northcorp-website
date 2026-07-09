const COLORS = ["#BC6A46", "#BC6A46", "#7FD6A0", "#BC6A46", "#8FA396", "#BC6A46", "#7FD6A0", "#8FA396"];

export default function HeroWaveform() {
  const bars = Array.from({ length: 16 }, (_, i) => ({
    color: COLORS[i % COLORS.length],
    delay: i * 0.08,
  }));

  return (
    <div className="flex items-end gap-[3px] h-11 mb-[18px]">
      {bars.map((bar, i) => (
        <span
          key={i}
          className="eq-bar w-1 h-full rounded-sm"
          style={{ background: bar.color, animationDelay: `${bar.delay}s` }}
        />
      ))}
    </div>
  );
}
