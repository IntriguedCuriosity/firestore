//step1 - grab the data we have it in our firebase database
//we have already defined the db constant in index.html
//format is db.collection('the collection you have defined in the db').get()

// but it is an asychrnouse request cause a great architecture is always loosely coupled
//we cannot initialize it in a variable because maybe the data would still have not persisted in our db
//hence we add another function then() and provide the parameter snapshot which will capture the current data in db
//snapshot is nothing but a representation of data what we have in our DB

// db.collection('fomada').get().then((snapshot) => {
//      console.log(snapshot.docs);
  
// }).catch((err) => {
    //dummy
// });

//the above code will extract only the amount of content there but not the data
//=> callback function is a function which gets passed as an argument to a function


db.collection('fomada').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {

        console.log(doc.data());    
    })
})
