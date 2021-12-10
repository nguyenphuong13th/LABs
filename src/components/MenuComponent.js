import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import { useState } from 'react'
import DishdetailComponent from './DishdetailComponent'
const MenuComponent = (props) => {
    const [selectedDish,setselectedDish] = useState()
    const onDishSelect=(dish)=>{
        setselectedDish(dish);
        console.log('selectedDish:'+selectedDish);
    }
    const menu = props.dishes.map((dish)=>{
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <Card onClick={()=>onDishSelect(dish)}>
                    <CardImg  width='100%' src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    })
    return (
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
            <div className='row'>
                <DishdetailComponent ChosenDishes = {selectedDish}/>
            </div>
        </div>
    )
}
export default MenuComponent
