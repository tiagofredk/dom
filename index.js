import obj from "./components/text/text.js";
import home from "./components/home/home.js";
import navbar from "./components/navbar/navbar.js";
import company from "./components/company/company.js";
import About from "./components/about/about.js";

switch (window.location.hash) {
    case "":
        navbar(obj);
        home(obj.home);
        break;
    case "#Company":
        navbar(obj);
        company();
        break;
    case "#About":
        navbar(obj);
        new About();
        // console.log(myClass);
        // about();
    case "#Help":
        help();
    default:
        console.log("404");
}

// if (window.location.hash === ""){
//     navbar(obj);
//     home(obj.home);
//     // window.location.reload();
    
//     console.log(document.getElementsByClassName("navigation-item"));
    
// }else if(window.location.hash === "#Company"){
//     navbar(obj);
//     company();
//     // window.location.reload();
// }