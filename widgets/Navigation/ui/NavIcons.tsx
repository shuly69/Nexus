import { HeartIcon } from "@/shared/ui/Icon/Icon";

export function Icons({children}: {children: React.ReactNode}) {
    return (
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition cursor-pointer">
            {children}
        </button>
    )
}