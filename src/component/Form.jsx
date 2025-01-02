import React from "react";

export const Form = ({ TodoAdd }) => {
  return (
    <div className="w-full">
      <form
        className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center"
        onSubmit={TodoAdd}
      >
        <input
          className="px-4 py-2 border border-sky-500 rounded-lg text-black flex-1 focus:outline-none focus:ring focus:ring-sky-300 w-full sm:w-auto"
          type="text"
          name="toName"
          placeholder="Enter Todo..."
        />
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg text-lg hover:bg-gray-800 transition-all w-full sm:w-auto"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};
