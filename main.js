// // console.log("bharat joshi")

// if user add a node add it to local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('addtext')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addtext.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtext.value = "";
    // console.log(notesObj)
    showNotes();
})


function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
               
        <div class="card-body">
          <h5 class="card-title">Notes ${index +1}</h5>
          <p class="card-text">${element}</p>
          <button href="#" class="btn btn-primary">Delete Node</button>
        </div>
      </div>` ;
        
    });


   let noteElem = document.getElementById('notes')
   if(notesObj.length !=0){
       noteElem.innerHTML = html;
   }

   else{
       noteElem.innerHTML  = `nothing to show ! use' "add notes  section aboive to add notes` 
   }
}

