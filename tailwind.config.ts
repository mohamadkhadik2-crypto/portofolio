import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#050816", navy: "#0a1128", brand: "#3b82f6", sky: "#38bdf8" } } },
  plugins: [],
};
export default config;
