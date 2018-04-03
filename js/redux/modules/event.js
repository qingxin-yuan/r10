// action types
const GET_EVENTS_LOADING = "GET_EVENTS_LOADING";
const GET_EVENTS = "GET_EVENTS";
const GET_EVENTS_ERROR = "GET_EVENTS_ERROR";

// ACTION CREATORS
const getEventsLoading = () => ({
  type: GET_EVENTS_LOADING
});

const getEvents = events => ({
  type: GET_EVENTS,
  payload: events
});
const getEventsError = err => ({
  type: GET_EVENTS_ERROR,
  payload: err
});

// async action creator
export const asyncGetEvents = () => dispatch => {
  dispatch(getEventsLoading());
  fetch("https://r10app-95fea.firebaseio.com/sessions.json")
    .then(res => res.json())
    .then(data => {
      dispatch(getEvents(data));
    })
    .catch(err => {
      dispatch(getEventsError(err));
    });
};

// reducer
export default (
  state = {
    isLoading: false,
    events: [],
    error: ""
  },
  action
) => {
  switch (action.type) {
    case GET_EVENTS_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_EVENTS: {
      return {
        ...state,
        isLoading: false,
        events: action.payload
      };
    }
    case GET_EVENTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
