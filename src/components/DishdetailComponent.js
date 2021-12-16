import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
import {Media} from 'reactstrap';
// const DishdetailComponent = (props)=>{
//     if(props.ChosenDishes != null){
//         return(
//             <div className='col-12 col-md-5 m-1'>
//                 <Card>
//                     <CardImg width='100%' src={props.ChosenDishes.image} alt={props.ChosenDishes.name}/>
//                     <CardBody>
//                         <CardTitle>{props.ChosenDishes.name}</CardTitle>
//                         <CardText>{props.ChosenDishes.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//     }
//     else{
//         return
//             <div></div>
//     }
// }
// export default DishdetailComponent;
// function RenderComment(props){
//     const dishDetail = props.ChosenDishes.map((dish,index)=>{
//         return(
//             <div key={dish.id} className='col-12 col-md-5 m-1'>
//                 <h4>{'Comments'}</h4>
//                 <ul>
//                     <li>{dish.comments[index].author}</li>
//                     <li>{dish.comments[index].comment}</li>
//                 </ul>
//             </div>
//         )
//     })
// }
function DishdetailComponent(props){
    return (<div className='col-12 col-md-5 m-1'>
                     <Card>
                         <CardImg width='100%' src={props.ChosenDishes?.image} alt={props.ChosenDishes?.name}/>
                         <CardBody>
                             <CardTitle>{props.ChosenDishes?.name}</CardTitle>
                             <CardText>{props.ChosenDishes?.description}</CardText>
                         </CardBody>
                     </Card>
                    {/* <RenderComment/> */}
            </div>
        )
}
export default DishdetailComponent
