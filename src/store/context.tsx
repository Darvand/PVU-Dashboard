import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ProductActions, pvuReducer } from "./reducer";
import axios from "axios";

type State = {
  PVU: {
    price: number;
  };
};

const initialState = {
  PVU: {
    price: 0,
  },
};

const AppContext = createContext<{ state: State; dispatch: Dispatch<any> }>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ PVU }: State, action: ProductActions) => ({
  PVU: pvuReducer(PVU, action),
});

const requestOptions = {
  method: "GET",
  uri: "http://localhost:3001/pvu/price",
};

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const [loading, setLoading] = useState(true);
  const [pvuInfo, setPvuInfo] = useState<State["PVU"]>({ price: 0 });

  useEffect(() => {
    axios
      .get<{ price: number }>("http://localhost:3001/pvu/price")
      .then((response) => {
        setLoading(false);
        setPvuInfo({ price: response.data.price });
        console.log("price", response.data.price);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  }, []);
  return (
    <AppContext.Provider value={{ state: { PVU: pvuInfo }, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
