'use client';
import { COLOR_MAP } from "@/shared/config/phone";

const normalize = (str: string) => str.trim().toLowerCase();

export function ColorChoice({ colors, color, setColor } : { colors: { name: string; stock: number }[], color: string | null, setColor: React.Dispatch<React.SetStateAction<string|null>>}) {
   
    const uniqueColors = Array.from(
  new Map(colors.map(c => [c.name.toLowerCase(), c])).values()
);
    return (
        <ul className="flex gap-2">
      {uniqueColors.map((c) => {
        const normalized = normalize(c.name);
        const isDisabled = c.stock === 0;
        const isSelected = color === normalized;

        return (
          <li
            key={normalized}
            className={`
              w-4 h-4 rounded-full transition-all duration-300 ease-out
              ${isDisabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:scale-125 hover:shadow-md hover:ring-2 hover:ring-offset-1"}
              ${normalized === "white" ? "border border-gray-300" : "border-none"}
              ${isSelected ? "ring-2 ring-offset-1" : ""}
            `}
            style={{
              backgroundColor: COLOR_MAP[normalized] ?? "#ccc"
            }}
            onClick={() => {
              if (isDisabled) return; // ❌ нельзя выбрать цвет без стока

              setColor(prev =>
                prev === normalized ? null : normalized // повторный клик снимает выделение
              );
            }}
          ></li>
);
      })}
    </ul>


    );

}