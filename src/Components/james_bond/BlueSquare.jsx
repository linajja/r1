import { useState } from 'react';
import randomColor from '../../Funkcijos/randomColor';
import ButtonHolder from './ButtonHolder';
import SmallCircle from './SmallCircle';

function BlueSquare({ sc }) {
    const [bg, setBg] = useState('blue');

    const changeBg = () => {
        setBg((c) => (c === 'blue' ? 'red' : 'blue'));
    };

    const changeRand = () => {
        setBg(randomColor());
    };

    const [border, setBorder] = useState(1);

    const changeBorder = () => {
        setBorder((b) => (b === 10 ? 1 : 10));
    };

    return (
        <div
            className="kvadratas"
            style={{
                backgroundColor: bg,
                borderRadius: sc ? '50%' : '0',
                borderWidth: border + 'px',
            }}
        >
            <button onClick={changeBg}>Change</button>
            <button onClick={changeRand}>-Rand-</button>
            <ButtonHolder virvute={changeBorder} border={border}></ButtonHolder>
            <SmallCircle
                border={border}
                side="left"
                top={-60}
                sc={sc}
            ></SmallCircle>
            <SmallCircle
                border={border}
                side="right"
                top={-60}
                sc={sc}
            ></SmallCircle>
            <SmallCircle
                border={border}
                side=""
                top={140}
                sc={sc}
            ></SmallCircle>
        </div>
    );
}

export default BlueSquare;
