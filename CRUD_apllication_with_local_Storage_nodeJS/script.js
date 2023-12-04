function validateForm(){
    var name = document.querySelector('#name').value;
    var age = document.querySelector('#age').value;
    var university = document.querySelector('#university').value;
    var district = document.querySelector('#district').value;

    if(name == ""){
        alert("Name is required");
        return false;
    }
    if(age == ""){
        alert("Age is required");
        return false;
    }
    if(age < 1){
        alert("Age must no be zero or less than zero");
        return false;
    }
    if(university == ""){
        alert("University is required");
        return false;
    }
    if(district == ""){
        alert("District is required");
        return false;
    }
    // else if(!email.includes("@")){
    //     alert("Invalid Email Address");
    //     return false;
    // }
    return true;
}

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";
    peopleList.forEach(function(element, index){
        html += 
        `<tr>
            <td> ${element.name} </td>
            <td> ${element.age} </td>
            <td> ${element.university} </td>
            <td> ${element.district} </td>
            <td>                 
                <button onclick="deleteData( ${index} )" class="btn btn-danger">Delete</button>
                <button onclick="updateData( ${index} )" class="btn btn-warning">Update</button> 
            </td>
        </tr>`;
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

// Loads All data when document or page loaded
document.onload = showData();


function clearForm(){
    document.querySelector('#name').value = "";
    document.querySelector('#age').value = "";
    document.querySelector('#university').value = "";
    document.querySelector('#district').value = ""; 
}
//  --------Add data on form fillup-------------
function AddData(){
    if(validateForm()==true){
        var name = document.querySelector('#name').value;
        var age = document.querySelector('#age').value;
        var university = document.querySelector('#university').value;
        var district = document.querySelector('#district').value; 
        
        var peopleList;
        if( localStorage.getItem("peopleList") == null ){
            peopleList = [];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name : name,
            age : age,
            university : university,
            district : district
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList) );
        showData();
        
        // call clearForm() -> (user defined function)
        clearForm();
        
    }
}

// -------- Function to Delete Data -----------
function deleteData(index){
    var peopleList;
    if( localStorage.getItem("peopleList") == null ){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse( localStorage.getItem("peopleList") );
    }
    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify(peopleList) );
    showData();
}

// ------------function to Update/edit data in local storage------------------
function updateData(index){
    // submit button-> hide, update button->show
    document.querySelector("#Submit").style.display = "none";
    document.querySelector("#Update").style.display = "block";

    var peopleList = localStorage.getItem("peopleList");
    peopleList = JSON.parse( peopleList );//convert JSON to Array
    
    //set input options = current value
    document.querySelector('#name').value = peopleList[index].name;
    document.querySelector('#age').value = peopleList[index].age;
    document.querySelector('#university').value = peopleList[index].university;
    document.querySelector('#district').value = peopleList[index].district;
    
    document.querySelector("#Update").onclick = function(){
        if( validateForm()==true ){
            peopleList[index].name = document.querySelector('#name').value;
            peopleList[index].age = document.querySelector('#age').value;
            peopleList[index].university = document.querySelector('#university').value;
            peopleList[index].district = document.querySelector('#district').value; 

            localStorage.setItem("peopleList", JSON.stringify(peopleList) );
            showData();
            clearForm();//userdefined function

            // submit button-> show, update button->hide
            document.querySelector("#Submit").style.display = "block";
            document.querySelector("#Update").style.display = "none";
        }
    }

}