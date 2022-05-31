function Square({ i }) {
    return (
        <>
            <div
                className="small-red-square"
                style={{ backgroundColor: 'blue' }}
            >
                {i}
            </div>
            <div
                className="small-red-square"
                style={{ backgroundColor: 'grey' }}
            >
                {i}
            </div>
        </>
    );
}

export default Square;
