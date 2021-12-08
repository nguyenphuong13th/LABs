import { Media } from 'reactstrap'
import { useState } from 'react'
const MenuComponent = (props) => {
    const menu = props.dishes.map((dish)=>{
        return (
            <div key={dish.id} className='col-12 mt-5'>
                <Media tag='li'className='list-unstyled d-flex'>
                    <Media left middle>
                        <Media object src={dish.image} alt={dish.name}/>
                    </Media>
                    <Media body className='ms-5'>
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            </div>
        )

    })
    return (
        <div className='container'>
            <div className='row'>
                <Media list>
                    {menu}
                </Media>
            </div>

        </div>
    )
}
export default MenuComponent
