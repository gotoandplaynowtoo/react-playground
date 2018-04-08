import React from 'react';
import PropTypes from 'prop-types';

const Clock = (props) => (
    <div style={{
        color: '#3498db',
        fontFamily: 'monospace'
        fontSize: 24,
        fontWeight: 'bold',
    }}>
        {props.dateString}
    </div>
);

Clock.propTypes = {
    dateString: PropTypes.string
};

Clock.defaultProps = {
    dateString: 'Clock default string'
};

export default Clock;