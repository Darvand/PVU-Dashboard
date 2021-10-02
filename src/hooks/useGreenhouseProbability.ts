import { probabilityWeatherEventByElement } from "../constants/weathers";
import { Events, Plant, Weather } from "../types";

// const ACTUAL_WEATHER: Weather = "Winter";
const ACTUAL_WEATHER: Weather = "Springer";
// const EVENT_YESTERDAY: Events = "Magnetic Reconnection";
// const EVENT_YESTERDAY: Events = "Coronal Mass Ejection";
// const EVENT_YESTERDAY: Events = "Solar Flares";
// const EVENT_YESTERDAY: Events = "Cold Wave";
// const EVENT_TODAY: Events = "Earthquake";
// const EVENT_YESTERDAY: Events = "Hurricanes";
// const EVENT_YESTERDAY: Events = "Volcano";
// const EVENT_YESTERDAY: Events = "Iron Rain";
// const EVENT_YESTERDAY: Events = "Sunny";
// const EVENT_YESTERDAY: Events = "Locusts Swarm";
const EVENT_YESTERDAY: Events = "Malaria";
const EVENT_TODAY: Events = "Iron Rain";

const weatherEvents = probabilityWeatherEventByElement[ACTUAL_WEATHER];

type WeatherEvents = keyof typeof weatherEvents;
const eventsToConsider = (Object.keys(weatherEvents) as WeatherEvents[]).filter(
  (event) => event !== EVENT_TODAY && event !== EVENT_YESTERDAY
);

interface EventProbability {
  le: number;
  probability: number;
}

interface TotalProbabilities {
  favor: number;
  against: number;
  neutral: number;
}

interface GreenhouseProbability {
  eventProbabilities: Record<WeatherEvents, EventProbability>;
  totalProbabilities: TotalProbabilities;
  eventToday: WeatherEvents;
  actualWeather: Weather;
}

// const EVENTS_THIS_WEATHER: WeatherEvents[] = [
//   "Snowy",
//   "Magnetic Reconnection",
//   "Coronal Mass Ejection",
//   "Solar Flares",
//   "Cold Wave",
//   "Earthquake",
// ];
const EVENTS_THIS_WEATHER: WeatherEvents[] = [
  "Hurricanes",
  "Volcano",
  "Iron Rain",
  "Sunny",
  "Locusts Swarm",
  "Malaria",
  "Iron Rain",
];

const calculateProbability = (event: WeatherEvents): number => {
  if (EVENTS_THIS_WEATHER.length === 0) {
    return 1 / Object.keys(weatherEvents).length;
  }
  if (EVENTS_THIS_WEATHER.length === 1) {
    if (
      EVENTS_THIS_WEATHER.some((eventThisWeather) => eventThisWeather === event)
    ) {
      return 0;
    }
    return (
      ((1 / (Object.keys(weatherEvents).length - 1)) * 1) /
      Object.keys(weatherEvents).length
    );
  }
  return 0;
};

export const useGreenhouseProbability = (
  plant: Plant
): GreenhouseProbability => {
  const eventProbabilities = eventsToConsider.reduce((events, event) => {
    const leByHours = plant.production.le / plant.production.hours;
    const leByDay = leByHours * 24;
    const probability = {
      le: weatherEvents[event][plant.element] * leByDay,
      probability: 1 / Object.keys(eventsToConsider).length,
    };
    const newEvents = { ...events, [event]: probability };
    return newEvents;
  }, {} as Record<WeatherEvents, EventProbability>);
  const inFavorEvents = eventsToConsider.filter(
    (event) => weatherEvents[event][plant.element] > 0
  ).length;
  const againstEvents = eventsToConsider.filter(
    (event) => weatherEvents[event][plant.element] < 0
  ).length;
  const neutralEvents = eventsToConsider.filter(
    (event) => weatherEvents[event][plant.element] === 0
  ).length;
  const totalEvents = inFavorEvents + againstEvents + neutralEvents;
  return {
    eventProbabilities: eventProbabilities,
    eventToday: EVENT_TODAY,
    actualWeather: ACTUAL_WEATHER,
    totalProbabilities: {
      favor: inFavorEvents / totalEvents,
      against: againstEvents / totalEvents,
      neutral: neutralEvents / totalEvents,
    },
  };
};
