import Apskritimas from './Apskritimas';
import KvadratoKvadratas from './KvadratoKvadratas';

function Kvadratas({ spalva, spalva1, vaizduoti }) {
    switch (vaizduoti) {
        case 'kvadratas':
            return (
                <div className="kvadratas" style={{ background: spalva }}>
                    <KvadratoKvadratas spalva2={spalva1}></KvadratoKvadratas>
                </div>
            );
        case 'apskritimas':
            return (
                <div className="kvadratas" style={{ background: spalva }}>
                    <Apskritimas spalva2={spalva1}></Apskritimas>
                </div>
            );
        default:
            return (
                <div
                    className="kvadratas"
                    style={{ backgroundColor: spalva }}
                ></div>
            );
    }
}

export default Kvadratas;
