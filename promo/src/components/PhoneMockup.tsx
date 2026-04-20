import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SMOOTH, SNAPPY, staggerDelay } from "../lib/animations";
import { TREEHOUSE_GREEN, ACCENT_PURPLE, TEXT_COLOR } from "../lib/brand";
import { robotoFamily } from "../fonts";

export const PhoneMockup: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phoneProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay,
  });

  const translateY = interpolate(phoneProgress, [0, 1], [60, 0]);

  return (
    <div
      style={{
        width: 280,
        height: 500,
        backgroundColor: "#ffffff",
        borderRadius: 36,
        border: "4px solid #e0e0e0",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
        opacity: phoneProgress,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          height: 40,
          backgroundColor: ACCENT_PURPLE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
        }}
      >
        {/* Notch */}
        <div
          style={{
            width: 100,
            height: 24,
            backgroundColor: "white",
            borderRadius: 12,
            position: "absolute",
            top: 4,
          }}
        />
      </div>

      {/* App header */}
      {(() => {
        const headerProgress = spring({
          frame,
          fps,
          config: SMOOTH,
          delay: delay + 15,
        });
        return (
          <div
            style={{
              padding: "14px 16px",
              backgroundColor: ACCENT_PURPLE,
              opacity: headerProgress,
            }}
          >
            <div
              style={{
                fontFamily: robotoFamily,
                fontSize: 18,
                fontWeight: 700,
                color: "white",
              }}
            >
              My AI App
            </div>
            <div
              style={{
                fontFamily: robotoFamily,
                fontSize: 11,
                color: "rgba(255,255,255,0.8)",
                marginTop: 2,
              }}
            >
              Powered by React + AI
            </div>
          </div>
        );
      })()}

      {/* App content cards */}
      <div
        style={{
          flex: 1,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          backgroundColor: "#f8f8fc",
        }}
      >
        {[
          { label: "Smart Search", progress: 0.85, color: ACCENT_PURPLE },
          { label: "AI Chat", progress: 0.6, color: TREEHOUSE_GREEN },
          { label: "Analytics", progress: 0.45, color: "#5a9fd4" },
        ].map((card, i) => {
          const cardProgress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: delay + 25 + staggerDelay(i, 12),
          });
          const cardTranslateY = interpolate(
            cardProgress,
            [0, 1],
            [30, 0]
          );

          // Progress bar fill
          const barFillProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 40 + staggerDelay(i, 15),
          });
          const barWidth = interpolate(
            barFillProgress,
            [0, 1],
            [0, card.progress * 100]
          );

          return (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                borderRadius: 10,
                padding: 12,
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                opacity: cardProgress,
                transform: `translateY(${cardTranslateY}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: robotoFamily,
                  fontSize: 12,
                  fontWeight: 600,
                  color: TEXT_COLOR,
                  marginBottom: 6,
                }}
              >
                {card.label}
              </div>
              <div
                style={{
                  height: 6,
                  backgroundColor: "#ececec",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${barWidth}%`,
                    height: "100%",
                    backgroundColor: card.color,
                    borderRadius: 3,
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Bottom nav */}
        {(() => {
          const navProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 60,
          });
          return (
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                justifyContent: "space-around",
                padding: "10px 0",
                borderTop: "1px solid #ececec",
                opacity: navProgress,
              }}
            >
              {["●", "◆", "■", "▲"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: i === 0 ? ACCENT_PURPLE : "#ccc",
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
};
