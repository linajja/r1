import { useState } from 'react';
import randomColor from '../../Funkcijos/randomColor';
import SmallCircle from './SmallCircle';

function BlueSquare({ sc }) {
    const [bg, setBg] = useState('blue');
    const [border, setBorder] = useState(1);

    const changeBg = () => {
        setBg((c) => (c === 'blue' ? 'red' : 'blue'));
    };

    const changeRand = () => {
        setBg(randomColor());
    };

    const changeBorder = () => {
        setBorder((b) => (b === 10 ? 1 : 10));
    };

    return (
        <div
            className="kvadratas2"
            style={{
                backgroundColor: bg,
                borderWidth: border + 'px',
                borderRadius: sc ? '50%' : '0',
            }}
        >
            <button onClick={changeBg}>Change</button>
            <button onClick={changeRand}>-Rand-</button>
            <button onClick={changeBorder}>Change border</button>
            <SmallCircle side="left" top={-60} sc={sc}></SmallCircle>
            <SmallCircle side="right" top={-60} sc={sc}></SmallCircle>
            <SmallCircle side="" top={150} sc={sc}></SmallCircle>
        </div>
    );
}

export default BlueSquare;
