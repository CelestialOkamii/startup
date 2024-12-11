import React, { useEffect , useState } from 'react';

function drop_down_menus () {
    const [value1, chosen_option1] = useState("None")
    const [value2, chosen_option2] = useState("None")

    const change1 = (event) => {
        chosen_option1(event.target.value)
    };
    const change2 = (event) => {
        chosen_option2(event.target.value)
    };

    return (
        <div>
            <div>
            <label for="Hats"><h4>Hats:</h4></label>
                <select class = "my_drop_downs" id="Hats" name="varDropDown">
                    <option value = "none"selected>None</option>
                    <option value = "party_hat">Party Hat</option>
                    <option value = "ball_cap">Ball Cap</option>
                </select>
            </div>
            <div>
                <label for="Objects"><h4>Objects:</h4></label>
                <select  class = "my_drop_downs" id="Objects" name="varChoices">
                    <option value = "none" selected>None</option>
                    <option value = "book">Book</option>
                    <option value = "shopping_bag">Shopping Bag</option>
                </select>
            </div>
        </div>
    );
}
export default drop_down_menus;