const container = document.getElementById('container');

function createProjectDiv(title, description, imgURL, link){
    const cd = document.createElement("div");
    cd.style.margin = "auto";
    cd.style.width = "950px";
    cd.style.height = "300px";
    cd.style.backgroundColor = "#F5AA99";
    cd.style.padding = "20px";
    cd.style.marginTop = "40px";
    cd.style.marginBottom = "40px";
    container.appendChild(cd);
    const textDiv = document.createElement("div");
    const imageDiv = document.createElement("div");
    const t = document.createElement("a");
    const d = document.createElement("span");
    
    imageDiv.style.float = "right";
    imageDiv.style.width = "40%";
    imageDiv.style.height = "100%";
    imageDiv.style.backgroundColor = "#F5AA99";
    
    textDiv.style.float = "left";
    textDiv.style.width = "40%";
    textDiv.style.backgroundColor = "#F5AA99";
    textDiv.style.verticalAlign = "100%";
    t.className = "div_text";
    d.className = "div_text";
    t.style.color = "white";
    t.style.fontFamily = "'Roboto'";
    
    t.style.textAlign = "left"
    t.style.marginLeft = "3%"
    t.style.float = "left";
    t.style.backgroundColor = "#F5AA99";
    t.href = link
    d.style.color = "white";
    d.style.fontFamily = "'Open Sans'";
    
    d.style.textAlign = "left"
    d.style.marginLeft = "3%"
    d.style.float = "left";
    d.style.backgroundColor = "#F5AA99";
    d.style.marginTop = "2%"
    d.style.fontSize = "20px";
    
    t.style.fontSize = "40px";
    t.innerHTML = title;
    
    d.innerHTML = description;
    const i = document.createElement("img");
    
    i.style.float = "right";
    i.style.width = "50%";
    
    
    
    i.src = imgURL;
    cd.appendChild(textDiv);
    
    textDiv.appendChild(t);
    textDiv.appendChild(d);
    cd.appendChild(i);
}
createProjectDiv("Spherix", "This is an strategy/skill browser game that I designed and created with developer Evan Clough. This game uses the Javascript visualization library p5.js. The source code can be found <a href = 'https://github.com/L-F-N/L-F-N.github.io'>here.</a> ", "Screen Shot 2020-09-03 at 1.21.59 AM.png", "spherio/spherio.html")
