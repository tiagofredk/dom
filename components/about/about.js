export default class About {
    
    body = document.querySelector("body");
    div = document.createElement("div")
    h1 = document.createElement("h1");

    constructor(){
        this.h1.innerText = "about";
        this.div.append(this.h1);
        this.body.append(this.div);
    }
}