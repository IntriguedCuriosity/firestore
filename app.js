<html>
    <head>
        <script src="https://gstatic.com/firebasejs/5.0.4/firebase-app.js"></script>
        <script src="https://gstatic.com/firebasejs/5.0.4/firebase-firestore.js"></script>
        <!--firebase.js and firestore.js packages will load all the package needed at the very start-->
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>

        <h1>fomada</h1>

        <div class="content">

            <form id="add-clients-form">
                <!-- will need all the input fields which we have to feed inside the documnet list
                whatever we type here is going to get printed on the screen
            
                format will be the type + name + placeholder   <input type="" name="" placeholder="">-->
                <input type="text" name="email" placeholder="e-mail">
                <input type="text" name="password" placeholder="provide password">
                <input type="text" name="role" placeholder="your role">
                <input type="number" name="phone" placeholder="cell# for MFA">
                <!--now to submit all above data we will need to add a button-->
                <button>Add client Details</button>
                <!--this above entire tag will have a reference in app.js, to populate the values and store it inside noSQL-->
            </form>
            <!-- below ul is the place where we would want to list down all the client details
            remember this index.html is the page which we will show on the webist
            and every tag can be linked to code which will do things the back end and show the results on screen-->>

            <ul id="client-list"></ul>

        </div>
        <script>
            //we are creating an object which is storing which project are we hooking up with
            //just linking with firebase
            var config = {
            apiKey: "AIzaSyCbG5ZdjCaXNs9hjE4yLQvlmU7F6Xa21WY",
            authDomain: "burnished-sweep-336016.firebaseapp.com",
            projectId: "burnished-sweep-336016",
            storageBucket: "burnished-sweep-336016.appspot.com",
            messagingSenderId: "672563252759",
            appId: "1:672563252759:web:de0c00bfaae50c75fa1652"
            };
            firebase.initializeApp(config);
            //to get a reference to our db we will initialize the firestore object
            const db = firebase.firestore();
            //now whenever in the entire project we would like to talk with db, we can use the cosntant db
            //snapShots are as we will pe pulling the latest snapshot of the db everytime we retreive the data from firebase/store
            db.settings({timestampsInSnapshots: true})
        </script>
        <script src="app.js"></script>
    </body>
</html>

