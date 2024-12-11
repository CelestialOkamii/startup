import React from 'react';
import ReactDOM from 'react-dom/client';
import Drop_down_menus from './customization.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Drop_down_menus />);



function get_option1() {
    let selected = document.querySelector('#Hats'); 
    let selected_value = selected.options[selected.selectedIndex].value;
    change_hat(selected_value); 
}

// Function to handle dropdown changes for Objects
function get_option2() {
    let selected = document.querySelector('#Objects'); 
    let selected_value = selected.options[selected.selectedIndex].value; 
    change_object(selected_value); 
}

//Function to make things disappear and appear
function change_hat(hat) {
     let hat_imgs = document.querySelectorAll('.hat_imgs');
     hat_imgs.forEach((img) => {
        let opacity_after = img.style.opacity = (hat === 'none') ? 0 : (img.id === hat ? 1 : 0);
    })
}

//Function to make things disappear and appear
function change_object(object) {
    let objs_imgs = document.querySelectorAll('.object_images');
     objs_imgs.forEach((img) => {
        img.style.opacity = (object === 'none') ? 0 : (img.id === object ? 1 : 0);
    })
}
//Controls and makes things happen only when things change like on click
document.getElementById("Hats").onchange = get_option1;
document.getElementById("Objects").onchange = get_option2;