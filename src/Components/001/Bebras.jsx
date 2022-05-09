import Random from "../../Funkcijos/rand";

function Bebras(){
    return (
        <>
        <i>{Random(0,1)?"Bebras":<u>Bebras</u>}</i>
        </>
    )

}

export default Bebras;