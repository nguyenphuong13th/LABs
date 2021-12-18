import { Navbar,NavbarBrand } from 'reactstrap';
import MenuComponent from './MenuComponent';
import DishdetailComponent from './DishdetailComponent'
import { useState } from 'react'
import {DISHES} from '../shared/dishes';

function Main() {
    const [selectedDish,setselectedDish] = useState(null)
    const onDishSelect=(dishID)=>{
        setselectedDish(dishID);
        console.log('selectedDish:'+selectedDish);
    }
  return (
    <div>
          <Navbar dark color ="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <MenuComponent dishes={DISHES} onClick={(dishID)=>onDishSelect(dishID)}/>
          <DishdetailComponent dish={DISHES.filter((dish)=>dish.id === selectedDish )[0]}/>
    </div>
  );
}

export default Main;
