let input = document.getElementById('element');
let input2 = document.getElementById('element2');
let input3 = document.getElementById('element3')
let div= document.getElementById('demo');
let users=[];

function addFunction() {
    div.innerHTML="";
    let user={ism: input.value, yosh: input2.value, img:input3.value};
    users.push(user);
    for (const e of users) {
        if(e.ism != "" && e.yosh != "" && e.img!=""){
        div.innerHTML +=`
        <div class="box">
            <img src="${e.img}">
            <h1>${e.ism.toUpperCase()}</h1>
            <p>${e.yosh.toUpperCase()} Yosh</p>
        </div>`;}
    }
    input.value="";
    input2.value="";
    input3.value="";
}

function removeFunction() {
    for (let i=0; i<users.length; i++) {
        if(users[i].ism == input.value){
            users[i].ism=""; users[i].yosh="";
        }
    }
    input.value="";
    input2.value="";
    addFunction();
}