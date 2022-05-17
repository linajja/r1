// function Vienas({ svoris, ugis }) {
//     if (1 + svoris + ugis > 9) {
//         return null;
//     }
//     // return <h1>{1 + svoris + ugis}</h1>;
// }

// export default Vienas;

function Vienas({ svoris, ugis, spalva, klase }) {
    return (
        <>
            {1 + svoris + ugis < 1 ? null : (
                <h1 className={klase} style={{ color: spalva }}>
                    {1 + svoris + ugis}
                </h1>
            )}
        </>
    );
}

export default Vienas;
