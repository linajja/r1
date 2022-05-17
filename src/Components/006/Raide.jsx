import randomColor from '../../Funkcijos/randomColor.js';

function Raide({ l, i }) {
    if (i % 2 === 0) {
        return (
            <span
                className="circle"
                style={{ color: randomColor(), backgroundColor: 'white' }}
            >
                {l}
            </span>
        );
    } else {
        return (
            <span
                className="circle"
                style={{ color: randomColor(), backgroundColor: 'black' }}
            >
                {l}
            </span>
        );
    }
}
export default Raide;
