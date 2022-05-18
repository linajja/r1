function Square({ i }) {
    return (
        <div
            className="small-red-square"
            style={{ borderRadius: i % 2 === 0 ? '50%' : '' }}
        ></div>
    );
}

export default Square;
