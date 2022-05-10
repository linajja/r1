import './App.css';
import Car from './Components/002/Car';
import Tree from './Components/002/Tree';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>PROPS</h1>
              
                    <Car price= {300} cubeSize="50px" maker="Opel" color='blue' size='25' font="Courier New" colorCube="blue"></Car>
              
                    <Car price={100} cubeSize="50px" maker="Volvo" color='red' size='15' font="Franklin Gothic Medium" colorCube="red"></Car>

                    <Car price={500} cubeSize="50px" maker="MB" color='yellow' size='50' font="Segoe UI" colorCube="yellow"></Car>
                    <Tree size={8}></Tree>
                    <Tree size={1}></Tree>
                    <Tree size={5}></Tree>
                
            </header>
        </div>
    );
}

export default App;
