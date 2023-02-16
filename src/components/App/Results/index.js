/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Result from '../Result';

import axios from 'axios';

import data from '../../../data/coins.json';

function Results() {
  return (
    data.map((coin) => (
      <Result
        key={coin.id}
        {...coin}
      />
    )));
}

Results.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Results;
