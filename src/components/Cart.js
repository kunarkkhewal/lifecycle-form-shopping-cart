import React from 'react';

const Cart = props => {
    // console.log("cart ", props.items[0])

    return (
        <div className='cartContainer'>
            {
                props.items.map(item=>{
                    return(
                        <div className='cart'>
                            <div className='name'>{item.name}</div>
                            <div className='qty'> {item.quantity}</div>
                            <div className='price'>{item.price}</div>
                            <button className='btn-dec' onClick={()=>{props.onDecrease(item.id)}}>-</button>
                            <button className='btn-inc' onClick={()=>{props.onIncrease(item.id)}}>+</button>
                            <button className='btn-delete' onClick={()=>{props.onDelete(item.id)}}>X</button>
                            <br/><br/>
                        </div>
                    )
                })
            }
            

        </div>
    )
}

export default Cart;