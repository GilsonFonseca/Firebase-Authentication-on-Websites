var config = {
		apiKey: "AIzaSyAO5Cfq6eIRi4jIharZz7Lmrd8-EX0B5w4",
		authDomain: "formproject-472d7.firebaseapp.com",
		databaseURL: "https://formproject-472d7.firebaseio.com",
		projectId: "formproject-472d7",
		storageBucket: "formproject-472d7.appspot.com",
		messagingSenderId: "347990996814"
	  };
	  firebase.initializeApp(config);
	  
function openSignIn() {
		window.open("index.html", "_self");
	  };
	  	  
function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
	  var name = document.getElementById('name').value;
	  var surname = document.getElementById('surname').value;
      
	  if (name.length < 4) {
        alert('Please enter a valid name.');
        return;
      }
	  if (surname.length < 4) {
        alert('Please enter a valid surname.');
        return;
      }
	  if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a valid password.');
        return;
      }
	  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
	  
		 
	}



   function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
		firebase.auth().onAuthStateChanged(function(user) {
			// [END_EXCLUDE]
			if (user) {
				var name = document.getElementById('name').value;
				var surname = document.getElementById('surname').value;
				console.log(name+ " "+surname);
				if(name !== "" && surname !== ""){
					console.log("Olalll "+name+ " "+surname);
				user.updateProfile({
					displayName: name +" " +surname,
					}).then(function() {	
					console.log(user.displayName);
					window.open("logged.html", "_self");
					}, function(error) {
						// An error happened.
				});
				}
			//
			}else{
				// user log out
			}
		  });
    }
    window.onload = function() {
      initApp();
    };

