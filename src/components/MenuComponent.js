import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import Dishcomments from './Dishcomments'
const MenuComponent = (props) => {

    const menu = props.dishes.map((dish)=>{
        return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
                <Card onClick={()=> props.onClick(dish.id)}>
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
            {/* <div className='row'>
                <Dishcomments ChosenDishes = {selectedDish}/>
            </div> */}
        </div>
    )
}
export default MenuComponent
