import { Router } from "./router.js";
import "./active.js";

const router = new Router();

router.add("/SPAUniverse/", "pages/home.html");
router.add("/SPAUniverse/universe", "pages/universe.html");
router.add("/SPAUniverse/exploration", "pages/exploration.html");
router.add("/SPAUniverse/404", "pages/404.html")

router.handle();

window.onpopstate = () => router.handle();

window.route = () => router.route();
