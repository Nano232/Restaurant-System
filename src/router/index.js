import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupVue from "@/components/Sighup/Signup.vue";
import LoninVue from "@/components/Login/Login.vue";
import Profile from "@/views/Profile.vue";
import UpdateProfile from "@/components/profile/UpdateProfile.vue";
import DeleteLocation from "@/views/DeleteLocation.vue";
import DeleteAllLocations from "@/views/DeleteAllLocations.vue";
import ErrorPage from "@/views/ErrorPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Signup",
    name: "SignupPage",
    component: SignupVue,
  },
  {
    path: "/Login",
    name: "LogInPage",
    component: LoninVue,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: Profile,
  },
  {
    path: "/updateprofile",
    name: "UpdateProfile",
    component: UpdateProfile,
  },
  {
    path: "/deleteLocation/:locationId",
    name: "DeleteLocation",
    component: DeleteLocation,
  },
  {
    path: "/deleteAllLocations",
    name: "DeleteAllLocations",
    component: DeleteAllLocations,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErroePage",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
