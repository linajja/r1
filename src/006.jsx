import './App.css';
import Antras from './Components/006/Antras';
import Vienas from './Components/006/Vienas';
import Kvadratas from './Components/006/Kvadratas';
import Raide from './Components/006/Raide';

const labas = [
    'L',
    'a',
    'b',
    'a',
    's',
    ',',
    ' ',
    'v',
    'a',
    'i',
    'k',
    'a',
    'i',
    '!',
];
function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <h1>Labas</h1>
                <Vienas spalva="red" svoris={2} ugis={1} klase="small"></Vienas>
                <Antras plotis={3} ilgis={1} klase="big"></Antras>
                <Kvadratas
                    spalva="red"
                    spalva1="yellow"
                    vaizduoti="kvadratas"
                ></Kvadratas> */}
                <div className="letters">
                    {labas.map((l, i) => (
                        <Raide key={i} l={l} i={i}></Raide>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
