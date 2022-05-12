import React from 'react';

class FatCat extends React.Component {
    constructor() {
        super();
        this.state = { weight: 5, color: 'blue' };
    }

    paspaudimas = () => {
        console.log('Įvyko butono paspuadimas procese');
        this.setState((s) => ({ weight: s.weight + 1 }));
    };

    makeRed = () => {
        this.setState({ color: 'red' });
    };

    render() {
        return (
            <>
                <h2 style={{ color: this.state.color }}>
                    Fat Cat {this.props.color}
                    {this.state.weight} kg
                </h2>
                <button onClick={this.paspaudimas}>Click cat</button>
                <button onClick={this.makeRed}>Click RED cat</button>
            </>
        );
    }
}

export default FatCat;
