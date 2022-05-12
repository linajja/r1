import React from 'react';

class FatDog extends React.Component {
    constructor() {
        super();
        this.state = { font: 20 };
    }

    spust = () => {
        this.setState((s) => ({
            font: s.font === 20 ? s.font + 20 : s.font - 20,
        }));
    };

    render() {
        return (
            <>
                <h2
                    style={{
                        color: this.props.color,
                        fontSize: this.state.font + 'px',
                    }}
                >
                    Fat Dog
                </h2>
                <button onClick={this.spust}>GO</button>
            </>
        );
    }
}

export default FatDog;
