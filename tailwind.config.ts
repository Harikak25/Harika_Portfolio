import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0B0B0F", panel: "#121217", chrome: "#1C1C22", accent: "#4F46E5" },
      boxShadow: { mac: "0 10px 30px rgba(0,0,0,0.45)" },
      borderRadius: { mac: "16px" },
    },
  },
  plugins: [],
} satisfies Config;
