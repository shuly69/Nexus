interface HeroButtonProps {
    children: React.ReactNode;
    indigo?: boolean;
}


export function HeroButton({children, indigo = true} : HeroButtonProps) {
    return (
        <button className={`cursor-pointer px-6 py-3.5 ${indigo ? 'bg-[#4F46E5] hover:bg-indigo-700 ' : 'bg-white/10 hover:bg-white/30 border border-white/20'} text-sm text-white font-bold rounded-2xl transition-colors duration-300 `}>
            {children}
        </button>
                
    )
}