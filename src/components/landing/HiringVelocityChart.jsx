import { useState } from "react";
import { motion } from "motion/react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const PERIODS = ["7D", "30D", "90D", "12M"];

const DATASETS = {
  "7D": [
    { label: "Mon", velocity: 62, benchmark: 54 },
    { label: "Tue", velocity: 71, benchmark: 58 },
    { label: "Wed", velocity: 68, benchmark: 60 },
    { label: "Thu", velocity: 84, benchmark: 62 },
    { label: "Fri", velocity: 79, benchmark: 65 },
    { label: "Sat", velocity: 88, benchmark: 66 },
    { label: "Sun", velocity: 92, benchmark: 68 },
  ],
  "30D": [
    { label: "W1", velocity: 58, benchmark: 52 },
    { label: "W2", velocity: 64, benchmark: 55 },
    { label: "W3", velocity: 72, benchmark: 58 },
    { label: "W4", velocity: 81, benchmark: 61 },
  ],
  "90D": [
    { label: "Jan", velocity: 42, benchmark: 40 },
    { label: "Feb", velocity: 58, benchmark: 45 },
    { label: "Mar", velocity: 65, benchmark: 50 },
  ],
  "12M": [
    { label: "Jan", velocity: 40, benchmark: 38 },
    { label: "Feb", velocity: 48, benchmark: 40 },
    { label: "Mar", velocity: 52, benchmark: 42 },
    { label: "Apr", velocity: 55, benchmark: 44 },
    { label: "May", velocity: 60, benchmark: 46 },
    { label: "Jun", velocity: 58, benchmark: 48 },
    { label: "Jul", velocity: 65, benchmark: 50 },
    { label: "Aug", velocity: 72, benchmark: 52 },
    { label: "Sep", velocity: 78, benchmark: 54 },
    { label: "Oct", velocity: 85, benchmark: 56 },
    { label: "Nov", velocity: 91, benchmark: 58 },
    { label: "Dec", velocity: 100, benchmark: 60 },
  ],
};

const STATS = [
  { label: "Applied", value: "12.4K", delta: "+18%" },
  { label: "Screened", value: "3.2K", delta: "+12%" },
  { label: "Hired", value: "247", delta: "+34%" },
];

function PremiumTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const velocity = payload.find((p) => p.dataKey === "velocity");
  const benchmark = payload.find((p) => p.dataKey === "benchmark");

  return (
    <div className="rounded-2xl border border-border/80 bg-card/95 backdrop-blur-xl px-4 py-3 shadow-card min-w-[140px]">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{label}</p>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-[oklch(0.52_0.21_258)]" />
            Velocity
          </span>
          <span className="text-sm font-semibold tabular-nums">{velocity?.value}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-[oklch(0.74_0.17_55/0.8)]" />
            Target
          </span>
          <span className="text-sm font-medium text-muted-foreground tabular-nums">
            {benchmark?.value}
          </span>
        </div>
      </div>
    </div>
  );
}

export function HiringVelocityChart() {
  const [period, setPeriod] = useState("12M");
  const reduced = useReducedMotion();
  const data = DATASETS[period];

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Analytics</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.52_0.21_258/0.12)] px-2 py-0.5 text-[10px] font-medium text-primary">
              <TrendingUp className="size-3" />
              Live
            </span>
          </div>
          <h3 className="text-lg font-semibold font-display mt-0.5">Hiring velocity</h3>
          <p className="text-xs text-muted-foreground mt-1">Offers accepted vs. quarterly target</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-secondary/60 p-1 border border-border/60">
            {PERIODS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriod(p)}
                className={cn(
                  "relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors",
                  period === p
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {period === p && (
                  <motion.span
                    layoutId="chart-period"
                    className="absolute inset-0 rounded-lg bg-gradient-primary shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{p}</span>
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-1 rounded-xl bg-[oklch(0.74_0.17_55/0.12)] px-2.5 py-1.5 text-xs font-semibold text-[oklch(0.45_0.14_45)]">
            <ArrowUpRight className="size-3.5" />
            +34%
          </div>
        </div>
      </div>

      {/* Chart */}
      <motion.div
        key={period}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative h-[220px] w-full -mx-1"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="velocityFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.52 0.21 258)" stopOpacity={0.45} />
                <stop offset="50%" stopColor="oklch(0.52 0.21 258)" stopOpacity={0.12} />
                <stop offset="100%" stopColor="oklch(0.52 0.21 258)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="velocityStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.38 0.18 260)" />
                <stop offset="50%" stopColor="oklch(0.52 0.21 258)" />
                <stop offset="100%" stopColor="oklch(0.66 0.20 45)" />
              </linearGradient>
              <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <CartesianGrid
              strokeDasharray="4 8"
              vertical={false}
              stroke="oklch(0.52 0.21 258 / 0.08)"
            />

            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.48 0.03 255)", fontSize: 11 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "oklch(0.48 0.03 255)", fontSize: 11 }}
              domain={[0, 110]}
              tickFormatter={(v) => `${v}`}
              width={32}
            />

            <Tooltip
              content={<PremiumTooltip />}
              cursor={{
                stroke: "oklch(0.52 0.21 258 / 0.25)",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />

            {/* Benchmark line */}
            <Line
              type="monotone"
              dataKey="benchmark"
              stroke="oklch(0.74 0.17 55 / 0.65)"
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={false}
              isAnimationActive={!reduced}
              animationDuration={1200}
              animationEasing="ease-out"
            />

            {/* Main velocity area */}
            <Area
              type="monotone"
              dataKey="velocity"
              stroke="url(#velocityStroke)"
              strokeWidth={2.5}
              fill="url(#velocityFill)"
              filter="url(#lineGlow)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "oklch(0.52 0.21 258)",
                stroke: "oklch(0.99 0.003 240)",
                strokeWidth: 2,
              }}
              isAnimationActive={!reduced}
              animationDuration={1400}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Subtle chart overlay vignette */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(to top, oklch(0.985 0.008 240 / 0.4) 0%, transparent 30%), linear-gradient(to right, oklch(0.985 0.008 240 / 0.3) 0%, transparent 15%, transparent 85%, oklch(0.985 0.008 240 / 0.3) 100%)",
          }}
        />
      </motion.div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-5 rounded-full bg-gradient-to-r from-[oklch(0.38_0.18_260)] to-[oklch(0.66_0.20_45)]" />
          Hiring velocity
        </span>
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-5 rounded-full border-t-2 border-dashed border-[oklch(0.74_0.17_55)]" />
          Quarterly target
        </span>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-3 mt-5">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="rounded-2xl bg-secondary/50 border border-border/80 p-3 hover:border-primary/25 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{s.label}</span>
              <span className="text-[10px] font-medium text-[oklch(0.55_0.16_150)] opacity-0 group-hover:opacity-100 transition-opacity">
                {s.delta}
              </span>
            </div>
            <div className="text-lg font-bold font-display tabular-nums mt-0.5">{s.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
