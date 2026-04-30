interface SupportCardProps {
    title: string;
    description: string;
    svg: any;
}

export function SupportCard({ title, description, svg }: SupportCardProps) {
    return (
        <article className="max-w-71.5 h-58.5 bg-white rounded-2xl border border-[#F3F4F6] p-7 ">
            <div className="w-14 h-14 bg-[#EEF2FF] flex items-center justify-center rounded-full shadow-[0_0_30px_0_rgba(99,102,241,0.2)] mx-auto">
                {svg}
            </div>
            <h4 className="text-base text-[#111827] font-extrabold mt-5 mb-2 text-center">{title}</h4>
            <p className="text-[#9CA3AF] text-sm max-w-56.5 text-center">{description}</p>
        </article>
    )
}