function inputSelected(inputUser){
    $(inputUser).closest(".form-input").addClass("selected");
}
function inputUnselected(inputUser){
    $(inputUser).closest(".form-input").removeClass("selected");
}
function password(passPosition){
    UserPassword = $(".password")[passPosition]
    if(UserPassword.type === "password"){
        UserPassword.type = "text"
    }else{
        UserPassword.type = "password"
    }
}
$('input').focus(function (){
    inputSelected(this);
})
$('input').blur(function (){
    inputUnselected(this);
})