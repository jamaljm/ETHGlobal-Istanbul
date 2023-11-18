import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-col bg-gray-700">
      <header className="">
        <div className="py-3 bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between">
              <div className="block -m-2 lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-white bg-gray-900 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="flex-shrink-0 ml-4 mr-4 lg:ml-0">
                <a href="#" title="" className="flex items-center">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="/logo.png"
                    alt=""
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="/logo.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="flex-1 max-w-xs ml-auto lg:hidden">
                <label htmlFor="" className="sr-only">
                  {" "}
                  Search{" "}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>

                  <input
                    type="search"
                    name=""
                    id=""
                    className="block w-full py-2 pl-10 text-white placeholder-gray-400 bg-gray-900 border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search here"
                  />
                </div>
              </div>

              <div className="flex items-center ml-4 lg:ml-0">
                <button
                  type="button"
                  className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
                  id="options-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="flex items-center justify-between w-full">
                    <span className="flex items-center justify-between min-w-0 space-x-3">
                      <img
                        className="flex-shrink-0 object-cover bg-gray-700 rounded-full w-7 h-7"
                        src="https://img.icons8.com/parakeet/48/trophy.png"
                        alt=""
                      />

                      <span className="flex-1 hidden min-w-0 md:flex">
                        <span className="text-sm font-medium text-white truncate">
                          {" "}
                          Total XP{" "}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden py-3 bg-white border-b border-gray-200 lg:block">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-12">
                <h2 className="text-xl font-bold  "> Sports | Football</h2>
              </div>

              <div className="flex-1 hidden max-w-xs ml-auto lg:block"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-x-hidden">
        <main>
          <div className="py-6 ">
            <div className="px-4 mx-auto max-w-7xl">
              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-9">
                <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                  <img src="banner.png" className="w-full" alt="" />
                </div>
                <div className="overflow-hidden bg-white border border-gray-200 lg:col-span-4 rounded-xl">
                  <img src="banner.png" className="w-full" alt="" />
                </div>

                <div className="lg:col-span-9">
                  <div className="flex items-center gap-2">
                    <Link
                      href="/dashboard"
                      title=""
                      className="flex text-white hover:text-black hover:bg-white/90  py-2 px-12 rounded-xl"
                    >
                      Upcoming
                    </Link>
                    <Link
                      href="/dashboard-current"
                      title=""
                      className="flex text-black bg-white/90  py-2 px-12 rounded-xl"
                    >
                      Current
                    </Link>
                    <Link
                      href="/dashboard-past"
                      title=""
                      className="flex text-white hover:text-black hover:bg-white/90   py-2 px-12 rounded-xl"
                    >
                      Past
                    </Link>
                  </div>

                  <div className="flex flex-col mt-4">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-xl">
                          <table className="min-w-full bg-white lg:divide-y lg:divide-gray-200">
                            <thead className="hidden lg:table-header-group">
                              <tr>
                                <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                  <div className="flex items-center">
                                    Football
                                  </div>
                                </th>

                                <th className="py-3.5 px-4 text-left sm:px-6 text-sm whitespace-nowrap font-medium text-gray-500">
                                  <div className="flex items-center">
                                    Action
                                  </div>
                                </th>

                                <th className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                  <span className="sr-only"> Actions </span>
                                </th>
                              </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                              <tr>
                                <td className="px-4 py-4 text-sm font-bold text-gray-900 sm:px-6 whitespace-nowrap">
                                  <div className="inline-flex items-center">
                                    <img
                                      className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
                                      src="data:image/png;base64,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"
                                      alt=""
                                    />
                                    FC Barcelona vs
                                  </div>
                                  <div className="inline-flex ml-4 items-center">
                                    <img
                                      className="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full"
                                      src="data:image/png;base64,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"
                                      alt=""
                                    />
                                    Real Madrid
                                  </div>
                                </td>

                                <td className="hidden px-4 py-4 text-sm font-medium text-gray-900 sm:px-6 lg:table-cell whitespace-nowrap">
                                  <button className="py-2 px-12 bg-blue-600 text-white rounded-xl">
                                    Bet Now
                                  </button>{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
