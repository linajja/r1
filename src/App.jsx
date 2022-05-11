import './App.css';
import CarsList from './Components/003/CarsList';
import ColorList from './Components/003/ColorList';

// const cars = ['Opel', 'MB', 'FIAT', 'FORD'];

const rainbow = [
    { color: 'crimson', size: 30, pos: 'top' },

    { color: 'orange', size: 14, pos: 'top' },

    { color: 'yellow', size: 52, pos: 'bottom' },

    { color: 'green', size: 27, pos: 'bottom' },

    { color: 'skyblue', size: 40, pos: 'top' },

    { color: 'darkblue', size: 17, pos: 'bottom' },

    { color: 'darkmagenta', size: 22, pos: 'top' },
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>LISTS</h1>
                {/* <CarsList cars={cars}></CarsList> */}
                <ColorList rainbow={rainbow}></ColorList>
            </header>
        </div>
    );
}

export default App;
