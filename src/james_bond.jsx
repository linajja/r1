import { useState } from 'react';
import './App.css';
import BlueSquare from './Components/james_bond/BlueSquare';

function App() {
    const [sc, setSc] = useState(false);

    const clickLabas = () => {
        setSc((s) => !s);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1
                    className="clickable"
                    onClick={clickLabas}
                    style={{ letterSpacing: sc ? '0.7px' : '8px' }}
                >
                    Labas
                </h1>
                <BlueSquare sc={sc}></BlueSquare>
            </header>
        </div>
    );
}

export default App;
