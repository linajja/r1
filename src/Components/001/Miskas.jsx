import Random from "../../Funkcijos/rand";
import Briedis from "./Briedis";
import Meska from "./Meska";

function Miskas(){
return(
   <>
       {Random(0,1)?<Meska></Meska>:<Briedis></Briedis>}
 </>
);
}
export default Miskas;