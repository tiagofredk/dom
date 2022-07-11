export default function company(){
    const body = document.querySelector("body")
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const a = document.createElement("a");

    div.classList.add("company-container");

    a.innerText = "Home"
    a.href = ("/index.html");
    h1.innerText = "Company";
    div.append(h1, a);
    body.append(div);
}