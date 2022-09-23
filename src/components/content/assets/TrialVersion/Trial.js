import Background from "./background.jpg";
import React, { useState } from "react";

const api = {
  key: "3366f2d356c57879cd9e0e8d01648f97",
  base: "https://api.openweathermap.org/data/2.5/",
  langage: "fr",
};

function Trial() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [darkToggle, setDarkToggle] = React.useState(false)

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${api.base}weather?q=${query}&APPID=${api.key}&units=metric&lang=${api.langage}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="w-full h-full"
    >
      <main>
        <div className={darkToggle?"dark":''}>
        <div class="grid grid-rows-3 grid-flow-col h-[1000px]">
          <div class="row-span-3">
            <div className="flex justify-center my-96 gap-8 text-white text-center text-4xl md:text-6xl">
              {typeof weather.main != "undefined" ? (
                <ul>
                  <li>
                    {weather.name}, {weather.sys.country}
                  </li>
                  <li>{Math.round(weather.main.temp)}°</li>
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>

          <div class="row-span-1">
            <div class="flex rounded-bl-lg bg-black opacity-70 dark:bg-amber-50 dark:opacity-100">
              <div class="flex-initial ml-auto py-2">
                <label for="ville" class="sr-only">
                  Renseigner une ville
                </label>
                <input
                  type="text"
                  class="form-control text-white dark:text-black text-lg appearance-none border-0 border-b border-green-500 bg-transparent focus:border-green-800 focus:outline-none focus:ring-0"
                  placeholder="Renseigner une ville"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
                />
                <button
                  type="button"
                  onClick={() => setDarkToggle(!darkToggle)}
                  class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Light Mode
                </button>
              </div>
            </div>
          </div>

          {typeof weather.main != "undefined" ? (
            <div class="row-span-1">
              <div class="border rounded-lg border-black bg-gradient-to-r from-black to-green-800 bg-opacity-90 dark:from-amber-100 dark:bg-amber-50 text-white dark:text-black">
                <div class="flex flex-col">
                  <div class="flex flex-row">
                    <img
                      src={
                        "http://openweathermap.org/img/w/" +
                        weather.weather[0].icon +
                        ".png"
                      }
                      alt=""
                      className="w-24"
                    />
                    <strong>
                      <p class="text-3xl uppercase mt-7 tracking-widest">
                        {weather.weather[0].description}
                      </p>
                    </strong>
                    <div class="ml-auto">
                      <div class="clock">
                        <div class="outer-clock-face">
                          <div class="marking marking-one"></div>
                          <div class="marking marking-two"></div>
                          <div class="marking marking-three"></div>
                          <div class="marking marking-four"></div>
                        </div>
                        <div class="inner-clock-face">
                          <div class="hand" id="dmc"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <strong>
                      <p class="text-2xl italic appearance-none border-0 border-b py-2 border-green-500">
                        Température
                      </p>
                    </strong>
                    <ul className="text-xl py-4">
                      <li className="pb-2">
                        Maximum : {Math.round(weather.main.temp_max)}°c
                      </li>
                      <li className="pb-2">
                        Minimum : {Math.round(weather.main.temp_min)}°c
                      </li>
                      <li className="pb-2">
                        Ressenti : {Math.round(weather.main.feels_like)}°c
                      </li>
                    </ul>
                  </div>
                  <div>
                    <strong>
                      <p class="text-2xl italic appearance-none border-0 border-b py-2 border-green-500">
                        Détails
                      </p>
                    </strong>
                    <ul className="text-xl py-4">
                      <li className="pb-2">
                        Humudité : {weather.main.humidity} %
                      </li>
                      <li className="pb-2">Vent : {weather.wind.speed} km/h</li>
                      <li className="pb-2">
                        Dégrès Vent : {weather.main.humidity} °
                      </li>
                    </ul>
                  </div>
                  <div>
                    <strong>
                      <p class="text-2xl italic appearance-none border-0 border-b py-2 border-green-500">
                        S U N
                      </p>
                    </strong>
                    <div class="grid grid-rows-3">
                      <div class="pb-4 row-start-2 row-span-2 text-center">
                        <p class="text-3xl">☀️</p>
                        <span class="weather-sunrise text-xl italic">
                          {new Date(
                            weather.sys.sunrise * 1000
                          ).toLocaleTimeString("fr-FR", { timeStyle: "short" })}
                        </span>
                      </div>
                      <div class="row-start-2 row-span-2 text-center">
                        <p class="text-3xl">🌑</p>
                        <span class="weather-sunset text-xl italic">
                          {new Date(
                            weather.sys.sunset * 1000
                          ).toLocaleTimeString("fr-FR", { timeStyle: "short" })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        </div>
      </main>
    </div>
  );
}

export default Trial;
