import React, { useEffect , useState } from 'react';

function Drop_down_menus () {
    const [value1, chosen_option1] = useState("none")
    const [value2, chosen_option2] = useState("none")

    const change1 = (event) => {
        chosen_option1(event.target.value)
    };
    const change2 = (event) => {
        chosen_option2(event.target.value)
    };

    return (
        <div>
            <div>
            <label htmlFor="Hats"><h4>Hats:</h4></label>
                <select className = "my_drop_downs" id="Hats" name="varDropDown" onChange = {change1} value = {value1}>
                    <option value = "none">None</option>
                    <option value = "party_hat">Party Hat</option>
                    <option value = "ball_cap">Ball Cap</option>
                </select>
            </div>
            <div>
                <label htmlFor="Objects"><h4>Objects:</h4></label>
                <select  className = "my_drop_downs" id="Objects" name="varChoices" onChange = {change2} value={value2}>
                    <option value = "none">None</option>
                    <option value = "book">Book</option>
                    <option value = "shopping_bag">Shopping Bag</option>
                </select>
            </div>
        </div>
    );
}
export default Drop_down_menus;