import './App.css';
import './bootstrap.css';
import { useState } from 'react';
import Hello from './Components/013/Hello';
import Lists from './Components/013/List';

function App() {
    // const [ate, setAte] = useState('');

    // const [color, setColor] = useState('');

    // const [color1, setColor1] = useState('');

    // const [africa, setAfrica] = useState('');

    // const labas = () => {
    //     console.log('Labukas!');
    // };

    // const showAte = () => {
    //     setAte('Ate!');
    // };

    // const remAte = () => {
    //     setAte(' ');
    //     setColor('');
    // };

    // const tugleAte = () => {
    //     setAte((s) => (s === 'Ate!' ? '' : 'Ate!'));
    // };
    // const redAte = () => {
    //     setColor('red');
    // };

    // const redHello = () => {
    //     setColor1('red');
    // };

    // const helloAfrica = () => {
    //     setAfrica(' Africa!');
    // };

    // const resetAfrica = () => {
    //     setAfrica(' ');
    //     setColor1('');
    // };

    // const makeGreen = () => {
    //     setColor('green');
    // };

    return (
        <div className="App">
            <header className="App-header">
                <h1>REAPEAT</h1>
                {/* <h2 style={{ color: color }} makeGreen={makeGreen}>
                    {ate}
                </h2>

                <Hello red={color1} text={africa}></Hello>
                <button
                    type="button"
                    onClick={labas}
                    className="btn btn-outline-primary m-2"
                >
                    Labas
                </button>
                <button
                    type="button"
                    onClick={showAte}
                    className="btn btn-outline-primary m-2"
                >
                    Ate
                </button>
                <button
                    type="button"
                    onClick={remAte}
                    className="btn btn-outline-primary m-2"
                >
                    Remove Ate
                </button>
                <button
                    type="button"
                    onClick={tugleAte}
                    className="btn btn-outline-primary m-2"
                >
                    Tugle Ate
                </button>
                <button
                    type="button"
                    onClick={redAte}
                    className="btn btn-outline-primary m-2"
                >
                    Red Ate
                </button>
                <button
                    type="button"
                    onClick={redHello}
                    className="btn btn-outline-primary m-2"
                >
                    Red Hello
                </button>
                <button
                    type="button"
                    onClick={helloAfrica}
                    className="btn btn-outline-primary m-2"
                >
                    Hello Africa!
                </button>
                <button
                    type="button"
                    onClick={resetAfrica}
                    className="btn btn-outline-primary m-2"
                >
                    Reset Africa
                </button> */}
                <Lists></Lists>
            </header>
        </div>
    );
}
export default App;
