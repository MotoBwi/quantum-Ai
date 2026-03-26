import { useEffect, useRef } from "react";

/**
 * RapidaWidget — React wrapper for the Rapida chat widget.
 *
 * Injects window.chatbotConfig and loads the widget script.
 * Works with CDN or local build path.
 */

interface RapidaWidgetProps {
  assistantId: string;
  token: string;
  name?: string;
  logoUrl?: string;
  layout?: "floating" | "docked-right" | "docked-left" | "inline";
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  showLauncher?: boolean;
  theme?: { mode?: "light" | "dark"; color?: string };
  user?: { name: string; user_id?: string; meta?: Record<string, string> };
  apiBase?: string;
  language?: string;
  debug?: boolean;
  /** URL to the widget JS bundle. Defaults to Rapida CDN. */
  scriptSrc?: string;
}

const DEFAULT_CDN = "https://cdn-01.rapida.ai/public/scripts/app.min.js";
const SCRIPT_ID = "rapida-widget-script";

export function RapidaWidget({
  assistantId,
  token,
  name,
  logoUrl,
  layout = "floating",
  position = "bottom-right",
  showLauncher = true,
  theme,
  user,
  apiBase,
  language,
  debug = false,
  scriptSrc = DEFAULT_CDN,
}: RapidaWidgetProps) {
  const mounted = useRef(false);

  useEffect(() => {
    // Set config before script executes
    (window as any).chatbotConfig = {
      assistant_id: assistantId,
      token,
      ...(name && { name }),
      ...(logoUrl && { logo_url: logoUrl }),
      layout,
      position,
      showLauncher,
      ...(theme && { theme }),
      ...(user && { user }),
      ...(apiBase && { api_base: apiBase }),
      ...(language && { language }),
      debug,
    };

    // Inject script only once
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = scriptSrc;
      script.defer = true;
      document.body.appendChild(script);
    }

    mounted.current = true;

    return () => {
      // Cleanup widget DOM on unmount
      document.getElementById("rapida-chat-app")?.remove();
      document.getElementById(SCRIPT_ID)?.remove();
      // Remove docked body classes
      document.body.classList.remove("rpd-body--docked-right", "rpd-body--docked-left");
      mounted.current = false;
    };
  }, [assistantId, token, layout]);

  return null;
}
