"use client";
import { useRouter } from "next/navigation";

export function Search() {
    const router = useRouter();

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get("q");
    router.push(`/catalog?q=${encodeURIComponent(query as string)}`);
  };

    return (
        <form onSubmit={onSubmit}>
            <div className="relative">
                <input
                    type="text"
                    name="q"
                    placeholder="Search products..."
                    className="w-64 h-10 px-4 pr-10 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="cursor-pointer w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2">
<svg  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
                </button>
                
            </div>
        </form>
        
    )
}