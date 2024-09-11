import React from "react";

function ErrorPage({ status, message }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-400  shadow-md">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {/* Error Icon */}
        <div className="text-red-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M9.293 17.293a1 1 0 001.414 0l3.293-3.293a1 1 0 000-1.414l-3.293-3.293a1 1 0 00-1.414 0l-3.293 3.293a1 1 0 000 1.414l3.293 3.293z"
            />
          </svg>
        </div>
        {/* Error Message */}
        <h1 className="text-red-600 text-3xl font-bold mb-4">{message}</h1>
        {/* Status Code */}
        <p className="text-gray-700 text-xl font-semibold">{status}</p>
        {/* Back Button */}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
