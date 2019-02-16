function dataChange() {
    var elemDay = document.getElementById("dateDay");
    var elemMonth = document.getElementById("dateMonth");
    var elemYear = document.getElementById("dateYear");

    if (elemDay.value != null && elemYear.value != null && elemMonth.value != null) {
        if (elemDay.value.length > 2 || elemMonth.value.length > 2 || elemYear.value.length > 4) {
            elemDay.style.color = "red";
            elemMonth.style.color = "red";
            elemYear.style.color = "red";


        }
    }
}
function nameChange(Id) {

    var elem = document.getElementById(Id);
    if (elem.value.length >= 10) { elem.style.color = "red" }
    else { elem.style.color = "black" };

}
function lastNameChange(Id) {

    var elem = document.getElementById(Id);
    if (elem.value.length >= 15) { elem.style.color = "red" }
    else { elem.style.color = "black" };

}

