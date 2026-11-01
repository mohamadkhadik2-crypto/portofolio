import { Github, Instagram, Figma, Music2, Headphones, Link as LinkIcon } from "lucide-react";
export function SocialIcon({ name, size = 18 }: { name: string; size?: number }) {
  const p = { size, "aria-hidden": true } as const;
  switch (name) {
    case "github": return <Github {...p} />;
    case "instagram": return <Instagram {...p} />;
    case "tiktok": return <Music2 {...p} />;
    case "figma": return <Figma {...p} />;
    case "spotify": return <Headphones {...p} />;
    default: return <LinkIcon {...p} />;
  }
}
