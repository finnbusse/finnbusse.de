import type { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl font-semibold tracking-tight">{children}</h1>;
}
