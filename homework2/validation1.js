function validation() {
    if (inputValidation()) {
        setTimeout(() => {
            window.location = "validation2.html";
        }, 2000);
    }
}

function inputValidation() {
    let success = true;

    let firstnameImage = getImage(true, "firstname");
    let firstnameNotification = getUserNotif(true, "firstname", "");
    if (!alphaNumCheck(document.forms['validationForm']['firstname'].value.trim())) {
        firstnameImage = getImage(false, "firstname");
        firstnameNotification = getUserNotif(false, "firstname", "Firstname needs to be alphanumeric");
        success = false;
    }

    let lastnameImage = getImage(true, "lastname");
    let lastnameNotification = getUserNotif(true, "lastname", "");
    if (!alphaNumCheck(document.forms['validationForm']['lastname'].value.trim())) {
        lastnameImage = getImage(false, "lastname");
        lastnameNotification = getUserNotif(false, "lastname", "Lastname needs to be alphanumeric");
        success = false;
    }

    let genderImage = getImage(true, "gender");
    let genderNotification = getUserNotif(true, "gender", "");
    if (document.forms['validationForm']['gender'].value.trim() === "Gender") {
        genderImage = getImage(false, "gender");
        genderNotification = getUserNotif(false, "gender", "Gender can not be default");
        success = false;
    }

    let stateImage = getImage(true, "state");
    let stateNotification = getUserNotif(true, "state", "");
    if (document.forms['validationForm']['state'].value.trim() === "State") {
        stateImage = getImage(false, "state");
        stateNotification = getUserNotif(false, "state", "State can not be default");
        success = false;
    }

    document.getElementById("firstnameEntry").appendChild(firstnameImage);
    document.getElementById("firstnameEntry").appendChild(firstnameNotification);

    document.getElementById("lastnameEntry").appendChild(lastnameImage);
    document.getElementById("lastnameEntry").appendChild(lastnameNotification);

    document.getElementById("genderEntry").appendChild(genderImage);
    document.getElementById("genderEntry").appendChild(genderNotification);

    document.getElementById("stateEntry").appendChild(stateImage);
    document.getElementById("stateEntry").appendChild(stateNotification);

    return success;
}

function getImage(bool, ID) {
    let image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function getUserNotif(bool, ID, warning) {
    let notification = document.getElementById("labelNotify" + ID);
    if (notification == null) {
        notification = document.createElement("labelNotify");
        notification.id = "labelNotify" + ID;
        notification.setAttribute( 'class', 'errorMessage' );
    }
    notification.innerHTML = bool ? "" : warning;
    return notification;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    return !!(entry != null && entry.match(regex));
}