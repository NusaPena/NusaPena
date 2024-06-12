import About from "../views/pages/about";
import Main from "../views/pages/main";
import Explore from "../views/pages/explore";
import Favorite from "../views/pages/favorite";
import Detail from "../views/pages/detail";
import Personality from "../views/pages/personality";

const routes = {
    "/": Main,
    "/explore": Explore,
    "/favorite": Favorite,
    "/detail/:id": Detail,
    "/about": About,
    "/personality": Personality,
};

export default routes;