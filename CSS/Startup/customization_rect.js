import React, { useEffect , useState } from 'react';

function drop_down_menus ({items, value, onchange}) {
    const [value, chosen_option] = useState("None")
    const change = (event) => {
        chosen_option(event.targe.value)
    }
    return (
        <div>
            <Dropdown  options= {["None", "Party Hat", "Ball Cap"]} />
            <Dropdown options= {["None", "Book", "shopping Bag"]} />
        </div>
    )
    return (
        <div>
            <select onChange={change} value= {value}>
                <option value = "none">None</option>
                <option value = "party_hat">Party Hat</option>
                <optoin value = "ball_cap">Ball Cap</optoin>
            </select>
        </div>
    );
}

function make_visible_and_invisible(drop_down, thing, thing_img) {
    function get_option1() {
        let selected = document.querySelector(`#${thing}`); 
        let selected_value = selected.options[selected.selectedIndex].value;
        change_hat(selected_value); 
    }
    function change_hat(thing) {
        let hat_imgs = document.querySelectorAll(thing_img);
        hat_imgs.forEach((img) => {
           let opacity_after = img.style.opacity = (thing === 'none') ? 0 : (img.id === thing ? 1 : 0);
       })
   }
   document.getElementById(drop_down).onchange = get_option1;
}