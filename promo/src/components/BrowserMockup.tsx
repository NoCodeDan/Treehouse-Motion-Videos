import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SMOOTH, SNAPPY, staggerDelay } from "../lib/animations";
import { TREEHOUSE_GREEN, ACCENT_PURPLE, TEXT_COLOR } from "../lib/brand";
import { robotoFamily, quicksandFamily } from "../fonts";

export const BrowserMockup: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const browserProgress = spring({
    frame,
    fps,
    config: SNAPPY,
    delay,
  });

  const translateY = interpolate(browserProgress, [0, 1], [60, 0]);

  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Deploy in seconds" },
    { icon: "🔒", title: "Secure", desc: "Enterprise-grade" },
    { icon: "📊", title: "Analytics", desc: "Real-time insights" },
  ];

  return (
    <div
      style={{
        width: 520,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
        opacity: browserProgress,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          height: 36,
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: 8,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f56", "#ffbd2e", "#27c93f"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: c,
              }}
            />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 12,
            height: 22,
            backgroundColor: "white",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            border: "1px solid #ddd",
          }}
        >
          {(() => {
            const urlProgress = spring({
              frame,
              fps,
              config: SMOOTH,
              delay: delay + 20,
            });
            return (
              <span
                style={{
                  fontFamily: robotoFamily,
                  fontSize: 11,
                  color: "#666",
                  opacity: urlProgress,
                }}
              >
                my-saas.vercel.app
              </span>
            );
          })()}
        </div>
      </div>

      {/* SaaS landing page content */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Nav bar */}
        {(() => {
          const navProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 25,
          });
          return (
            <div
              style={{
                padding: "10px 20px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #f0f0f0",
                opacity: navProgress,
              }}
            >
              <div
                style={{
                  fontFamily: quicksandFamily,
                  fontSize: 16,
                  fontWeight: 700,
                  color: ACCENT_PURPLE,
                }}
              >
                SaaS
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                {["Features", "Pricing", "Docs"].map((item, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: robotoFamily,
                      fontSize: 11,
                      color: TEXT_COLOR,
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                ))}
                <div
                  style={{
                    backgroundColor: ACCENT_PURPLE,
                    borderRadius: 6,
                    padding: "5px 12px",
                    fontFamily: robotoFamily,
                    fontSize: 10,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  Get Started
                </div>
              </div>
            </div>
          );
        })()}

        {/* Hero section */}
        {(() => {
          const heroProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 35,
          });
          const heroY = interpolate(heroProgress, [0, 1], [15, 0]);

          const btnProgress = spring({
            frame,
            fps,
            config: SNAPPY,
            delay: delay + 55,
          });

          return (
            <div
              style={{
                padding: "28px 24px 20px",
                textAlign: "center",
                backgroundColor: "white",
                opacity: heroProgress,
                transform: `translateY(${heroY}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: quicksandFamily,
                  fontSize: 22,
                  fontWeight: 700,
                  color: TEXT_COLOR,
                  lineHeight: 1.3,
                }}
              >
                Build your SaaS
              </div>
              <div
                style={{
                  fontFamily: quicksandFamily,
                  fontSize: 22,
                  fontWeight: 700,
                  color: ACCENT_PURPLE,
                  lineHeight: 1.3,
                }}
              >
                powered by AI.
              </div>
              <div
                style={{
                  fontFamily: robotoFamily,
                  fontSize: 11,
                  color: "#888",
                  marginTop: 8,
                  lineHeight: 1.4,
                }}
              >
                Your idea. Your product. Launched and live.
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 10,
                  marginTop: 14,
                }}
              >
                <div
                  style={{
                    backgroundColor: ACCENT_PURPLE,
                    borderRadius: 8,
                    padding: "8px 20px",
                    fontFamily: robotoFamily,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "white",
                    opacity: btnProgress,
                    transform: `scale(${btnProgress})`,
                  }}
                >
                  Start Free Trial
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    border: `1.5px solid #ddd`,
                    borderRadius: 8,
                    padding: "8px 20px",
                    fontFamily: robotoFamily,
                    fontSize: 12,
                    fontWeight: 500,
                    color: TEXT_COLOR,
                    opacity: btnProgress,
                    transform: `scale(${btnProgress})`,
                  }}
                >
                  Watch Demo
                </div>
              </div>
            </div>
          );
        })()}

        {/* Feature cards row */}
        <div
          style={{
            display: "flex",
            gap: 10,
            padding: "0 16px 18px",
            backgroundColor: "white",
          }}
        >
          {features.map((feat, i) => {
            const cardProgress = spring({
              frame,
              fps,
              config: SNAPPY,
              delay: delay + 70 + staggerDelay(i, 14),
            });
            const cardY = interpolate(cardProgress, [0, 1], [20, 0]);

            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  backgroundColor: "#f8f7fc",
                  borderRadius: 10,
                  padding: "14px 12px",
                  textAlign: "center",
                  opacity: cardProgress,
                  transform: `translateY(${cardY}px)`,
                }}
              >
                <div style={{ fontSize: 20 }}>{feat.icon}</div>
                <div
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 11,
                    fontWeight: 700,
                    color: TEXT_COLOR,
                    marginTop: 6,
                  }}
                >
                  {feat.title}
                </div>
                <div
                  style={{
                    fontFamily: robotoFamily,
                    fontSize: 9,
                    color: "#999",
                    marginTop: 2,
                  }}
                >
                  {feat.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Social proof bar */}
        {(() => {
          const proofProgress = spring({
            frame,
            fps,
            config: SMOOTH,
            delay: delay + 100,
          });
          return (
            <div
              style={{
                padding: "10px 20px",
                backgroundColor: "#fafafa",
                borderTop: "1px solid #f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                opacity: proofProgress,
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <span key={i} style={{ fontSize: 10, color: "#f5a623" }}>
                    ★
                  </span>
                ))}
              </div>
              <span
                style={{
                  fontFamily: robotoFamily,
                  fontSize: 10,
                  color: "#888",
                }}
              >
                Trusted by 2,000+ teams
              </span>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
