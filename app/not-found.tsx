import Link from "next/link";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center sm:max-w-lg mx-auto my-12 max-h-[100vh]">
      <h1 className="mb-4 text-4xl sm:text-6xl font-semibold text-red-500">
        404
      </h1>
      <p className="mb-4 text-lg sm:text-xl text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </div>
      <p className="mt-4 text-sm sm:text-base text-gray-600">
        Let's get you back{" "}
        <Link href="/" className="text-blue-500">
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFoundPage;
