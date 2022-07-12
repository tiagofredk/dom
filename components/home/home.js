import { sum } from "../utils.js"

export default function home(obj) {
    (() => {
        let body = document.querySelector('body');
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement('p');

        div.classList.add("main_content");

        h1.innerText = obj.title;
        p.innerText = obj.text;

        div.append(h1, p);
        body.append(div);
    })();

    function calc() {
        let main = document.querySelector(".main_content");
        let div = document.createElement("div");
        let input = document.createElement("input");
        let input2 = document.createElement("input");
        let p = document.createElement("p");
        let title = document.createElement("p");

        div.classList.add("calculator-container");

        title.innerText = "Calculator";

        input.addEventListener("input", () => {
            let result = sum(Number(input.value), Number(input2.value))
            p.innerText = result
        })
        input2.addEventListener("input", () => {
            let result = sum(Number(input.value), Number(input2.value))
            p.innerText = result
        })
        
        div.append(title, input, input2, p );
        main.append(div);
    }calc();
}