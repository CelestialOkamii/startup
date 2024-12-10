import React from 'react';

function make_visible_and_invisible(thing, thing_img) {
    function get_option1() {
        let selected = document.querySelector(`#${thing}`); 
        let selected_value = selected.options[selected.selectedIndex].value;
        change_hat(selected_value); 
    }
    function change_hat(thing) {
        let hat_imgs = document.querySelectorAll(thing_img);
        hat_imgs.forEach((img) => {
           let opacity_after = img.style.opacity = (thing === 'none') ? 0 : (img.id === hat ? 1 : 0);
       })
   }
   document.getElementById(thing).onchange = get_option1;
}