var config = {
    apiKey: "AIzaSyA8gVeRfqcndE_m30CXfuUTU9o5DT9XKPA",
    authDomain: "gps-tracker-abf75.firebaseapp.com",
    databaseURL: "https://gps-tracker-abf75-default-rtdb.firebaseio.com",
    projectId: "gps-tracker-abf75",
    storageBucket: "gps-tracker-abf75.appspot.com",
    messagingSenderId: "374547067151",
    appId: "1:374547067151:web:fc633973feea1ede24ce7a",
    measurementId: "G-4C2RD2ZLG6"
};
firebase.initializeApp(config);

button11Clicked = () => {
    window.open(
    './chat.php?choice=1',
    '_blank'
    );
}
button21Clicked = () => {
    window.open(
    './chat.php?choice=2',
    '_blank' 
    );
}
button31Clicked = () => {
    window.open(
    './chat.php?choice=3',
    '_blank' 
    );
}
button41Clicked = () => {
    window.open(
    './chat.php?choice=4',
    '_blank' 
    );
}

buttonBroadClicked = () => {
    window.open(
    './chat.php?choice=5',
    '_blank' 
    );
}

function button1Clicked() {
	document.getElementById("vpAll").style.background = "#040761";
	document.getElementById("vp1").style.background = "blue";
	document.getElementById("vp2").style.background = "#040761";
	document.getElementById("vp3").style.background = "#040761";
	document.getElementById("vp4").style.background = "#040761";
    choice = 1;
	initMap();
	marker2.setPosition(null);
	marker3.setPosition(null);
	marker4.setPosition(null);
	map.setCenter(marker1.getPosition());
	map.setZoom(zoom);
}

function button2Clicked() {
document.getElementById("vpAll").style.background = "#040761";
	document.getElementById("vp1").style.background = "#040761";
	document.getElementById("vp2").style.background = "blue";
	document.getElementById("vp3").style.background = "#040761";
	document.getElementById("vp4").style.background = "#040761";
    choice = 2;
	initMap();
	marker1.setPosition(null);
	marker3.setPosition(null);
	marker4.setPosition(null);
	map.setCenter(marker2.getPosition());
	map.setZoom(zoom);
}

function button3Clicked() {
document.getElementById("vpAll").style.background = "#040761";
	document.getElementById("vp1").style.background = "#040761";
	document.getElementById("vp2").style.background = "#040761";
	document.getElementById("vp3").style.background = "blue";
	document.getElementById("vp4").style.background = "#040761";
    choice = 3;
	initMap();
	marker2.setPosition(null);
	marker1.setPosition(null);
	marker4.setPosition(null);
	map.setCenter(marker3.getPosition());
	map.setZoom(zoom);
}

function button4Clicked() {
document.getElementById("vpAll").style.background = "#040761";
	document.getElementById("vp1").style.background = "#040761";
	document.getElementById("vp2").style.background = "#040761";
	document.getElementById("vp3").style.background = "#040761";
	document.getElementById("vp4").style.background = "blue";
    choice = 4;
	initMap();
	marker2.setPosition(null);
	marker3.setPosition(null);
	marker1.setPosition(null);
	map.setCenter(marker4.getPosition());
	map.setZoom(zoom);
}

function buttonAllClicked() {
	document.getElementById("vpAll").style.background = "blue";
	document.getElementById("vp1").style.background = "#040761";
	document.getElementById("vp2").style.background = "#040761";
	document.getElementById("vp3").style.background = "#040761";
	document.getElementById("vp4").style.background = "#040761";
	choice = 0;
    initMap();
}
function buttonSeeMapClicked(){
	window.open(
  './FullMap.php?choice='+choice,
  '_blank' 
);
}
function onEnded(){
	x.currentTime = 0;
	x.play();
}

var map;
var zoom = 15;
var marker1, marker2, marker3, marker4;
var lat_max = -90,
    lat_min = 90,
    lang_max = -180,
    lang_min = 180;
var choice = 0;

function initMap() {
    var bounds = new google.maps.LatLngBounds();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {
            lat: 0,
            lng: 0
        }
    });


    marker1 = new google.maps.Marker({
        position: {
            lat: 0,
            lng: 0
        },
        map: map,
        icon: 'images/truck1.png'
    });
    marker2 = new google.maps.Marker({
        position: {
            lat: 0,
            lng: 0
        },
        map: map,
        icon: 'images/truck2.png'
    });
    marker3 = new google.maps.Marker({
        position: {
            lat: 0,
            lng: 0
        },
        map: map,
        icon: 'images/truck3.png'
    });
    marker4 = new google.maps.Marker({
        position: {
            lat: 0,
            lng: 0
        },
        map: map,
        icon: 'images/truck4.png'
    });

    var uid1;
    var user_ref1 = firebase.database().ref("users/1");
    user_ref1.on("value", function(snapshot) {
        //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
        var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
        uid1 = obj.uid;
        var ref = firebase.database().ref("locations/" + uid1);
        ref.on("value", function(snapshot) {
            //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
            console.log(JSON.stringify(snapshot.val(), null, 2));
            var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
            var latlng = new google.maps.LatLng(obj.latitude, obj.longitude);
            if (choice == 0) {
                marker1.setPosition(latlng);
                bounds.extend(latlng);
                map.fitBounds(bounds);
            } else if (choice == 1) {
                marker1.setPosition(latlng);
                map.setZoom(zoom);
                map.setCenter(latlng);
            }

            /*if(obj.latitude>lat_max)
                lat_max = obj.latitude;
            else if(obj.latitude<lat_min)
                lat_min = obj.latitude;
            if(obj.longitude>lang_max)
                lang_max = obj.latitude;
            else if(obj.longitude<lang_min)
                lang_min = obj.latitude;
            */
            //map.setCenter(latlng);
        });
    });

    var uid2;
    var user_ref2 = firebase.database().ref("users/2");
    user_ref2.on("value", function(snapshot) {
        //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
        var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
        uid2 = obj.uid;
        var ref = firebase.database().ref("locations/" + uid2);
        ref.on("value", function(snapshot) {
            //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
            console.log(JSON.stringify(snapshot.val(), null, 2));
            var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
            var latlng = new google.maps.LatLng(obj.latitude, obj.longitude);
            if (choice == 0) {
                marker2.setPosition(latlng);
                bounds.extend(latlng);
                map.fitBounds(bounds);
            } else if (choice == 2) {
                marker2.setPosition(latlng);
                map.setZoom(zoom);
                map.setCenter(latlng);
            }
            //map.setCenter(latlng);
        });
    });

    var uid3;
    var user_ref3 = firebase.database().ref("users/3");
    user_ref3.on("value", function(snapshot) {
        //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
        var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
        uid3 = obj.uid;
        var ref = firebase.database().ref("locations/" + uid3);
        ref.on("value", function(snapshot) {
            //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
            console.log(JSON.stringify(snapshot.val(), null, 2));
            var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
            var latlng = new google.maps.LatLng(obj.latitude, obj.longitude);
            if (choice == 0) {
                marker3.setPosition(latlng);
                bounds.extend(latlng);
                map.fitBounds(bounds);
            } else if (choice == 3) {
                marker3.setPosition(latlng);
                map.setZoom(zoom);
                map.setCenter(latlng);
            }
            //map.setCenter(latlng);
        });
    });

    var uid4;
    var user_ref4 = firebase.database().ref("users/4");
    user_ref4.on("value", function(snapshot) {
        //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
        var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
        uid4 = obj.uid;
        var ref = firebase.database().ref("locations/" + uid4);
        ref.on("value", function(snapshot) {
            //document.getElementById("none").innerHTML = JSON.stringify(snapshot.val(), null, 2);
            console.log(JSON.stringify(snapshot.val(), null, 2));
            var obj = JSON.parse(JSON.stringify(snapshot.val(), null, 2));
            var latlng = new google.maps.LatLng(obj.latitude, obj.longitude);
            if (choice == 0) {
                marker4.setPosition(latlng);
                bounds.extend(latlng);
                map.fitBounds(bounds);
            } else if (choice == 4) {
                marker4.setPosition(latlng);
                map.setZoom(zoom);
                map.setCenter(latlng);
            }
            //map.setCenter(latlng);
        });
    });

}

var x = document.getElementById('siren');
x.loop = true;
/*x.addEventListener('ended', function() {
            console.log('ended');
            this.currentTime = 0;
            this.play();
        }, false);
*/
var boolVal1=false;
var ref1 = firebase.database().ref("alarm/1");                           
ref1.on("value", function(snapshot){
    boolVal1 = snapshot.val();
    
    var element1 = document.getElementById("v1");
    
    if(!boolVal1){
        element1.className= 'led-green'; // += ' blueClass'; to keep existing classes
        x.currentTime = 0;
        x.pause();
    }
       
    else{
        element1.className= 'led-red';
        console.log('red');
        x.play();
        x.currentTime = 0;
        
    }
});

var boolVal2=false;
var ref2 = firebase.database().ref("alarm/2");                           
ref2.on("value", function(snapshot){
    boolVal2 = snapshot.val();
    
    var element2 = document.getElementById("v2");
    
    if(!boolVal2){
        element2.className= 'led-green'; // += ' blueClass'; to keep existing classes
        x.currentTime = 0;
        x.pause();
        
    }
    else{
        element2.className= 'led-red';
        console.log('red');
        x.play();
        x.currentTime = 0;
        
    }
       
});

var boolVal3=false;
var ref3 = firebase.database().ref("alarm/3");                           
ref3.on("value", function(snapshot){
    boolVal3 = snapshot.val();
    
    var element3 = document.getElementById("v3");
    
    if(!boolVal3){
        x.currentTime = 0;
        x.pause();
       element3.className= 'led-green'; // += ' blueClass'; to keep existing classes
    }
    else{
        element3.className= 'led-red';
        x.play();
        x.currentTime = 0;
    }
    
});

var boolVal4=false;
var ref4 = firebase.database().ref("alarm/4");                           
ref4.on("value", function(snapshot){
    boolVal4 = snapshot.val();
    
    var element4 = document.getElementById("v4");
    
    if(!boolVal4){
        x.currentTime = 0;
        x.pause();
        element4.className= 'led-green'; // += ' blueClass'; to keep existing classes
    }
    else{
        element4.className= 'led-red';
        x.play();
        x.currentTime = 0;
    }
});	