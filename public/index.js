 // Initialize Firebase
	  var config = {
		apiKey: "AIzaSyAO5Cfq6eIRi4jIharZz7Lmrd8-EX0B5w4",
		authDomain: "formproject-472d7.firebaseapp.com",
		databaseURL: "https://formproject-472d7.firebaseio.com",
		projectId: "formproject-472d7",
		storageBucket: "formproject-472d7.appspot.com",
		messagingSenderId: "347990996814"
	  };
	  firebase.initializeApp(config);
	  
	  function openSignUp() {
		window.open("signup.html", "_self");
	  };
	  
	  function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
    }
	
	
	    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var uid = user.uid;
          var providerData = user.providerData;
		  window.open("logged.html", "_self");
          // [START_EXCLUDE]
          //document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          //document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
		}else{
			
		}
      });

    }
    window.onload = function() {
      initApp();
    };