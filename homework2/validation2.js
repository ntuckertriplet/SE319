function inputValidation() {
    let emailImage = getImage(true, "email");
    let emailNotification = getUserNotif(true, "email", "");
    if (!emailCheck(document.forms['contactForm']['email'].value)) {
        emailImage = getImage(false, "email");
        emailNotification = getUserNotif(false, "email", "Email needs to be in the form name@domain.tld");
    }

    let phoneImage = getImage(true, "phone");
    let phoneNotification = getUserNotif(true, "phone", "");
    if (!phoneCheck(document.forms['contactForm']['phone'].value)) {
        phoneImage = getImage(false, "phone");
        phoneNotification = getUserNotif(false, "phone", "Phone number needs to be in the format XXX-XXX-XXXX or XXXXXXXXXX");
    }

    let addressImage = getImage(true, "address");
    let addressNotification = getUserNotif(true, "address", "");
    if (!addressCheck(document.forms['contactForm']['address'].value)) {
        addressImage = getImage(false, "address");
        addressNotification = getUserNotif(false, "address", "Address needs to be in the form Town, State");
    }

    document.getElementById("emailEntry").appendChild(emailImage);
    document.getElementById("emailEntry").appendChild(emailNotification);

    document.getElementById("phoneEntry").appendChild(phoneImage);
    document.getElementById("phoneEntry").appendChild(phoneNotification);

    document.getElementById("addressEntry").appendChild(addressImage);
    document.getElementById("addressEntry").appendChild(addressNotification);
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


function emailCheck(email) {
    let atSplit = email.split('@');
    let periodSplit;
    if (atSplit.length === 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length === 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    return false;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    return !!(entry != null && entry.match(regex));
}

function phoneCheck(entry) {
    let number = entry.trim().replaceAll("-", "");
    let converted = Number(number);

    return (number.length === 10 && typeof converted === "number");
}

function addressCheck(address) {
    let trimmed = address.split(',');
    return (trimmed.length === 2);
}
