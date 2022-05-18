function Button({
    clickButton,
    clickPlus,
    clickRed,
    clickAddSrc,
    clickMinusSrc,
}) {
    return (
        <>
            <button onClick={clickButton}>Make pink</button>
            <button onClick={clickPlus}>Plus</button>
            <button onClick={clickRed}>Red</button>
            <button onClick={clickAddSrc}>Add square</button>
            <button onClick={clickMinusSrc}>Minus square</button>
        </>
    );
}

export default Button;
