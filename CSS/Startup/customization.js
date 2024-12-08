function get_option1() {
    let selected = document.querySelector('#Hats'); 
    console.log(`${selected}`)
    let selected_value = selected.options[selected.selectedIndex].value;
    console.log(`${selected_value}`)
    console.log(selected.selectedIndex)
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
    console.log(`${hat}`)
     let hat_imgs = document.getElementById(hat);
     console.log(`${hat_imgs}`)
     hat_imgs.forEach((img) => {
        console.log(`IMG: ID = ${img.id}`)
        console.log(`OPACITY = ${img.style.opacity}`)
        let opacity_after = img.style.opacity = (hat === 'none') ? 0 : (img.id === hat ? 1 : 0);
        console.log(`${img.id} HAS OPACITY ${opacity_after}`)
    })
}

//Function to make things disappear and appear
function change_object(object) {
    let objs_imgs = document.querySelectorAll('.objects_imgs img');
     objs_imgs.forEach((img) => {
        img.style.opacity = (object === 'none') ? 0 : (img.id === object ? 1 : 0);
    })
}
//Controls and makes things happen only when things change like on click
document.getElementById("Hats").onchange = get_option1;
document.getElementById("Objects").onchange = get_option2;