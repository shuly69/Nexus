
export function Specifications({product} : {product : { [key: string]: string }}) {
    return (
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-x divide-gray-200">
            {Object.entries(product.specs).map(([key, value]) => {
              const formattedValue = Array.isArray(value)
                ? value.join(", ")
                : value;

              return (
                <div key={key} className="flex justify-between py-3 px-4">
                  <span className="text-sm text-gray-500 capitalize">{key}</span>
                  <span className="text-sm text-gray-900 font-medium">{formattedValue}</span>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    )
}