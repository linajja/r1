import React from 'react';

class Fish extends React.Component {
    componentDidMount() {
        console.log('BORN:' + this.props.number);
    }

    componentWillUnmount() {
        console.log('DEAD:' + this.props.number);
    }

    render() {
        return <div className="blue-square">{this.props.number}</div>;
    }
}
export default Fish;
