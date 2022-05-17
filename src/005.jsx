import { useState } from 'react';
import './App.css';
import randomColor from './Funkcijos/randomColor';

function App() {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [color, setColor] = useState('blue');
    const [one, setOne] = useState(1);
    const [sq, setSq] = useState([]);

    // const doShow = () => {
    //     setShow((s) => !s);
    // };

    // const doShow1 = () => {
    //     setShow1((s) => !s);
    // };

    const doShow2 = (num) => {
        num ? setShow((s) => !s) : setShow1((s) => !s);
    };

    // const makeRed = () => {
    //     setColor('red');
    // };
    // const makeYellow = () => {
    //     setColor('yellow');
    // };

    const changeColor = (color) => {
        setColor(color);
    };
    // const makeBiger = () => {
    //     setOne((s) => s + 1);
    // };

    // const makeSmaller = () => {
    //     setOne((s) => s - 1);
    // };

    const changeOne = (one) => {
        setOne((s) => s + one);
    };

    const addSquare = () => {
        // setSq((s) => [...s, (s[s.length - 1] ?? 0) + 1]);
        setSq((s) => [...s, randomColor()]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="sqc">
                    {sq.map((s, i) => (
                        <div
                            className="sq red"
                            key={i}
                            style={{ background: s }}
                        >
                            {s}
                        </div>
                    ))}
                </div>
                <div className="sqc">
                    {show ? (
                        <div className="sq" style={{ background: color }}></div>
                    ) : null}
                    {show1 ? (
                        <div className="sq" style={{ background: color }}></div>
                    ) : null}
                </div>
                <h1>HOOK {one}</h1>
                <div className="sqc">
                    <button onClick={() => doShow2(0)}>Show/Hide</button>
                    <button onClick={() => doShow2(1)}>Show/Hide</button>
                    <button onClick={() => changeColor('red')}>Make Red</button>
                    <button onClick={() => changeColor('yellow')}>
                        Make Yellow
                    </button>
                    <button onClick={() => changeOne(+1)}>Plus One</button>
                    <button onClick={() => changeOne(-1)}>Minus One</button>
                    <button onClick={addSquare}>Add Square</button>
                </div>
            </header>
        </div>
    );
}

export default App;
