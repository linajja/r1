import './App.css';
import Button from './Components/008/Button';
import MrGreen from './Components/008/MrGreen';
import { useState } from 'react';
import Square from './Components/008/Square';

function App() {
    const [mrGreen, setMrGreen] = useState('green');
    const [nr, setNr] = useState(1);
    const [red, setRed] = useState(false);
    const [src, setSrc] = useState([]);

    const clickButton = () => {
        setMrGreen((s) => (s === 'pink' ? 'green' : 'pink'));
    };

    const clickPlus = () => {
        setNr((n) => n + (red ? -1 : 1));
    };

    const clickRed = () => setRed((r) => !r);

    const clickAddSrc = () => setSrc((s) => [...s, 1]);

    const clickMinusSrc = () => setSrc((s) => s.slice(1));

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Uplifting
                    <span
                        style={{
                            color: mrGreen,
                            backgroundColor: red ? 'red' : null,
                        }}
                    >
                        {nr}
                    </span>
                </h1>
                <Button
                    clickButton={clickButton}
                    clickPlus={clickPlus}
                    clickRed={clickRed}
                    clickAddSrc={clickAddSrc}
                    clickMinusSrc={clickMinusSrc}
                ></Button>
                <MrGreen mrGreen={mrGreen}></MrGreen>
                <div className="square-garden">
                    {src.map((_, i) => (
                        <Square key={i}></Square>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
