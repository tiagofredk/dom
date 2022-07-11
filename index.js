import obj from "./components/text/text.js";
import home from "./components/home/home.js";
import navbar from "./components/navbar/navbar.js";
import company from "./components/company/company.js";

let reload = false
console.log(window);
console.log(location.hash);

// switch (window.location.hash) {
//     case "":
//         navbar(obj);
//         home(obj.home);
//         break;
//     case "#Company":
//         company();
//         break;
//     case "#About":
//         about();
//     case "#Help":
//         help();
//     default:
//         console.log("404");
// }

if (window.location.hash === ""){
    navbar(obj);
    home(obj.home);
    window.location.reload();
}else if(window.location.hash === "#Company"){
    company();
    window.location.reload();
}