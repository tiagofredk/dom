export default function home (obj) {
    let body = document.querySelector('body');
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement('p');

    div.classList.add("main_content");
    
    h1.innerText = obj.title;
    p.innerText = obj.text;

    document.body.append(p);
    div.append(h1, p);
    body.append(div);
}