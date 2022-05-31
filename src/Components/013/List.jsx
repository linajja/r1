import { useState } from 'react';

function Lists() {
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const [show, setShow] = useState(false);

    const showShow = () => {
        setShow(true);
    };

    return (
        <div>
            {sizes
                .filter((s) => s[0] === 'X')
                .sort((a, b) => b.length - a.length)
                .map((s, i) =>
                    i % 2 === 0 ? (
                        <i style={{ color: 'red' }} key={i}>
                            {s}
                        </i>
                    ) : (
                        <u style={{ color: 'yellow' }} key={i}>
                            {s}
                        </u>
                    )
                )}
            <button
                type="button"
                onClick={showShow}
                className="btn btn-outline-primary m-2"
            >
                Rodyti
            </button>
        </div>
    );
}

export default Lists;
