// when user clicks on a button (click handler)
// save user input into variable
// append the variable (to HTML element with id of ???)

$(".Submit").click(function(){
    console.log("aaaa")
    var input1 = $(".input1").val();
    $(".result").append(input1);
    console.log(input1);
    fetchData(input1);
});

function fetchData(term) {
    let soundcloud_api_url = "https://api.soundcloud.com/tracks?q="+term+"&client_id=5aa8e389ba4e24b6106af5159ab3e344"
    fetch(soundcloud_api_url)
        .then(function(response) {
            let listSong = response.json()
            console.log (listSong);  
            return listSong;
        })
        .then (function(listSong){
            listSong.forEach(function(song){
            //$("body").append(song.title);
            console.log(song)
            $("body").append(`
                <ul>
                    <li>Title: ${song.title} Genre: ${song.genre} <img src="${song.artwork_url}"</li>
                </ul>
            `)

            })
        }
    )}