function geolocation(){
    navigator.geolocation.getCurrentPosition(function(position){
        document.write(position.coords.latitude + ', ' + position.coords.longitude);
        var map_url = "https://maps.googleapis.com/maps/api/staticmap?center=&zoom=14&size=400x300&sensor=false&key=AIzaSyBVhd9nfDLqe-1tLlUON67nZ-44ZABhP8U";
        document.getElementById("mapholder").innerHTML = "<Exact location: " + map_url + ">";
    });
}