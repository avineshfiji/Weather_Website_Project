export default function Footer() {
  return (
    <footer className="w-full px-10 lg:px-40 py-10">
      <div className="glass-effect rounded-xl p-1 flex items-center overflow-hidden h-32 relative group cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity footer_bg"
          data-alt="Satellite map view of city landscape"
          data-location="London"
        ></div>
        <div className="relative z-10 w-full flex items-center justify-between px-8">
          <div>
            <h4 className="text-lg font-bold">Weather Radar</h4>
            <p className="text-white/60 text-sm">
              View interactive precipitation map
            </p>
          </div>
          <span className="material-symbols-outlined text-primary">
            arrow_forward_ios
          </span>
        </div>
      </div>
      <div className="mt-8 text-center text-white/30 text-xs">
        © 2024 WeatherWise Dashboard. All data provided for demonstration
        purposes.
      </div>
    </footer>
  );
}
