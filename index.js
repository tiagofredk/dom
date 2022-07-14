import "./main.scss";
import obj from "./components/text/text.js";
// import {sum} from "./components/utils.js";
import home from "./components/home/home.js";
import navbar from "./components/navbar/navbar.js";
import company from "./components/company/company.js";
import About from "./components/about/about.js";
import Page404 from "./components/404/404.js";

// Render the pages acordingly to the location.hash
try {
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
            break;
        case "#Help":
            navbar(obj);
            console.log("Help");
            break;
        default:
            new Page404();
            break;
    }
} catch (error) {
    console.log(error.message);
}