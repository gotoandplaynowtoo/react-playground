import React from 'react';
import PropTypes from 'prop-types';

const Clock = (props) => (
    <div>{props.dateString}</div>
);

Clock.propTypes = {
    dateString: PropTypes.string
};

Clock.defaultProps = {
    dateString: 'Clock default string'
};

export default Clock;