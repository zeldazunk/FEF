console.log("testing");
let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
    for(var i=0; i < myObj.length; i++){
        addRepo(myObj)[1].name;
    }
  }
};

newRequest.open("Get", "https://api.github.com/users/zeldazunk", true );
newRequest.send();

function addRep(name){
    var node = document. createElement("li");
    var texNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repoList").appendChild(node);
}
