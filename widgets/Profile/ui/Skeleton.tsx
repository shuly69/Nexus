
export function LoadingSkeleton() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30 py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="animate-pulse">
          <div className="h-10 bg-slate-200 rounded-lg w-48 mb-8" />
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-32 bg-linear-to-r from-indigo-400 to-purple-500" />
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-6 bg-slate-200 rounded w-32" />
                  <div className="h-12 bg-slate-100 rounded-xl" />
                  <div className="h-12 bg-slate-100 rounded-xl" />
                  <div className="h-12 bg-slate-100 rounded-xl" />
                  <div className="h-20 bg-slate-100 rounded-xl" />
                </div>
                <div className="space-y-4">
                  <div className="h-6 bg-slate-200 rounded w-32" />
                  <div className="h-16 bg-slate-100 rounded-xl" />
                  <div className="h-16 bg-slate-100 rounded-xl" />
                  <div className="h-16 bg-slate-100 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}