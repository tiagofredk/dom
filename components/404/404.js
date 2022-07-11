export default class Page404{
    constructor(){
        this.body = document.querySelector("body");
        this.div = document.createElement("div");
        this.h1 = document.createElement("h1");
        this.a = document.createElement("a");

        this.a.innerText = "Back to Navigation";
        this.a.href = "./index.html";
        this.h1.innerText = "404";
        this.div.append(this.h1, this.a);
        this.body.append(this.div);
    }
}