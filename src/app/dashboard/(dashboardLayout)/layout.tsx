import Link from "next/link";

const layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-gray-800 transform `}
        >
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">Tennis Club</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <Link
                href={"/"}
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                href={"/dashboard/members"}
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                Members
              </Link>
              <Link
                href={"/dashboard/add"}
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                Add
              </Link>
              <Link
                href={"/dashboard/update"}
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                Update
              </Link>
              <Link
                href={"/dashboard/delete"}
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                Delete
              </Link>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <input
                className="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
