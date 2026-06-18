import { useState } from "react";
import ArmorIQCard from "../components/ArmorIQCard";

import ResultCard from "../components/ResultCard";
import AuditLog from "../components/AuditLog";

import { APP_DB } from "../data/appDatabase";

import exportPDF from "../utils/exportReport";

export default function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;

    setLoading(true);

    await new Promise((r) =>
      setTimeout(r, 1200)
    );

    const names = input
      .split(",")
      .map((s) =>
        s.trim().toLowerCase()
      );

    const found = [];

    names.forEach((name) => {
      if (APP_DB[name]) {
        found.push(APP_DB[name]);
      }
    });
    
    if (found.length === 0) {
      alert("❌ App not found");
      setLoading(false);
      return;
    }
    
    setResults(found);
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "80px 0 50px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "900",
              marginBottom: "12px",
              background:
                "linear-gradient(90deg,#4F46E5,#06B6D4)",
              WebkitBackgroundClip:
                "text",
              color: "transparent",
            }}
          >
            ConsentLens
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#cbd5e1",
              marginBottom: "10px",
            }}
          >
            Know What Your Apps Really
            Know About You
          </p>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            You clicked Allow. We show
            the consequences.
          </p>
        </div>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background:
              "rgba(15,23,42,0.7)",
            backdropFilter:
              "blur(12px)",
            border:
              "1px solid rgba(255,255,255,.08)",
            borderRadius: "20px",
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <input
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value
                )
              }
              placeholder="Instagram, WhatsApp, Snapchat"
              style={{
                flex: 1,
                minWidth: "300px",
                padding: "14px",
                borderRadius:
                  "12px",
                border:
                  "1px solid #334155",
                background:
                  "#1e293b",
                color: "white",
                fontSize: "16px",
                boxShadow:
                  "0 0 20px rgba(79,70,229,.15)",
              }}
            />

            <button
              onClick={
                handleAnalyze
              }
              style={{
                padding:
                  "14px 26px",
                borderRadius:
                  "12px",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontWeight:
                  "bold",
                background:
                  "linear-gradient(90deg,#4F46E5,#06B6D4)",
                boxShadow:
                  "0 0 20px rgba(79,70,229,.4)",
              }}
            >
              🔍 Analyze
            </button>
          </div>
        </div>

        

        {loading && (
          <div
            style={{
              textAlign: "center",
              color: "#06B6D4",
              marginBottom: "20px",
            }}
          >
            🔍 Checking Location Access...
            📷 Checking Camera Access...
            🎙️ Checking Microphone Access...
            👥 Checking Contacts...
          </div>
        )}
        
        {results.length > 0 && (
          <>
            <div
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems:
                    "center",
                  marginBottom:
                    "16px",
                }}
              >
                <h2>
                        Analysis Results (
                  {results.length} app
                  {results.length > 1
                    ? "s"
                    : ""}
                  )
                </h2>

                <button
                  onClick={() =>
                    exportPDF(
                      results
                    )
                  }
                        style={{
                    background:
                      "#14b8a6",
                    border: "none",
                    color: "white",
                    padding:
                      "10px 18px",
                    borderRadius:
                      "10px",
                    cursor:
                      "pointer",
                  }}
                >
                  📄 Export Report
                </button>
              </div>

              <AuditLog
                apps={results}
              />

              {results.map(
                (app, i) => (
                  <ResultCard
                    key={i}
                    app={app}
                  />
                )
              )}
            </div>

           
          </>
        )}
        <ArmorIQCard />
      </div>
    </div>
    
  );
}
