// action types
const GET_COC_LOADING = "GET_COC_LOADING";
const GET_COC = "GET_COC";
const GET_COC_ERROR = "GET_COC_ERROR";

// ACTION CREATORS
const getCOCLoading = () => ({
  type: GET_COC_LOADING
});
const getCOC = COC => ({
  type: GET_COC,
  payload: COC
});
const getCOCError = error => ({
  type: GET_COC_ERROR,
  payload: error
});

// async action creator
export const getCodeOfConduct = () => dispatch => {
  dispatch(getCOCLoading());
  fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
    .then(res => res.json())
    .then(data => dispatch(getCOC(data)))
    .catch(err => {
      dispatch(getCOCError(err));
    });
};

// reducer
export default (
  state = {
    isLoading: false,
    COC: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_COC_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_COC: {
      return {
        ...state,
        isLoading: false,
        COC: action.payload
      };
    }
    case GET_COC_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
