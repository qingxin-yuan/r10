import {
  //  formatDataObject, 
   formatSessionData 
  } from "./helpers";

// action types
const GET_EVENTS_LOADING = "GET_EVENTS_LOADING";
const GET_EVENTS = "GET_EVENTS";

// ACTION CREATORS
const getEventsLoading = () => ({
  type: GET_EVENTS_LOADING
});

const getEvents = events => ({
  type: GET_EVENTS,
  payload: events
});

// async action creator
export const asyncGetEvents = () => dispatch => {
  dispatch(getEventsLoading());
  fetch("https://r10app-95fea.firebaseio.com/sessions.json")
    .then(res => res.json())
    .then(data => {
      // data = formatDataObject(data);
      dispatch(getEvents(data));
    })
    .catch(err => {
      console.log(err);
    });
};

// reducer
export default (
  state = {
    isLoading: false,
    events: []
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
    default:
      return state;
  }
};
