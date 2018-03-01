import {queryFave} from '../../config/models';

// const TOGGLE_FAVES = "TOGGLE_FAVES";
const FETCH_FAVES = "FETCH_FAVES";


// const toggleFaves = () =>({
//   type: TOGGLE_FAVES,
// })

const fetchFaves = faved =>({
  type: FETCH_FAVES,
  payload: faved
})

export const fetchFavesFromDB = () => dispatch =>{
  const data = queryFave();
  const faves = {};
  data.map((item, key) => faves[item.id] = "exists");
  dispatch(fetchFaves(faves));
}

export default (
  state = {
    faves: {}
  },
  action
) => {
  switch(action.type) {
    case FETCH_FAVES: {
      return{
        ...state,
        faves: action.payload
      }
    }
    default:
      return state;
  }
}
