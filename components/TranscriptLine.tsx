import type { ScriptLine } from "@/lib/callScripts";

const bubbleBase = "rounded-xl px-3.5 py-2.5 max-w-[82%] fade-in";
const nameBase = "font-mono text-[8.5px] leading-none tracking-[.1em] uppercase mb-1.5";
const textBase = "font-sans text-[13.5px] leading-[1.5]";

export default function TranscriptLine({ line }: { line: ScriptLine }) {
  if (line.sp === "agent" && line.route) {
    return (
      <div className="flex justify-center mb-3">
        <div className={`${bubbleBase} max-w-full bg-[#BC6A46]/[.16] border border-terracotta`}>
          <div className={`${nameBase} text-[#E9A986]`}>Boundary · routing to a human</div>
          <div className={`${textBase} text-[#F4E7DE]`}>{line.text}</div>
        </div>
      </div>
    );
  }

  if (line.sp === "agent") {
    return (
      <div className="flex justify-start mb-3">
        <div className={`${bubbleBase} bg-[#1C4A38]`}>
          <div className={`${nameBase} text-mint`}>Northcorp agent</div>
          <div className={`${textBase} text-light-on-green`}>{line.text}</div>
        </div>
      </div>
    );
  }

  if (line.sp === "caller") {
    return (
      <div className="flex justify-end mb-3">
        <div className={`${bubbleBase} bg-paper`}>
          <div className={`${nameBase} text-[#8a7d6c]`}>Caller</div>
          <div className={`${textBase} text-ink`}>{line.text}</div>
        </div>
      </div>
    );
  }

  if (line.sp === "sync") {
    return (
      <div className="flex justify-center -mt-1 mb-3">
        <div className="flex items-center gap-1.5 px-3 py-1 fade-in">
          <div className="font-mono text-[9px] leading-[1.4] tracking-[.05em] text-[#6E8578] uppercase text-center">
            ↳ {line.text}
          </div>
        </div>
      </div>
    );
  }

  if (line.sp === "system" && line.outcome) {
    return (
      <div className="flex justify-center mb-3">
        <div className="px-4 py-2 rounded-full bg-mint/[.14] border border-mint/[.42] fade-in">
          <div className="font-mono text-[10.5px] font-semibold leading-[1.3] tracking-[.05em] text-mint text-center">
            ✓&nbsp;&nbsp;{line.text}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mb-3">
      <div className="px-3.5 py-2 rounded-full bg-muted-green/[.16] fade-in">
        <div className="font-mono text-[10.5px] leading-none tracking-[.06em] text-muted-green">
          {line.text}
        </div>
      </div>
    </div>
  );
}
