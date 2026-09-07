import { cn } from "@/lib/cn";

const MODULES = 21;

/**
 * Deterministic pseudo-random fill so server and client render identically.
 * This is decorative artwork, not a scannable code — replace with a real QR
 * image pointing at the app's smart link before launch.
 */
function buildMatrix(): boolean[][] {
  let seed = 20260802;
  const next = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  const isFinder = (row: number, col: number) => {
    const inBox = (r0: number, c0: number) =>
      row >= r0 && row < r0 + 7 && col >= c0 && col < c0 + 7;
    return inBox(0, 0) || inBox(0, MODULES - 7) || inBox(MODULES - 7, 0);
  };

  return Array.from({ length: MODULES }, (_, row) =>
    Array.from({ length: MODULES }, (_, col) => {
      if (isFinder(row, col)) {
        const localRow = row < 7 ? row : row - (MODULES - 7);
        const localCol = col < 7 ? col : col - (MODULES - 7);
        // Concentric finder square: filled outer ring, gap, filled centre.
        return Math.max(Math.abs(localRow - 3), Math.abs(localCol - 3)) !== 2;
      }
      return next() > 0.52;
    }),
  );
}

const matrix = buildMatrix();

export function QrPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4",
        className,
      )}
    >
      <svg
        viewBox={`0 0 ${MODULES} ${MODULES}`}
        role="img"
        aria-label="Placeholder QR code for downloading the app"
        className="h-28 w-28 rounded-lg bg-cream p-1.5"
        shapeRendering="crispEdges"
      >
        {matrix.map((row, rowIndex) =>
          row.map((filled, colIndex) =>
            filled ? (
              <rect
                key={`${rowIndex}-${colIndex}`}
                x={colIndex}
                y={rowIndex}
                width="1"
                height="1"
                fill="#05060c"
              />
            ) : null,
          ),
        )}
      </svg>
      <p className="max-w-[9rem] text-center text-[0.6875rem] leading-snug text-slate-dim">
        Scan to download — QR placeholder
      </p>
    </div>
  );
}
