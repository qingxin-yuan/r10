import React from "react";
import PropTypes from "prop-types";

import EventList from '../../components/EventList';

const Faves = ({ data, currentUID, faves }) => <EventList data={data} currentUID={currentUID} faves={faves} />

export default Faves;

Faves.propTypes = {
  data: PropTypes.array.isRequired,
  currentUID: PropTypes.string.isRequired,
  faves: PropTypes.object.isRequired,
}

Faves.defaultProps = {
  data: [],
  currentUID: "",
  faves: {}
}