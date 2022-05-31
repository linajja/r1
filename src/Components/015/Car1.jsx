function Car1({ car }) {
    return (
        <div class="car">
            <span>{car.type}</span>
            <code>{car.price} EUR</code>
        </div>
    );
}

export default Car1;
