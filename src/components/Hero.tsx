import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="min-h-screen">
        <div className="py-4 bg-black/90 sm:py-6" x-data="{expanded: false}">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="shrink-0">
                <a href="#" title="" className="flex">
                  <img className="w-auto h-9" src="/logo.png" alt="" />
                </a>
              </div>

              <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="/login"
                  title=""
                  className="relative font-body inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  {" "}
                  Start Betting Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
              <div>
                <h1 className="text-4xl font-normal font-body2 text-white sm:text-5xl lg:text-5xl xl:text-6xl">
                  Decentralize the Game, Maximize Your Win.
                </h1>
                <p className="mt-4 text-lg font-body font-normal text-gray-400 sm:mt-8">
                  Bet smarter, win bigger. Our decentralized platform puts you
                  in control. Elevate your game, embrace the future of sports
                  betting.
                </p>

                <Link
                  href="/login"
                  className="inline-flex font-body items-center justify-center w-full px-5 py-5 mt-6 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-600 via-purple-400 to-purple-900 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                >
                  Login Now{" "}
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0">
                  <svg
                    className="blur-3xl filter opacity-70"
                    width="444"
                    height="536"
                    viewBox="0 0 444 536"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                      fill="url(#c)"
                    />
                    <defs>
                      <linearGradient
                        id="c"
                        x1="82.7339"
                        y1="550.792"
                        x2="-39.945"
                        y2="118.965"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" />
                        <stop offset="100%" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full opacity-50"
                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                    alt=""
                  />
                </div>

                <img
                  className="relative w-full rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500  p-1 mx-auto"
                  src="/bg3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
