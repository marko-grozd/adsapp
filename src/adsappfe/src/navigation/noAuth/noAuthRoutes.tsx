import AdForm from "../../compoments/ad/adForm";
import Home from "../../compoments/home";
import Login from "../../compoments/login";
import SignUp from "../../compoments/signup";

import APP_PATHS from "../paths";

export default [
  {
    component: Login,
    exact: true,
    path: APP_PATHS.LOGIN,
  },
  {
    component: Home,
    exact: true,
    path: APP_PATHS.HOME,
  },
  {
    component: SignUp,
    exact: true,
    path: APP_PATHS.SIGN_UP,
  },
  {
    component: AdForm,
    exact: true,
    path: APP_PATHS.AD_FORM,
  },
];
