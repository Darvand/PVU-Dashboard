import { probabilityWeatherEventByElement } from "../constants/weathers";
import { Events, Plant, Weather } from "../types";

const ACTUAL_WEATHER: Weather = "Winter";
const WEATHER_BEFORE_YESTERDAY: Events = "Winter Storm";
const WEATHER_YESTERDAY: Events = "Magnetic Reconnection";
const NO_EVENT_CASE = 1;

const weatherEvents = probabilityWeatherEventByElement[ACTUAL_WEATHER];

type WeatherEvents = keyof typeof weatherEvents;
const eventsToConsider = (Object.keys(weatherEvents) as WeatherEvents[]).filter(
  (event) => event !== WEATHER_BEFORE_YESTERDAY && event !== WEATHER_YESTERDAY
);

export const useGreenhouseProbability = (plant: Plant) => {
  const inFavorEvents = eventsToConsider.filter(
    (event) => weatherEvents[event][plant.element] > 0
  ).length;
  const againstEvents = eventsToConsider.filter(
    (event) => weatherEvents[event][plant.element] < 0
  ).length;
  const neutralEvents =
    eventsToConsider.filter(
      (event) => weatherEvents[event][plant.element] === 0
    ).length + NO_EVENT_CASE;
  const totalEvents = inFavorEvents + againstEvents + neutralEvents;
  return {
    inFavorProbability: inFavorEvents / totalEvents,
    againstProbability: againstEvents / totalEvents,
    neutralProbability: neutralEvents / totalEvents,
  };
};
