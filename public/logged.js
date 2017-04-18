var config = {
		apiKey: "AIzaSyAO5Cfq6eIRi4jIharZz7Lmrd8-EX0B5w4",
		authDomain: "formproject-472d7.firebaseapp.com",
		databaseURL: "https://formproject-472d7.firebaseio.com",
		projectId: "formproject-472d7",
		storageBucket: "formproject-472d7.appspot.com",
		messagingSenderId: "347990996814"
	  };
	  firebase.initializeApp(config);
	  
	function toggleSignOut() {
		 firebase.auth().signOut();
		 window.open("index.html", "_self");
	  };  
	  	  
   function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        // [END_EXCLUDE]
        if (user) {
          // User is signed in.
		  

          var displayName = user.displayName;
		  console.log(user.displayName);
          var email = user.email;
          var uid = user.uid;
          var providerData = user.providerData;
		  document.getElementById("user").innerHTML = displayName;
		  document.getElementById("email").innerHTML = email;
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
	