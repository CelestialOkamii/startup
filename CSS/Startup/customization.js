import React, { useState, useEffect } from 'react';
function change_image_visability() {
    const [chosen_option, set_chosen_option] = usestate("");
    useEffect(() => {
        fetch("customization.html")
        .then((response) => response.text())
        .then((html) => {
            const dropdownContainer = document.getElementById("Hats");
            const drop_downs = document.querySelectorAll("my_drop_down");
            drop_downs.forEach((drop_down) => {})
        })
    })
}