import randomColor from "../../Funkcijos/randomColor";

function Kates() {
    return (
        <ul className="kates" style={
        {
            color: randomColor()
        }
    }>
            <li>Pynkius</li>
            <li>Namy</li>
            <li>Pelėda</li>
        </ul>
    );
}
export default Kates;