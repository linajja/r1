import Random from "../../Funkcijos/rand";
import randomColor from "../../Funkcijos/randomColor";

function Briedis() {
    return <h2 style={
        {
            fontSize: Random(10,50)+'px',
            color: randomColor()
        }
    }>Aš briedis, o kas tu?</h2>
}

export default Briedis;