$(document).ready(onReady);

function onReady() {
    console.log('I am ready!');
    // add listener for generate button
    $(document).on('click', '#mainBtn', onGenerate);
    $(document).on("click", ".redToYellow", onColorChange);
    $(document).on("click", ".deleteBtn", onDelete);

}
// global
let clickCount = 0;

// ##### Outside of onReady

function onDelete() {
    console.log("in onDelete");
    $(this).parent().remove();
} //end onDelete

function onGenerate() {
    console.log('In onGenerate');
    // append new divs
    clickCount++;
    let el = $('#mainContainer');
    el.append(`
    <div class='red'>
    <p>Div Number${clickCount}</p>
    <button class=redToYellow>Yellow</button>
    <button class=deleteBtn>Delete</button>
    </div>
    `);
} // end on generate

function onColorChange() {
    console.log('in onColorChange');
    $(this).parent().css('background-color', "yellow")
} // end onColorChange