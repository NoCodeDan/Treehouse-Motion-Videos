import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { quicksandFamily, robotoFamily } from "../../fonts";
import {
  TREEHOUSE_GREEN,
  TEXT_COLOR,
  TEXT_LIGHT,
  WHITE,
  ACCENT_PURPLE,
  ACCENT_BLUE,
} from "../../lib/brand";
import { SNAPPY, SMOOTH, staggerDelay } from "../../lib/animations";

/* ── Layout constants ─────────────────────────────────────── */
const DIAMOND_SIZE = 56;
const NODE_H = 38;
const NODE_W = 180;
const COL_GAP = 200; // horizontal distance between decision and answer
const ROW_GAP = 90; // vertical distance between rows

/* ── Data ─────────────────────────────────────────────────── */
interface AnswerNode {
  text: string;
  color: string;
}

interface DecisionRow {
  question: string;
  yesLabel: string;
  noLabel: string;
  yes: AnswerNode | null; // null means "goes to next question"
  no: AnswerNode | null;
}

const ROWS: DecisionRow[] = [
  {
    question: "Can you code?",
    yesLabel: "Yes",
    noLabel: "No",
    yes: { text: "LangChain + Claude API\nor Cursor", color: ACCENT_BLUE },
    no: null, // links to next question
  },
  {
    question: "Custom app or\nconnecting tools?",
    yesLabel: "Connecting",
    noLabel: "Custom",
    yes: { text: "n8n (self-hosted)", color: TREEHOUSE_GREEN },
    no: null,
  },
  {
    question: "Ship real\nor explore?",
    yesLabel: "Explore",
    noLabel: "Ship real",
    yes: { text: "Claude Projects /\nChatGPT GPTs", color: ACCENT_PURPLE },
    no: { text: "Lovable / Base44", color: "#e67e22" },
  },
];

/* ── Sub-components ───────────────────────────────────────── */

const Diamond: React.FC<{
  label: string;
  progress: number;
}> = ({ label, progress }) => {
  const scale = interpolate(progress, [0, 1], [0.6, 1]);
  return (
    <div
      style={{
        width: DIAMOND_SIZE,
        height: DIAMOND_SIZE,
        transform: `rotate(45deg) scale(${scale})`,
        border: `3px solid ${TREEHOUSE_GREEN}`,
        backgroundColor: WHITE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: progress,
        boxShadow: `0 2px 10px ${TREEHOUSE_GREEN}22`,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          transform: "rotate(-45deg)",
          fontSize: 11,
          fontFamily: quicksandFamily,
          fontWeight: 700,
          color: TEXT_COLOR,
          textAlign: "center",
          lineHeight: 1.2,
          whiteSpace: "pre-line",
        }}
      >
        {label}
      </span>
    </div>
  );
};

const AnswerBox: React.FC<{
  text: string;
  color: string;
  progress: number;
  branchLabel: string;
}> = ({ text, color, progress, branchLabel }) => {
  const translateX = interpolate(progress, [0, 1], [20, 0]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        opacity: progress,
        transform: `translateX(${translateX}px)`,
      }}
    >
      {/* Branch label */}
      <span
        style={{
          fontSize: 11,
          fontFamily: robotoFamily,
          fontWeight: 700,
          color: TEXT_LIGHT,
          minWidth: 52,
          textAlign: "right",
        }}
      >
        {branchLabel}
      </span>
      {/* Connector line */}
      <div
        style={{
          width: 24,
          height: 2,
          backgroundColor: color,
          borderRadius: 1,
          flexShrink: 0,
        }}
      />
      {/* Box */}
      <div
        style={{
          backgroundColor: WHITE,
          border: `2px solid ${color}`,
          borderRadius: 8,
          padding: "8px 14px",
          minWidth: NODE_W,
          boxShadow: `0 2px 8px ${color}22`,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontFamily: robotoFamily,
            fontWeight: 500,
            color: TEXT_COLOR,
            lineHeight: 1.3,
            whiteSpace: "pre-line",
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

/* ── Main component ───────────────────────────────────────── */

export const DecisionTreeFlow: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      {ROWS.map((row, rowIdx) => {
        const baseDelay = delay + staggerDelay(rowIdx, 25);

        const diamondProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: baseDelay,
        });

        const yesProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: baseDelay + 12,
        });

        const noProgress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: baseDelay + 18,
        });

        // Vertical connector to next row
        const connectorProgress =
          rowIdx < ROWS.length - 1
            ? spring({
                frame,
                fps,
                config: SMOOTH,
                delay: baseDelay + 22,
              })
            : 0;

        return (
          <React.Fragment key={rowIdx}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* Left answer (yes branch) */}
              <div
                style={{
                  width: COL_GAP,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {row.yes && (
                  <AnswerBox
                    text={row.yes.text}
                    color={row.yes.color}
                    progress={yesProgress}
                    branchLabel={row.yesLabel}
                  />
                )}
              </div>

              {/* Diamond */}
              <Diamond label={row.question} progress={diamondProgress} />

              {/* Right answer (no branch) — or "goes to next" label */}
              <div
                style={{
                  width: COL_GAP,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {row.no ? (
                  <AnswerBox
                    text={row.no.text}
                    color={row.no.color}
                    progress={noProgress}
                    branchLabel={row.noLabel}
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      opacity: noProgress,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: robotoFamily,
                        fontWeight: 700,
                        color: TEXT_LIGHT,
                      }}
                    >
                      {row.noLabel}
                    </span>
                    <div
                      style={{
                        width: 24,
                        height: 2,
                        backgroundColor: TEXT_LIGHT,
                        borderRadius: 1,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        fontFamily: robotoFamily,
                        fontWeight: 500,
                        color: TEXT_LIGHT,
                        fontStyle: "italic",
                      }}
                    >
                      ↓
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Vertical connector to next row */}
            {rowIdx < ROWS.length - 1 && (
              <div
                style={{
                  width: 3,
                  height: ROW_GAP * interpolate(connectorProgress, [0, 1], [0, 1]),
                  backgroundColor: TREEHOUSE_GREEN,
                  borderRadius: 2,
                  opacity: connectorProgress,
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
