$('#keyboard-upper-container').hide();

function it() {
    $("#keyboard-lower-container").toggle();
    $("#keyboard-upper-container").toggle();
}

$(document).keydown(function (event) {
    if (event.which === 16) {
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();
    }
});

$(document).keyup(function (event) {
    if (event.which === 16) {
        $("#keyboard-lower-container").show();
        $("#keyboard-upper-container").hide();
    } else {
        $(`#${event.which}`).css({ 'background-color': '#f5f5f5' });
        $(`#${event.which + 32}`).css({ 'background-color': '#f5f5f5' });
    }
});


$(document).keypress(function (event) {
    $(`#${event.which}`).css({ 'background-color': 'yellow' });
});

let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

$('<p>' + sentences[0] + '</p>').appendTo('#sentence');

let x = 0;

$(document).keypress(function (event) {
    // console.log(event.which);
    // let eve = event.which;
    let char = sentences[0].charCodeAt(x);
    let chara = sentences[0].charAt(x);
    // let redX = <img src:"img/redX.png">; 
    // console.log(chara);
    // console.log(char);
    $('#feedback').text();
    $('#target-letter').text(chara);

   

    if (event.which == char) {
        //$(`#${event.which}`).css({ 'background-color': 'yellow' });
        
        console.log(char);
        //$('#yellow-block').css({})
        x++;
    }
    // else {
    // alert("Hell No!");


    // }

});



