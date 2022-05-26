import './App.css';
import './bootstrap.css';

function App() {
    const labas = () => {
        console.log('Labukas!');
    };
    <button
        type="button"
        style={{ backgroundColor: 'red' }}
        onClick={labas}
        className="btn btn-outline-primary m-2"
    >
        Labas
    </button>;
}

export default App;
