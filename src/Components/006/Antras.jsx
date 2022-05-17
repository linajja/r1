function Antras({ plotis, ilgis, klase }) {
    if (2 + plotis + ilgis > 9) {
        return null;
    } else {
        return <h2 className={klase}> {2 + plotis + ilgis}</h2>;
    }
    // return <h2>{2 + plotis + ilgis}</h2>;
}

export default Antras;
