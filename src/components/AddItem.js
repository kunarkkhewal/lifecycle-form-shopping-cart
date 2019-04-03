import React from 'react';

const AddItem = props => {
    return (
        <div>
            <h1>Add items</h1>
            <form className="form" onSubmit={props.onAdd}>
                <input className="input" type="text" placeholder="Enter Item name and Price separated by a - (hyphen)"/>
                <button className="btn" type="submit">AddItem</button>
            </form>

        </div>
    )
}

export default AddItem;