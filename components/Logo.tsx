export default function Logo({ size = 24, fill = "#14392B" }: { size?: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <polygon
        points="24,3 29,19 45,24 29,29 24,45 19,29 3,24 19,19"
        fill={fill}
      />
    </svg>
  );
}
