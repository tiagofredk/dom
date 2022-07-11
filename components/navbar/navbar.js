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
        a.innerText = element;
        a.href = `#${element}`;
        li.append(a);
        ul.append(li);
    });
    
    const img = document.createElement("img");
    img.src = obj.logo.img

    div.append(img, ul);
    body.append(div);
}





