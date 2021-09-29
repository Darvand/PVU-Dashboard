import React from "react";
import { useGreenhouseProbability } from "../../../../hooks/useGreenhouseProbability";
import { Plant } from "../../../../types";

import "./Greenhouse.scss";

interface Props {
  plant: Plant;
}

const percentage = (number: number) => `${(number * 100).toFixed(2)}%`;

const Greenhouse = ({ plant }: Props) => {
  const { eventProbabilities, totalProbabilities } =
    useGreenhouseProbability(plant);

  return (
    <div className="flex-column">
      <div className="greenhouse-grid">
        <p>Clima</p>
        <p>LE</p>
        <p>Prob.</p>
      </div>
      <div className="flex-column gap-5px event-probability-container">
        {Object.keys(eventProbabilities).map((event) => {
          const eventProbability =
            eventProbabilities[event as keyof typeof eventProbabilities];
          return (
            <div className="greenhouse-grid">
              <p className="subtext text-left">{event.substring(0, 12)}</p>
              <p
                className="subtext"
                style={{
                  color:
                    eventProbability.le > 0
                      ? "green"
                      : eventProbability.le < 0
                      ? "red"
                      : "white",
                }}
              >
                {eventProbability.le.toFixed(2)}
              </p>
              <p className="subtext">
                {percentage(eventProbability.probability)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="greenhouse-grid">
        <span>A favor</span>
        <span>En contra</span>
        <span>Neutral</span>
      </div>
      <div className="greenhouse-grid">
        <div>{percentage(totalProbabilities.favor)}</div>
        <div>{percentage(totalProbabilities.against)}</div>
        <div>{percentage(totalProbabilities.neutral)}</div>
      </div>
    </div>
  );
};

export default Greenhouse;
