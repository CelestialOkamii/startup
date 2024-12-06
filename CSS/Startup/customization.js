function get_option1() {
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


function change_hat(hat) {
     let hat_imgs = document.querySelectorAll('hats_imgs');
     hat_imgs.forEach((img) => {

     })
    
}


function change_object(object) {

}

document.getElementById("Hats").onchange = get_option1;
document.getElementById("Objects").onchange = get_option1;