export default function navbar(obj) {
    
    const body = document.querySelector('body');
    const div = document.createElement("div");
    const ul = document.createElement("ul");

    div.classList.add("navbar");
    ul.classList.add("navbar-list");

    obj.navbar.map(element => {
        const li = document.createElement("li");
        li.classList.add("navbar-item");
        const a = document.createElement("a");
        a.onclick = () => {
            // location.href = location.href+`#${element}`;
            location.href = `${location.origin}/index.html#${element}`;
            window.location.reload();
        }
        a.innerText = element;
        a.href = `#${element}`;
        li.append(a);
        ul.append(li);
    });
    
    const a = document.createElement("a");   
    a.innerHTML = `<img src=${obj.logo.img}></img>`
    a.href = "./index.html"

    div.append(a, ul);
    body.append(div);
}





