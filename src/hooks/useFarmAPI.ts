import axios from "axios";
import { useEffect, useState } from "react";
import { FarmResponse, FarmStored } from "../types/farm";

const backendURL =
  process.env.REACT_APP_BACKEND_URL || "https://ngd-api.herokuapp.com";

export const useFarmAPI = (farms: FarmStored[]) => {
  const [farm, setFarm] = useState<FarmResponse[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarm = () => {
      axios
        .post<FarmResponse[]>(`${backendURL}/pvu/farm`, {
          farmData: farms,
        })
        .then((response) => {
          console.log("backendURL", backendURL);
          console.log("farm response", response.data);
          setFarm(response.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetchFarm();
  }, [farms]);

  return { farm, error, loading };
};
