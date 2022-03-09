let toolsOpen = false;

let toolsIconVisible = true;

import NavBar from "../components/Nav.vue"

function toggleTools() {
    if (!toolsOpen) {
        $("#tools-menu").show();
        document.getElementById("tools-collapse").innerHTML = "&minus;";
        toolsOpen = true;
    } else {
        $("#tools-menu").hide();
        document.getElementById("tools-collapse").innerHTML = "Tools";
        toolsOpen = false;
    }
}

function closeTools() {
    $("#tools-menu").hide();
    document.getElementById("tools-collapse").innerHTML = "Tools";
    toolsOpen = false;
}

function openTool(id) {
    closeOtherTools(id);
    $(`#${id}`).show();
    makeActive(id);
    closeTools();
}

function makeActive(id) {
    let menuId = "";
    if (id === "calculator") {
        menuId = "calculator-menu-option";
    }
    if (id === "charts") {
        menuId = "charts-menu-option";
    }
    if (id === "roles") {
        menuId = "roles-menu-option";
    }
    if (!document.getElementById(menuId).classList.contains("active")) {
        document.getElementById(menuId).classList.add("active");
    }
}

function closeOtherTools(id) {
    if (id !== "calculator") {
        $("#calculator").hide();
        document.getElementById("calculator-menu-option").classList.remove("active");
    }
    if (id !== "charts") {
        $("#charts").hide();
        document.getElementById("charts-menu-option").classList.remove("active");
    }
    if (id !== "roles") {
        $("#roles").hide();
        document.getElementById("roles-menu-option").classList.remove("active");
    }

}

function toggleToolsMenuIcon() {
    if (toolsIconVisible) {
        console.log("Hiding");
        $("#tools-sidebar").hide();
    } else {
        console.log("Showing");
        $("#tools-sidebar").show();
    }
    toolsIconVisible = !toolsIconVisible;
}

function isEmpty(element) {
    return element === null || element === undefined || element === NaN || element === "";
}

function sendEmail() {
    if (!isEmpty($('#emailAddress').val()) && !isEmpty($('#message-body').val())) {
    document.getElementById("emailAddress").value = "";
    document.getElementById("message-body").value = "";
    document.getElementById("email-success").style = "color: green";
    document.getElementById("email-success").innerText = "Email submitted!";   
    }
    else if (isEmpty($('#emailAddress').val())) {
        document.getElementById("email-success").style = "color: #CF6679";
        document.getElementById("email-success").innerText = "enter an email address";
    } else {
        document.getElementById("email-success").style = "color: #CF6679";
        document.getElementById("email-success").innerText = "enter a message";
    }
}

function validateEmail() {
    document.getElementById("emailAddress").addEventListener("keyup", function(event) {
        event.preventDefault();
        });
        document.getElementById("emailAddress").addEventListener("keyup", function(event) {
        event.preventDefault();
        const url = "https://api.eva.pingutil.com/email?email="+
          document.getElementById("emailAddress").value;
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                if (json.status == 'success') {
                    console.log('Success!');
                    document.getElementById("txtHint").innerHTML=
                    `<span></span>` 
                } else {
                    document.getElementById("txtHint").innerHTML=
                    `<span style="color: #CF6679">enter a valid email addesss</span>` 
                }
            });
    });
}