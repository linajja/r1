import Random from "../../Funkcijos/rand";

function Vovere(){
return (
    <>
       <div>
            <div className="vovere">Vovere Nr.: {Random(100, 999)}</div>
            <b>Stora Voverė</b>
       </div>
       <h3>Voverių medis</h3>
    </>
);
}

export default Vovere;