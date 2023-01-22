import { render } from "solid-js/web";
import ShoppingBag from "./components/ShoppingBag";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <ShoppingBag />
  </div>
);
render(App, document.getElementById("app"));
