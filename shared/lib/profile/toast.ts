export function showToast(message: string, type: "success" | "info") {
  const existingToast = document.querySelector(".custom-toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = `
    custom-toast fixed bottom-6 left-1/2 -translate-x-1/2 z-50
    px-5 py-2.5 rounded-full shadow-lg text-sm font-medium
    backdrop-blur-md flex items-center gap-2
    animate-in fade-in slide-in-from-bottom-5 duration-200
    ${type === "success" ? "bg-emerald-600 text-white" : "bg-slate-800 text-white"}
  `;

  toast.innerHTML = `
    <i class="fas ${type === "success" ? "fa-check-circle" : "fa-info-circle"}"></i>
    ${message}
  `;

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2200);
}
