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
  ACCENT_BLUE,
  ACCENT_PURPLE,
} from "../../lib/brand";
import { SNAPPY, staggerDelay } from "../../lib/animations";

const CARDS = [
  {
    icon: "💬",
    title: "In-Context",
    description: "Current conversation",
    subtitle: "Fast, free, temporary",
    accentColor: TREEHOUSE_GREEN,
  },
  {
    icon: "📚",
    title: "External/RAG",
    description: "Knowledge base search",
    subtitle: "Persistent, requires setup",
    accentColor: ACCENT_BLUE,
  },
  {
    icon: "📅",
    title: "Episodic",
    description: "Past events & interactions",
    subtitle: "Configurable",
    accentColor: ACCENT_PURPLE,
  },
  {
    icon: "🧠",
    title: "Semantic",
    description: "Facts & preferences",
    subtitle: "Persistent",
    accentColor: "#e0a040",
  },
];

export const MemoryTypesGrid: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18,
        width: 480,
      }}
    >
      {CARDS.map((card, i) => {
        const itemDelay = delay + staggerDelay(i, 16);
        const progress = spring({
          frame,
          fps,
          config: SNAPPY,
          delay: itemDelay,
        });

        const scale = interpolate(progress, [0, 1], [0.7, 1]);

        return (
          <div
            key={i}
            style={{
              backgroundColor: WHITE,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 3px 14px rgba(0,0,0,0.06)",
              opacity: progress,
              transform: `scale(${scale})`,
            }}
          >
            {/* Colored top border */}
            <div
              style={{
                height: 4,
                backgroundColor: card.accentColor,
                width: "100%",
              }}
            />

            <div
              style={{
                padding: "18px 20px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {/* Icon + title row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 28 }}>{card.icon}</span>
                <span
                  style={{
                    fontSize: 17,
                    fontFamily: quicksandFamily,
                    fontWeight: 700,
                    color: TEXT_COLOR,
                  }}
                >
                  {card.title}
                </span>
              </div>

              {/* Description */}
              <span
                style={{
                  fontSize: 13,
                  fontFamily: robotoFamily,
                  fontWeight: 400,
                  color: TEXT_COLOR,
                  lineHeight: 1.4,
                }}
              >
                {card.description}
              </span>

              {/* Subtitle */}
              <span
                style={{
                  fontSize: 11,
                  fontFamily: robotoFamily,
                  fontWeight: 500,
                  color: TEXT_LIGHT,
                  letterSpacing: 0.3,
                }}
              >
                {card.subtitle}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
