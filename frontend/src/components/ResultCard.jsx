import { useState } from "react";

import ScoreGauge from "./ScoreGauge";
import PermissionChart from "./PermissionChart";

import {
  CATEGORY_COLORS,
  LEVEL_CONFIG,
} from "../data/appDatabase";

export default function ResultCard({
  app,
  onCompare,
  isCompareMode,
}) {
  const [expanded, setExpanded] =
    useState(false);

  const [tab, setTab] =
    useState("breakdown");

  const cfg =
    LEVEL_CONFIG[app.level];

  return (
    <div
      style={{
        background:
          "rgba(15,23,42,0.85)",
        backdropFilter:
          "blur(14px)",
        border:
          `1px solid ${cfg.border}`,
        borderRadius: 20,
        padding: "24px",
        marginBottom: 16,
        boxShadow:
          `0 0 35px ${cfg.border}33`,
        transition:
          "all .3s ease",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src={app.icon}
            alt={app.name}
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              objectFit: "cover",
              border:
                "2px solid rgba(255,255,255,.1)",
            }}
          />

          {app.dpdp && (
            <div
              style={{
                position: "absolute",
                bottom: -6,
                right: -6,
                background:
                  "#7f1d1d",
                border:
                  "1px solid #dc2626",
                borderRadius: 20,
                padding: "2px 8px",
                fontSize: 9,
                color: "#fca5a5",
                fontWeight: 700,
              }}
            >
              DPDP
            </div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 900,
              fontSize: 28,
              color: "#f8fafc",
            }}
          >
            {app.name}
          </div>

          <div
            style={{
              color: "#94a3b8",
              fontSize: 13,
              marginTop: 4,
            }}
          >
            {
              Object.keys(
                app.permissions
              ).length
            }{" "}
            permissions detected
          </div>

          {app.dpdp && (
            <div
              style={{
                color: "#fca5a5",
                fontSize: 12,
                marginTop: 6,
              }}
            >
              ⚠️ Potential DPDP Act
              2023 Violation
            </div>
          )}
        </div>

        <ScoreGauge
          score={app.score}
          level={app.level}
        />
      </div>

      {/* SUMMARY */}

      <p
        style={{
          color: "#cbd5e1",
          fontSize: 14,
          lineHeight: 1.8,
          marginBottom: 16,
        }}
      >
        {app.summary}
      </p>

      {/* PERMISSION TAGS */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 18,
        }}
      >
        {Object.entries(
          app.permissions
        ).map(
          ([name, { icon }]) => (
            <span
              key={name}
              style={{
                background:
                  "linear-gradient(90deg,#1e293b,#0f172a)",
                border:
                  "1px solid rgba(255,255,255,.08)",
                borderRadius: 30,
                padding:
                  "6px 12px",
                fontSize: 12,
                color: "#e2e8f0",
              }}
            >
              {icon} {name}
            </span>
          )
        )}
      </div>

      {/* SAFER ALTERNATIVE */}

      {app.safer && (
        <div
          style={{
            background:
              "linear-gradient(90deg,#052e16,#064e3b)",
            border:
              "1px solid #22c55e",
            borderRadius: 12,
            padding: 14,
            marginBottom: 18,
            fontWeight: 600,
          }}
        >
          <span
            style={{
              color: "#86efac",
            }}
          >
            🛡️ Safer Alternative
          </span>

          <div
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            {app.safer.name}
            {" • "}
            Privacy Score:
            {" "}
            {app.safer.score}
            /100
          </div>
        </div>
      )}

      {/* EXPAND BUTTON */}

      <button
        onClick={() =>
          setExpanded(
            !expanded
          )
        }
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: 12,
          border:
            "1px solid #334155",
          background:
            "#111827",
          color: "white",
          cursor: "pointer",
          marginBottom:
            expanded ? 16 : 0,
        }}
      >
        {expanded
          ? "▲ Hide Details"
          : "▼ See Full Breakdown"}
      </button>

      {expanded && (
        <div>
          <div
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 16,
            }}
          >
            {[
              "📊breakdown",
              "🥧chart",
              "🔧revoke",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  setTab(item)
                }
                style={{
                  padding:
                    "8px 14px",
                  borderRadius:
                    "10px",
                  border:
                    "1px solid #334155",
                  background:
                    tab === item
                      ? "#4f46e5"
                      : "#111827",
                  color:
                    "white",
                  cursor:
                    "pointer",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {tab ===
            "📊breakdown" && (
            <div>
              {Object.entries(
                app.permissions
              ).map(
                ([
                  name,
                  {
                    pts,
                    category,
                    icon,
                  },
                ]) => (
                  
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <span>{icon}</span>
                  
                    <span
                      style={{
                        flex: 1,
                        color: "#e2e8f0",
                      }}
                    >
                      {name}
                    </span>
                    
                    {/* Progress Bar */}
                    
                    <div
                      style={{
                        width: "100px",
                        height: "8px",
                        background: "#1e293b",
                        borderRadius: "999px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${pts * 10}%`,
                          height: "100%",
                          background:
                            CATEGORY_COLORS[category],
                          borderRadius: "999px",
                        }}
                      />
                    </div>
                      
                    <span
                      style={{
                        color:
                          CATEGORY_COLORS[category],
                        fontWeight: "700",
                        minWidth: "45px",
                        textAlign: "right",
                      }}
                    >
                      +{pts}
                    </span>
                  </div>
                )
              )}
            </div>
          )}

          {tab ===
            "🥧chart" && (
            <PermissionChart
              permissions={
                app.permissions
              }
            />
          )}
          {tab === "🔧revoke" && (
  <div
    style={{
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <div
      style={{
        background: "#1e293b",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <h4
        style={{
          color: "#4ade80",
          marginBottom: "8px",
        }}
      >
        🤖 Android
      </h4>

      <p>
        Settings → Apps →
        {app.name} →
        Permissions →
        Disable Location &
        Contacts
      </p>
    </div>

    <div
      style={{
        background: "#1e293b",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <h4
        style={{
          color: "#60a5fa",
          marginBottom: "8px",
        }}
      >
        🍎 iOS
      </h4>

      <p>
        Settings →
        {app.name} →
        Toggle off Location,
        Contacts, Microphone
      </p>
    </div>
  </div>
)}
        </div>
      )}
    </div>
  );
}