import React, { useState } from "react";
import { RapidaWidget } from "./RapidaWidget";

type Layout = "floating" | "docked-right" | "docked-left";

/**
 * Example React app showing all widget layout modes.
 *
 * Replace assistant_id and token with your own credentials.
 * Set scriptSrc to load from local build during development.
 */
export function App() {
  const [layout, setLayout] = useState<Layout>("floating");

  // Use local build for testing — switch to CDN for production
  const localScript = "../../../../sdks/react-widget/dist/app.min.js";

  return (
    <div>
      <h1>Rapida Widget — React Example</h1>
      <p style={{ color: "#525252", lineHeight: 1.6 }}>
        This example loads the Rapida chat widget as a React component.
        Pick a layout mode below to see the different integration styles.
      </p>

      {/* Layout picker */}
      <div style={{ display: "flex", gap: 8, margin: "24px 0" }}>
        {(["floating", "docked-right", "docked-left"] as Layout[]).map((l) => (
          <button
            key={l}
            onClick={() => setLayout(l)}
            style={{
              padding: "8px 16px",
              border: `1px solid ${layout === l ? "#0f62fe" : "#e0e0e0"}`,
              background: layout === l ? "#0f62fe" : "#fff",
              color: layout === l ? "#fff" : "#161616",
              cursor: "pointer",
              fontFamily: "IBM Plex Sans, sans-serif",
              fontSize: 14,
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <p style={{ color: "#6f6f6f", fontSize: 13 }}>
        Current layout: <strong>{layout}</strong>
      </p>

      {/* Widget — key forces remount on layout change */}
      <RapidaWidget
        key={layout}
        assistantId="YOUR_ASSISTANT_ID"
        token="YOUR_API_KEY"
        layout={layout}
        position="bottom-right"
        theme={{ mode: "light" }}
        user={{ name: "React User", user_id: "react-demo-001" }}
        scriptSrc={localScript}
        debug
      />
    </div>
  );
}
