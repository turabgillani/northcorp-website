const ROWS = [
  {
    label: "HIPAA",
    status: "✓ IN PLACE",
    lead: "Compliant from day one.",
    body: "In place before your agent ever answers a call.",
  },
  {
    label: "BAA",
    status: "✓ SIGNED",
    lead: "Signed with every client.",
    body: "A Business Associate Agreement as standard, not on request.",
  },
  {
    label: "CALIFORNIA CPPA",
    status: "✓ HANDLED",
    lead: "Handled for you.",
    body: "We cover the state's automated-decision technology requirements.",
  },
  {
    label: "RELEASE PIPELINE",
    status: "✓ 3 STAGES",
    lead: "Three-stage release.",
    body: "Dev, client testing, then live only on your approval.",
  },
];

export default function ComplianceBand() {
  return (
    <section className="nc-chapter text-light-on-green">
      <div className="max-w-[1120px] mx-auto px-8 py-[66px] grid grid-cols-1 min-[901px]:grid-cols-[.82fr_1fr] gap-8 min-[901px]:gap-16 items-start">
        <div className="min-[901px]:sticky min-[901px]:top-24 max-[900px]:static">
          <div className="font-mono font-medium text-[11px] leading-none tracking-[.16em] uppercase text-mint mb-[18px]">
            Compliance
          </div>
          <h2 className="font-serif font-normal text-[36px] leading-[1.16] text-paper mb-[22px] tracking-[-.01em]">
            We treat compliance as the <span className="italic text-mint">product</span>, not the footer.
          </h2>
          <p className="font-sans text-[15px] leading-[1.6] text-mint-light mb-[30px] max-w-[340px]">
            Every safeguard is standing before your agent answers its first call. Nothing
            here is optional, and nothing waits for a request.
          </p>
          <div className="inline-flex items-center gap-3 px-4 py-[13px] border border-mint-light/[.22] rounded-[10px] font-mono font-medium text-[10px] leading-[1.4] tracking-[.08em] text-muted-green">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#7FD6A0" strokeWidth="1.3" />
              <path
                d="M10 16.5 L14.5 21 L22 11.5"
                stroke="#7FD6A0"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            COMPLIANCE DOSSIER
            <br />
            NC-CA · REV 2026.1
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between pb-3 border-b border-mint-light/[.28] font-mono font-medium text-[9.5px] leading-none tracking-[.12em] uppercase text-muted-green">
            <span>Safeguard</span>
            <span>Status</span>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`py-[26px] ${i < ROWS.length - 1 ? "border-b border-mint-light/[.14]" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-2.5">
                <span className="font-mono font-semibold text-[13px] leading-none tracking-[.08em] text-terracotta">
                  {row.label}
                </span>
                <span className="flex-1 border-b border-dotted border-mint-light/[.4] -translate-y-1" />
                <span className="font-mono font-semibold text-[11px] leading-none tracking-[.1em] text-mint whitespace-nowrap">
                  {row.status}
                </span>
              </div>
              <div className="font-sans text-[15px] leading-[1.55] text-light-on-green">
                <span className="text-paper font-semibold">{row.lead}</span> {row.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
