export function StarRatingStatic({ value } : { value : number }) {
  return (
    <div className="flex gap-px text-[12px]">
      {[1,2,3,4,5].map((star) => {
        const fill = Math.min(Math.max(value - (star - 1), 0), 1) * 100;

        return (
          <div key={star} className="relative w-3 h-2.5">
            {/* Empty star (gray background) */}
            <div className="absolute inset-0 text-gray-300">
              ★
            </div>

            {/* Filled portion — width driven by the fractional value */}
            <div
              className="absolute inset-0 text-yellow-400 overflow-hidden"
              style={{ width: `${fill}%` }}
            >
              ★
            </div>
          </div>
        );
      })}
    </div>
  );
}

