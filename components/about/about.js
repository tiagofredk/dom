export default class About {
    h1 = document.createElement("h1");
    body = document.querySelector("body");
    constructor(){
        this.h1.innerText = "about";
        this.body.append(this.h1);
    }
}