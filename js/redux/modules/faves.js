import { queryFave } from "../../config/models";

const FETCH_FAVES = "FETCH_FAVES";

const fetchFaves = faved => ({
  type: FETCH_FAVES,
  payload: faved
});

export const fetchFavesFromDB = () => dispatch => {
  const data = queryFave();
  const faves = {};
  data.map(item => (faves[item.id] = "exists"));
  dispatch(fetchFaves(faves));
};

export default (
  state = {
    faves: {}
  },
  action
) => {
  switch (action.type) {
    case FETCH_FAVES: {
      return {
        ...state,
        faves: action.payload
      };
    }
    default:
      return state;
  }
};
