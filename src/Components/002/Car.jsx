import Random from '../../Funkcijos/rand';
import ColorMark from './ColorMark';
import CarPrice from './CarPrice';
import Square from './Square';
import Circle from './Circle';

function Car(props) {
    return (
        <h2
            style={{
                fontSize: props.size + 'px',
                fontFamily: props.font,
            }}
        >
            {props.color} {props.maker}{' '}
            <ColorMark
                color={props.colorCube}
                size={props.cubeSize}
            ></ColorMark>{' '}
            <CarPrice price1={props.price}> </CarPrice>{' '}
        </h2>
    );
}

export default Car;
