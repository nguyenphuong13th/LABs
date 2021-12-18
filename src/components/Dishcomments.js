import dateFormat, { masks } from "dateformat";
function Dishcomments(props){
    if(props.ChosenDishes!=null){
        const Comments = props.ChosenDishes.comments.map((dishcomments)=>{
            return(
            <div key={dishcomments.id}>
                <ul>
                    <li className='list-unstyled pb-4'>{`--`+dishcomments.author}, {dateFormat((dishcomments.date).slice(0,10),'dd/mm/yyyy')}</li>
                    <li className='list-unstyled'>{dishcomments.comment}</li>
                </ul>
            </div>
            )
        })
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>{"Comment"}</h4>
                {Comments}
            </div>
        )

    }else{
        return(
            <div></div>
        )
    }


}

export default Dishcomments