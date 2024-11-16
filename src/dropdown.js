// menu.js

export {menu, closeMenu}

const menu = function() {
    let dropdownOptionDiv = document.getElementById('option-container')

    //if visibility = if hidden, make visible.
    if (dropdownOptionDiv.style.visibility === "visible") {
        dropdownOptionDiv.style.visibility = "hidden";
    }
    else if (dropdownOptionDiv.style.visibility === "hidden") {
        dropdownOptionDiv.style.visibility = "visible";
    };
}

const closeMenu = function() {
    let dropdownOptionDiv = document.getElementById('option-container')

    //if visibility = if hidden, make visible.
    dropdownOptionDiv.style.visibility = "hidden";
}

