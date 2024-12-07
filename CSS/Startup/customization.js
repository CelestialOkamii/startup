function get_option1() {
    console.log('IS IN GETOPTION1')
    let selected = document.querySelector('#Hats'); // Select the Hats dropdown
    let selected_value = selected.options[selected.selectedIndex].value; // Get the selected value
    change_hat(selected_value); // Call change_hat with the selected value
}

// Function to handle dropdown changes for Objects
function get_option2() {
    let selected = document.querySelector('#Objects'); // Select the Objects dropdown
    let selected_value = selected.options[selected.selectedIndex].value; // Get the selected value
    change_object(selected_value); // Call change_object with the selected value
}

//Function to make things disappear and appear
function change_hat(hat) {
     let hat_imgs = document.querySelectorAll('.hats_imgs img');
     hat_imgs.forEach((img) => {
        img.style.opacity = (hat === 'none') ? 0 : (img.id === hat) ? 1 : 0;
    })
}

//Function to make things disappear and appear
function change_object(object) {
    let objs_imgs = document.querySelectorAll('.objects_imgs img');
     objs_imgs.forEach((img) => {
        img.style.opacity = (object === 'none') ? 0 : (img.id === object) ? 1 : 0;
    })
}
//Controls and makes things happen only when things change like on click
document.getElementById("Hats").onchange = get_option1;
document.getElementById("Objects").onchange = get_option2;