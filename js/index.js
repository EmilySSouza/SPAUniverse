import { Router } from "./router.js";
import "./active.js";

const router = new Router();

router.add("/", "/SPAUniverse/pages/home.html");
router.add("/universe", "/SPAUniverse/pages/universe.html");
router.add("/exploration", "/SPAUniverse/pages/exploration.html");
router.add(404, "/SPAUniverse/pages/404.html")

router.handle();

window.onpopstate = () => router.handle();

window.route = () => router.route();
