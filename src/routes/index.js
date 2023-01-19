import { HeaderOnly } from "~/components/Layout";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Update from "~/pages/Update";
import Search from "~/pages/Search";

const publicRoutes = [

  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/:nickname', component: Profile },
  { path: '/update', component: Update, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null }

]

const privateRoutes = []

export { publicRoutes, privateRoutes }