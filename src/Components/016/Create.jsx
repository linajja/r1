import { useState } from 'react';
function Create({ add }) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [count, setCount] = useState('');
    const [size, setSize] = useState('M');
    const [range, setRange] = useState('');
    const [checkbox, setOneCheckbox] = useState(false);

    const handleCheckbox = () => {
        setOneCheckbox((red) => !red);
    };

    const clickAdd = () => {
        const obj = { name, color, count, size, checkbox, range }; // {name: name, color: color}
        add(obj);
        setName('');
        setColor('');
        setRange('');
        setCount('');
        setSize('M');
        setOneCheckbox(false);
    };

    return (
        <div className="card m-4">
            <div className="card-header">Add to list</div>
            <div className="card-body">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                    />
                </div>
                <div className="form-group">
                    <label>Count</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setCount(e.target.value)}
                        value={count}
                    />
                </div>
                <div className="form-group">
                    <label>Size</label>
                    <select
                        type="text"
                        className="form-control"
                        onChange={(e) => setSize(e.target.value)}
                        value={size}
                    >
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Range: {range}</label>
                    <input
                        type="range"
                        min="1"
                        max="300"
                        onChange={(e) => setRange(e.target.value)}
                        value={range}
                    />
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={handleCheckbox}
                        checked={checkbox}
                    />
                    <label className="form-check-label">Check for Red/NO</label>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={clickAdd}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default Create;
