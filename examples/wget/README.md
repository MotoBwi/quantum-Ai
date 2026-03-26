# Rapida Chat Widget Examples

Two ways to integrate the Rapida chat widget into your project:

| Method | Folder | Best for |
|--------|--------|----------|
| **HTML / JS embed** | `html/` | Any website — just add a `<script>` tag |
| **React dependency** | `react/` | React apps — full component-level control |

---

## 1. HTML / JS Embed (`html/`)

Drop-in integration. No build step needed.

```html
<script>
  window.chatbotConfig = {
    assistant_id: "YOUR_ASSISTANT_ID",
    token: "YOUR_API_KEY",
  };
</script>
<script defer src="https://cdn-01.rapida.ai/public/scripts/app.min.js"></script>
```

### Examples

| File | Description |
|------|-------------|
| `floating.html` | Floating panel with launcher FAB (default) |
| `docked-right.html` | Panel docked to right side, pushes page content |
| `docked-left.html` | Panel docked to left side, pushes page content |
| `custom-theme.html` | Custom colors, dark mode, CSS variable overrides |
| `local-dev.html` | Loads from local build for development |

### Running locally

```bash
# 1. Build the widget
cd sdks/react-widget
npm install && npm run build

# 2. Serve examples (file:// protocol won't work)
cd examples/react-widget/html
python3 -m http.server 8000

# 3. Open
open http://localhost:8000/local-dev.html
```

---

## 2. React Dependency (`react/`)

Install as an npm package for full React integration with props, hooks, and component-level customization.

```bash
cd examples/react-widget/react
npm install
npm start
# Opens http://localhost:3000
```

See `react/src/App.tsx` for usage examples covering all layout modes.

---

## Configuration Reference

```js
window.chatbotConfig = {
  // Required
  assistant_id: "...",
  token: "...",

  // Display
  name: "My Assistant",                     // header name (falls back to deployment name)
  logo_url: "https://example.com/logo.png", // header logo (falls back to text initial)

  // Layout
  layout: "floating",         // "floating" | "docked-right" | "docked-left" | "inline"
  position: "bottom-right",   // "bottom-right" | "bottom-left" | "top-right" | "top-left"
  showLauncher: true,          // hide to use your own trigger (floating only)

  // Theme
  theme: {
    mode: "light",             // "light" | "dark"
  },

  // User identity
  user: {
    name: "Jane Doe",
    user_id: "user-123",
    meta: { plan: "pro" },
  },

  // Advanced
  api_base: "https://...",     // custom API endpoint
  language: "en",              // BCP 47 language tag
  debug: false,                // verbose console logging
};
```

### CSS Variable Overrides

```css
:root {
  --rpd-primary: #198038;        /* brand color */
  --rpd-panel-width: 450px;      /* panel width */
  --rpd-border-radius: 8px;      /* global border radius */
  --rpd-font-sans: 'Inter', sans-serif;
}
```

See `sdks/react-widget/src/styles/index.css` for the full list of `--rpd-*` tokens.

---

## Getting Your Credentials

1. Sign in to the [Rapida Console](https://app.rapida.ai)
2. Create or open a project -> copy your **API Key**
3. Open **Assistants** -> copy your **Assistant ID**
