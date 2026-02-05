"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Page အလိုက် အရောင် Scheme များ
const themes: Record<string, { bg: string; fg: string }> = {
  "/": { bg: "#000000", fg: "#DBFF66" },         
  "/services": { bg: "#000000", fg: "#00E4FF" },  
  "/cases": { bg: "#000000", fg: "#7038FF" },     
  "/contact": { bg: "#0052cc", fg: "#0060EE" },   
};

function findThemeForPath(pathname: string | null) {
  if (!pathname) return themes["/"];

  // Try exact match first
  if (themes[pathname]) return themes[pathname];

  // Fallback to prefix matching so nested routes inherit parent route theme
  const keys = Object.keys(themes).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (pathname.startsWith(key)) return themes[key];
  }

  return themes["/"];
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const currentTheme = findThemeForPath(pathname);

    // Update CSS variables. Set both the project's existing names and
    // the ones used elsewhere to keep compatibility.
    document.documentElement.style.setProperty("--bg-color", currentTheme.bg);
    document.documentElement.style.setProperty("--fg-color", currentTheme.fg);

    // globals.css expects --background / --foreground
    document.documentElement.style.setProperty("--background", currentTheme.bg);
    document.documentElement.style.setProperty("--foreground", currentTheme.fg);

    // Some places use different names, add these too for safety
    document.documentElement.style.setProperty("--color-background", currentTheme.bg);
    document.documentElement.style.setProperty("--color-foreground", currentTheme.fg);
  }, [pathname]);

  return <>{children}</>;
}