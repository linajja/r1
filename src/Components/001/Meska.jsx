import Random from "../../Funkcijos/rand";

function Meska(){
    return<h3 style={
        {
            color: Random (0,1)?'red':'blue'
        }
    }>As meška lepečka!</h3>
}

export default Meska;