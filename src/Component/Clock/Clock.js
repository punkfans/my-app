import React from 'react';
import PropTypes from 'prop-types';

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount () {
        this.timer = setInterval(() => {
            this.updateTimer();
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }

    updateTimer () {
        this.setState({date: new Date()});
    }

    render () {
        return (
            <div>
                <div>{this.props.location}</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    };
}

Clock.propTypes = {
    location: PropTypes.string.isRequired
};

export default Clock;