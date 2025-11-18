// Change greeting text
document.getElementById("greetBtn").addEventListener("click", function() {
    let name = document.getElementById("nameInput"). value;
    if(name.trim() !== "") {
        document.getElementById("greeting").textContent = "Hello, " +name;    
    } else {
        document.getElementById("greeting").textContent = "Hello";
    }
}); 

// Box color filling using DOM 
document.getElementById("redBox").addEventListener("click", function() {
    this.style.backgroundColor = "red";
    this.style.color = "white";
});

document.getElementById("blueBox").addEventListener("click", function () {
    this.style.backgroundColor = "blue";
    this.style.color = "white";
});

document.getElementById("greenBox").addEventListener("click", function () {
    this.style.backgroundColor = "green";
    this.style.color = "white";
});

document.getElementById("yellowBox").addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
    this.style.color = "white";
});