import obj from "./components/text/text.js";
import home from "./components/home/home.js";
import navbar from "./components/navbar/navbar.js";
import company from "./components/company/company.js";

// switch (window.location.pathname) {
//     case "/index.html":
//         navbar(obj);
//         home(obj.home);
//         break;
//     case "/index.html#Company":
//         company();
//         break;
//     default:
//         console.log("404");
// }
if (window.location.pathname === "/index.html"){
    navbar(obj);
    home(obj.home);
}else if(window.location.pathname === "/index.html#Company"){
    company();
}