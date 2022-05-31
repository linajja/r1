import { useEffect, useState } from 'react';
function Edit({ modal, setModal, edit }) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [count, setCount] = useState('');
    const [size, setSize] = useState('M');
    const [range, setRange] = useState('');
    const [checkbox, setOneCheckbox] = useState(false);

    const handleCheckbox = () => {
        setOneCheckbox((red) => !red);
    };

    const clickEdit = () => {
        const obj = { name, color, count, size, range, checkbox, id: modal.id };
        edit(obj);
        setModal(null);
    };

    useEffect(() => {
        if (null === modal) {
            return;
        }
        setName(modal.name);
        setColor(modal.color);
        setSize(modal.size);
        setRange(modal.range);
        setOneCheckbox(modal.checkbox);
    }, [modal]);

    if (!modal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit List</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={() => setModal(null)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                                onChange={(e) => setCount(e.target.value) + 8}
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
                    </div>{' '}
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
                        <label className="form-check-label">
                            Check for Red/NO
                        </label>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setModal(null)}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={clickEdit}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
