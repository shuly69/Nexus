export function Banner() {
    return (
         <div className="h-9 bg-linear-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] flex items-center justify-center relative">
          <div className="flex items-center gap-8 text-white text-xs font-medium">
            <p>Free shipping on orders over $99 — Limited time offer</p>
            <span className="opacity-50">|</span>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-300 rounded-full opacity-90"></span>
              Use code NEXUS10 for 10% off your first order
            </p>
          </div>
          <button className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 text-lg leading-none">
            ×
          </button>
        </div>
    )
}


export function BannerState({label, colorStroke, colorFill, colorText, colorBorder}: {label: string, colorStroke?: string, colorFill?: string, colorText?: string, colorBorder?: string}) {
  return (
    <div>
      <div className={`${colorFill} border ${colorBorder} rounded-full px-4.25 py-2 inline-flex items-center gap-2`}>     
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.919223">
            <path d="M0 4C0 1.79086 1.79086 0 4 0V0C6.20914 0 8 1.79086 8 4V4C8 6.20914 6.20914 8 4 8V8C1.79086 8 0 6.20914 0 4V4Z" fill={colorStroke} />
          </g>
        </svg>
        <span className={`${colorText} text-sm `}>{label}</span>
      </div>
    </div>
  )
}

