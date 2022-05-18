import { useState } from 'react';
import randomColor from '../../Funkcijos/randomColor';

function Small({ side, sc, top, border }) {
    const [color, setColor] = useState(null);

    if (!sc) {
        return null;
    }

    return (
        <div
            className="too-small clickable"
            onClick={() => setColor(randomColor())}
            style={{
                left: side === 'left' ? '-10px' : null,
                right: side === 'right' ? '-10px' : null,
                top: top + 'px',
                backgroundColor: color,
                borderWidth: border + 'px',
            }}
        ></div>
    );
}

export default Small;
