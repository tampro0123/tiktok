import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Update from "~/pages/Update";
import Search from "~/pages/Search";
import { HeaderOnly } from "~/components/Layout";

const publicRoutes = [

  { path: '/', component: Home },
  { path: 'following', component: Following },
  { path: 'profile', component: Profile },
  { path: 'update', component: Update, layout: HeaderOnly },
  { path: 'search', component: Search, layout: null }

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }