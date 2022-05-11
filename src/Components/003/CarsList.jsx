function CarsList(props) {
    return (
        <div>
            cis bus sarasas
            {props.cars.map((c, i) => (
                <h3 key={i} style={{ color: 'pink' }}>
                    {c}
                </h3>
            ))}
        </div>
    );
}

export default CarsList;
