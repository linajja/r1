import './App.css';
import './bootstrap.css';
import { useEffect, useState } from 'react';

function App() {
    const [cb, setCb] = useState(false);

    const [cb1, setCb1] = useState(false);

    const [cat, setCat] = useState(null);

    const [niceText, setNiceText] = useState('#ff0000');

    const [count, setCount] = useState(null);

    const [kv, setKv] = useState([]);

    useEffect(() => {
        setCat(JSON.parse(localStorage.getItem('katinukas')));
    }, []);

    const addCat = () => {
        localStorage.setItem('katinukas', JSON.stringify(['pilkis', 'mulkis']));
        setCat(['pilkis', 'mulkis']);
    };

    const removeCat = () => {
        localStorage.removeItem('katinukas');
        setCat(null);
    };
    //
    const addOne = () => {
        setCount((c) => {
            localStorage.setItem('one', c + 1);
            return c + 1;
        });
    };

    useEffect(() => {
        setCount(parseInt(localStorage.getItem('one') ?? 1));
    }, []);
    //

    const remKv = () => {
        setKv((k) => {
            localStorage.setItem('KV', JSON.stringify(k.slice(1)));
            return k.slice(1);
        });
    };

    const addKv = () => {
        setKv((k) => {
            localStorage.setItem('KV', JSON.stringify([...k, niceText]));
            return [...k, niceText];
        });
    };

    useEffect(() => {
        setKv(JSON.parse(localStorage.getItem('KV') ?? '[]'));
    }, []);

    const remCb = () => {
        setCb1(false);
        setCb(false);
    };
    const remCb1 = () => {
        setCb1((a) => !a) || setCb((b) => !b);
    };
    return (
        <>
            <div className="cards-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card m-4">
                                <div className="card-header">
                                    {cat
                                        ? cat.map((c, i) => (
                                              <h2 key={i}>{c}</h2>
                                          ))
                                        : null}
                                </div>
                                <div className="card-body">
                                    <button
                                        type="button"
                                        onClick={addCat}
                                        className="btn btn-outline-primary m-2"
                                    >
                                        Add Cat
                                    </button>
                                    <button
                                        type="button"
                                        onClick={removeCat}
                                        className="btn btn-outline-danger m-2"
                                    >
                                        Remove Cat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card m-4">
                                <div className="card-header">{count}</div>
                                <div className="card-body">
                                    <button
                                        type="button"
                                        onClick={addOne}
                                        className="btn btn-outline-primary m-2"
                                    >
                                        Add 1
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card m-4">
                                <div className="card-header">Kvadratukai</div>
                                <div className="card-body">
                                    <button
                                        type="button"
                                        onClick={addKv}
                                        className="btn btn-outline-primary m-2"
                                    >
                                        Add []
                                    </button>
                                    <button
                                        type="button"
                                        onClick={remKv}
                                        className="btn btn-outline-primary m-2"
                                    >
                                        Remove []
                                    </button>
                                    <div className="form-group">
                                        <label>Color input</label>
                                        <input
                                            type="color"
                                            className="form-control"
                                            onChange={(e) =>
                                                setNiceText(e.target.value)
                                            }
                                            value={niceText}
                                        ></input>
                                        <small className="form-text text-muted">
                                            Some nice color.
                                        </small>
                                    </div>
                                </div>
                                <div className="square-garden">
                                    {kv.map((n, i) => (
                                        <div
                                            key={i}
                                            className="small-red-square"
                                            style={{ backgroundColor: n }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card m-4">
                                <div className="card-header">
                                    Color Checkbox
                                </div>
                                <div className="card-body">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            onChange={() => setCb((b) => !b)}
                                            checked={cb}
                                        />
                                        <label className="form-check-label">
                                            Check to color
                                        </label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            onChange={() => setCb1((a) => !a)}
                                            checked={cb1}
                                        />
                                        <label className="form-check-label">
                                            Check to form
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        style={{ backgroundColor: 'red' }}
                                        onClick={remCb}
                                        className="btn btn-outline-primary m-2"
                                    >
                                        Remove
                                    </button>
                                    <button
                                        type="button"
                                        onClick={remCb1}
                                        className="btn btn-outline-primary m-2"
                                    >
                                        Change marking
                                    </button>
                                    <div
                                        className="square-garden"
                                        onClick={remCb}
                                    >
                                        <div
                                            className="small-red-square"
                                            style={{
                                                backgroundColor: cb
                                                    ? 'crimson'
                                                    : 'black',
                                                borderRadius: cb1 ? '' : '50%',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
