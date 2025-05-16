import { useContext } from "react";
import { MainContext } from "../../context/MainProvider";

function Basket() {
  const {basket} = useContext(MainContext);
  console.log(basket);
  
  if(basket.length===0){
    return <p>Hele hecne yoxdur</p>
  }
  return (
    <>
      <title>Basket Page</title>
      <div>Basket</div>
    </>
  );
}

export default Basket;
