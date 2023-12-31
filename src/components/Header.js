import React from "react";

function Header () {
    return (
        <div className="bg-blue-600 mb-10">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white sm:items-center md:px-8">
          <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
            <div className="flex-none p-1.5 px-4 rounded-full bg-green-800 flex items-center justify-center font-medium text-sm">
              Alert
            </div>
            <p className="font-medium p-2">
              This tool, open to all, facilitates tracking your favorite
              personalities on Twitter.{" "}
              <a
                href="https://twitter.com/99promitsaha"
                target="_blank"
                className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1"
              >
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
}

export default Header;