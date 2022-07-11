export default function company(){
    const body = document.querySelector("body")
    const h1 = document.createElement("h1");
    const a = document.createElement("a");
    a.innerText = "Home"
    a.href = ("/index.html");
    h1.innerText = "Company";
    body.append(h1, a);
}