import Tentang from "../views/pages/tentang";
import Main from "../views/pages/main";
import ExplorePage from "../views/pages/explore-page";
import Favorite from "../views/pages/favorite";
import Detail from "../views/pages/detail";

const routes = {
    "/": Main,
    "/explore-page": ExplorePage,
    "/favorite": Favorite,
    "/detail/:id": Detail,
    "/tentang": Tentang,
};

export default routes;