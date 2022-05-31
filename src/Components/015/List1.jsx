// import { useState } from "react";

function List1() {
    const cars = [
        { id: 1, type: 'MB', color: 'blue', price: 45874.01 },

        { id: 4, type: 'Volvo', color: 'pink', price: 54658.0 },

        { id: 17, type: 'MB', color: 'black', price: 6465.77 },

        { id: 47, type: 'Opel', color: 'blue', price: 89791.77 },

        { id: 10, type: 'Scania', color: 'red', price: 44624.0 },

        { id: 107, type: 'BMW', color: 'red', price: 98591.0 },

        { id: 44, type: 'BMW', color: 'yellow', price: 789.3 },

        { id: 78, type: 'MB', color: 'blue', price: 64598.0 },

        { id: 99, type: 'Tesla', color: 'gray', price: 78944.0 },
    ];

    return (
        <div className="lc">
            {/* <button className="a" onClick={()=>setShow(s => !s)}>Show</button> */}

            <div className="list">
                {cars.map((car) => (
                    <>
                        <div style={{ color: car.color }} key={car.id}>
                            Tipas: {car.type}
                        </div>
                        <ul key={car.id}>
                            {car.price}
                            {car.price < 10000 ? <i>Akcija!</i> : null}
                        </ul>
                    </>
                ))}
            </div>
        </div>
    );
}

export default List1;
