import { svgPaths } from "@/shared/config/svg";

interface LogoProps {
    color?: string;
}

export function Logo({ color = "text-gray-900" }: LogoProps) {
    return (
        <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p22d1b980} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <span className={`text-xl font-extrabold ${color}`}>NEXUS</span>
        </a>
    )
}