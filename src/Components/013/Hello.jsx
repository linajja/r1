function Hello({ red, text, makeGreen }) {
    return (
        <>
            <h3 style={{ color: red }}>Hello {text}</h3>
            <button
                type="button"
                onClick={makeGreen}
                className="btn btn-outline-primary m-2"
            >
                Green Ate
            </button>
        </>
    );
}

export default Hello;
