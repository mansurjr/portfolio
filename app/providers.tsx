  "use client";

import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Analytics />
      {children}
    </ThemeProvider>
  );
}
