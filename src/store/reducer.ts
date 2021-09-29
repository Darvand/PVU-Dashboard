type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Update = "UPDATE_PVU",
}

type PVUType = {
  price: number;
};

type PVUPayload = {
  [Types.Update]: PVUType;
};

export type ProductActions = ActionMap<PVUPayload>[keyof ActionMap<PVUPayload>];

export const pvuReducer = (state: PVUType, action: ProductActions) => {
  switch (action.type) {
    case "UPDATE_PVU":
      return {
        ...state,
        PVU: action.payload,
      };
    default:
      return state;
  }
};
