import { phoneStatistics, statistics, statisticsPolicy } from "@/shared/config/statistic"




export function HeroStatistic() {
    return (
        <ul className="flex gap-8 ">
            {statistics.map(({ value, label, id }) => (
                <li key={id} className={`flex flex-col ${label === "4.9" ? "border-x border-white/10 px-8" : ""}`}>
                    <h3 className="text-[28px] font-bold text-white">{label}</h3>
                    <p className="flex items-center gap-1 text-sm text-[#6B7280] ">{value}</p>
                </li>
            ))}

        </ul>
    )
}

export function HeroStatisticPolicy() {
  return (
    <ul className="flex gap-6">
      {statisticsPolicy.map(({ value, label, id }) => (
        <li className="flex gap-2 items-center text-[#9CA3AF]" key={id}>{value} <span>{label}</span></li>
      ))}
    </ul>
  )
}

export function HeroPhoneStatistic() {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {phoneStatistics.map(({ id, label, value }) => (
        <li key={id} className="p-3 flex flex-col  max-w-58.5 bg-white/5 border border-white/10 rounded-xl">
          <span className="text-[12px] text-[#9CA3AF]">{label}</span>
          <span className="text-sm font-extrabold text-white">{value}</span>
        </li>
      ))}
    </ul>
  )
}