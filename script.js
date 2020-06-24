var message = "Please generate poassword by clickng on the button";
alert(message);

function generate() {
    let choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    for (var i = 1; i <= complexity; i++) {
        password = password + choices.charAt(Math.floor(Math.random() * Math.floor(choices.length)));
    
    }

    document.activeElement("Display").choices = password;

}


