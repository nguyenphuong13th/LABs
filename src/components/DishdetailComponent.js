import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap'
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
function Welcome(props){
    return <div className='col-12 col-md-5 m-1'>
                     <Card>
                         <CardImg width='100%' src={props.ChosenDishes?.image} alt={props.ChosenDishes?.name}/>
                         <CardBody>
                             <CardTitle>{props.ChosenDishes?.name}</CardTitle>
                             <CardText>{props.ChosenDishes?.description}</CardText>
                         </CardBody>
                     </Card>
            </div>
}
export default Welcome
