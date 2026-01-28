import { useState } from "react";
import { useUnit } from "../store/weatherStore.ts";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [selection, setSelection] = useState("Celsius");
  // const Unit = useUnit((state) => state.Unit);
  const setUnit = useUnit((state) => state.setUnit);
  const navigate = useNavigate();

  function HandleFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (selection === "Celsius") {
      setUnit("C");
    } else {
      setUnit("F");
    }
    navigate("/");
  }
  function HandleSelection(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelection(e.target.value);
  }
  return (
    <>
      <main className="flex-1 max-w-300 mx-auto w-full px-4 py-12 flex gap-8">
        <aside className="w-50 shrink-0">
          <nav className="flex flex-col space-y-2">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 transition-all nav-item-active"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="font-medium">General</span>
            </a>
          </nav>
        </aside>
        <form
          className="flex-1 space-y-8"
          onSubmit={(event) => HandleFormSubmit(event)}
        >
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Settings</h1>
            <p className="text-white/60">
              Manage your application preferences and weather units.
            </p>
          </div>
          <section className="glass-effect rounded-2xl p-8 space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2b6cee]">
                straighten
              </span>
              <span className="text-white">Measurement Units</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/70 block">
                  Temperature Units
                </label>
                <div className="relative">
                  <select
                    value={selection}
                    onChange={(event) => HandleSelection(event)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 appearance-none  focus:ring-[#2b6cee] focus:border-[#2b6cee] outline-none text-white duration-200"
                  >
                    <option className="bg-[#2b6cee]/70" label="Celsius">
                      Celsius (°C)
                    </option>
                    <option className="bg-[#2b6cee]/70" label="Fahrenheit">
                      Fahrenheit (°F)
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-3.5 pointer-events-none text-white/40">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/70 block">
                  Wind Speed
                </label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 appearance-none focus:ring-[#2b6cee] focus:border-[#2b6cee] outline-none text-white duration-200">
                    <option className="bg-[#2b6cee]/70">km/h</option>
                    <option className="bg-[#2b6cee]/70">mph</option>
                    <option className="bg-[#2b6cee]/70">m/s</option>
                    <option className="bg-[#2b6cee]/70">knots</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-3.5 pointer-events-none text-white/40">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="glass-effect rounded-2xl p-8 space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[#2b6cee]">
                location_on
              </span>
              <span className="text-white">Location Management</span>
            </h3>
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/70 block">
                  Default Location
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <span className="material-symbols-outlined absolute left-4 top-3 text-white/40">
                      search
                    </span>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:ring-[#2b6cee] focus:border-[#2b6cee] outline-none text-white"
                      placeholder="Search city..."
                      type="text"
                      value="London, United Kingdom"
                    />
                  </div>
                  <button className="bg-[#2b6cee] hover:bg-[#2b6cee]/90 px-6 py-3 rounded-xl font-semibold transition-all text-white cursor-pointer">
                    Update
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm font-medium text-white/80 mb-4">
                  Manage Saved Locations
                </p>
                <div className="space-y-2"></div>
              </div>
            </div>
          </section> */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              to="/"
              className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-medium text-white"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-[#2b6cee] hover:bg-[#2b6cee]/90 transition-all font-bold text-white cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Settings;
