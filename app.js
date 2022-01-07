//--step5
//we have to create a reference to client list on index.html
//for that we will create an const obj which will get attached to the client-list tag

const clientlist = document.querySelector('#client-list');
//step7:
//we will need to create a const which will be the reference we will use
const form = document.querySelector('#add-clients-form'); //this is a standard way to create a cont and map with a tag on index

//--step6
//now we have to map the outbut of below doc with this clientlist object
//create element and render clients
function renderClient(doc){
    //remember <li> tag is the child of <ul> similarly <span> tag is the child of <li> tag
    //so we need to create an element li then create Span
    //populate span --> append it to li --> append li to ul and that's it index.html will have what to print in ul tag

    let li = document.createElement('li');
    let email = document.createElement('span');
    let password = document.createElement('span');
    let role = document.createElement('span');
    let phone = document.createElement('span');
    let damn = document.createElement('span');

    //step9 
    //create an attribute --> initialize the value and then append it in li which later be appended with client list on screen
    //creating a new li sub element --div(could be span) but we have to write the code for every span/div in css file
    let cross =document.createElement('div');


    //setting the values header which will be the first key and then values would be sub dict key-value pairs
    li.setAttribute('data-id', doc.id);
    email.textContent = doc.data().email;
    password.textContent = doc.data().password;
    role.textContent = doc.data().role;
    phone.textContent = doc.data().phone;
    cross.textContent = 'x'; //from here we will be pulling and showing x value on the screen for every document

    li.appendChild(email);
    li.appendChild(password);
    li.appendChild(role);
    li.appendChild(phone);
    li.appendChild(cross);

    clientlist.appendChild(li);

    //step10 deleting data
    //we have rendered/extracted and printed everything on screen next step is to use the cross to delete a value we inserted
    //need to write a listener which will listen to events on that cross
    cross.addEventListener('click', (e)=>{
        e.stopPropagation();//optional stops the cross button bubbling up when you click
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('fomada').doc(id).delete();
    })

}

//step1 - grab the data we have it in our firebase database
//we have already defined the db constant in index.html
//format is db.collection('the collection you have defined in the db').get()

//step2
// but it is an asychrnouse request cause a great architecture is always loosely coupled
//we cannot initialize it in a variable because maybe the data would still have not persisted in our db
//hence we add another function then() and provide the parameter snapshot which will capture the current data in db
//snapshot is nothing but a representation of data what we have in our DB

// db.collection('fomada').get().then((snapshot) => {
//      console.log(snapshot.docs);
  
// }).catch((err) => {
    //dummy
// });

//step3
//the above code will extract only the amount of content there but not the data
//=> callback function is a function which gets passed as an argument to a function
//        console.log(doc); this will still not print anything but length as 2

//step4
// to get the data inside each document we would need to add data() method of firebass
//        console.log(doc.data());    

//getting data
//step11 -- we need to have ways to extract data from the DB order by/where clauses
//we can use standard way of const_db.collection('collection name').where('field name', 'condition', 'value').get()
//or to order by we can do const_db.collection('collection name').orderBy('field name').get()

//step13 -- we ill be commenting this cause this is not going to show us real time changes
//we need to dynamically retreive data from snapShots with every add/remove and show it on screen

        // db.collection('fomada').where('role','==','Client').orderBy('email').get().then((snapshot) => { //step12 you will get an error of not finding an index, which firebase is smart enought to make it on it's own yuo just need to click the error Uncaught (in promise) FirebaseError: The query requires an index. You can create it here: https://console.firebase.google.com/v1/r/project/burnished-sweep-336016/firestore/indexes?create_composite=ClVwcm9qZWN0cy9idXJuaXNoZWQtc3dlZXAtMzM2MDE2L2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9mb21hZGEvaW5kZXhlcy9fEAEaCAoEcm9sZRABGgkKBWVtYWlsEAEaDAoIX19uYW1lX18QAQ
        //     snapshot.docs.forEach(doc => {

        //         renderClient(doc); //every doc will call renderClient   
        //     })
        // })
//above code will get the data from the doc and 


//step8: saving data
//the first thing we need to make is creating a listener which will do something when the button is pressed

form.addEventListener('submit',(e) =>{
    e.preventDefault();   //until here we have done 2 things: it will start showing a responsive button but nothing will get added
    //preventDefault is being written because the default behaviour of buttons is to refresh the screen everytime you press hte button
    db.collection('fomada').add({
        email: form.email.value,
        password: form.password.value,
        role: form.role.value,
        phone: form.phone.value
    });  //this part will add data in firebase but the data will stay there on screen

    //to make the screen look clean :=]
    form.email.value='';
    form.password.value='';
    form.role.value='';
    form.phone.value='';
//open items to not let null values from the DB
})


//step14 -- new dynamic way of getting data
db.collection('fomada').orderBy('email').onSnapshot(snapshot =>{
    let changes = snapshot.docChanges();
     //after this we won't have anything on the screen as we are not rendering anything by this much code
     //console.log(changes);
    changes.forEach(change =>{
        //this part will help to get the data but still we are not rendering
        //console.log(change.doc.data())
        if(change.type == 'added')
        {
            renderClient(change.doc);
        }
        else if (change.type == 'removed')
        {
            let li = clientlist.querySelector('[data-id=' + change.doc.id + ']'); //here we are trying to retreive data from the snapshot so in a we are searching exactly the pattern li from the snapshot 
            //delete it now
            clientlist.removeChild(li); //this listener is reacting to all realtime changes happening in the snapshot   
        }
    })

})

// //update record
// db.collection('fomada').doc()

import "./App.css";

function App(){
    return <div className="App"></div>
}
export default App;
