export function Modal({ children, onClose, open }: { children: React.ReactNode, onClose: () => void, open: boolean }) {
    if (!open) return null;
    return (
       <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>

        {children}
      </div>
    </div>



    )
}