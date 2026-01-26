export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-10 py-4 lg:px-40">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            WeatherWise
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="hidden md:flex items-center gap-9">
            <a
              className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
              href="#"
            >
              Home
            </a>
            <a
              className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
              href="#"
            >
              Maps
            </a>
            <a
              className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
              href="#"
            >
              News
            </a>
            <a
              className="text-white/80 hover:text-white text-sm font-medium leading-normal transition-colors"
              href="#"
            >
              Settings
            </a>
          </div>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-white/10 hover:bg-white/20 text-white transition-all">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>
    </>
  );
}
