import { Children } from "react";

export function LinkList({ children, label }: { children: React.ReactNode, label: string }) {
    return (
        <nav aria-label={label}>
              <h3 className="font-bold text-sm mb-4">{label}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                { children }
              </ul>
            </nav>
    )
}
