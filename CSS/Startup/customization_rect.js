import React, { useEffect , useState } from 'react';

function hat_drop_down_menu () {
    const [value, chosen_option] = useState("None")
    const change = (event) => {
        chosen_option(event.target.value)
    }
    return (
        <div>
            <select onChange={change} value= {value}>
                <option value = "none">None</option>
                <option value = "party_hat">Party Hat</option>
                <option value = "ball_cap">Ball Cap</option>
            </select>
        </div>
    );
}
export default hat_drop_down_menu;

function object_drop_down_menu () {
    const [value, chosen_option] = useState("None")
    const change = (event) => {
        chosen_option(event.target.value)
    }
    return (
        <div>
            <select onChange={change} value= {value}>
                <option value = "none">None</option>
                <option value = "book">Book</option>
                <option value = "shopping_bag">Shopping Bag</option>
            </select>
        </div>
    );
}
export default object_drop_down_menu;