
export function EmptyFavouriteList() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-24 h-24 flex items-center justify-center rounded-full bg-indigo-50 mb-6">
        <svg
          className="w-12 h-12 text-indigo-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z"
          />
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Your favourite list is empty
      </h3>

      <p className="text-gray-500 max-w-sm mb-6">
        Start exploring our catalog and add items to your favourites.
      </p>

      <a
        href="/phones"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Browse phones
      </a>
    </div>
  );
}

