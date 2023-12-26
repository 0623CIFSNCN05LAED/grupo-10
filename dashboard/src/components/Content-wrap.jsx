import { Route, Switch } from "react-router-dom";
import Products from "./products/Products";
import Statistics from "./Content/Statistics";
import LastProduct from "./Content/LastProduct";
import LastUser from "./Content/LastUser";
import Categories from "./Content/Categories";
import OneProduct from "./Content/OneProduct";
import Home from "./Content/Home";

export default function ContentWrap() {
  return (
    <main className="content-wrap" style={{ maxHeight: "calc(100vh - 6rem)" }}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/lastProduct">
          <LastProduct />
        </Route>
        <Route path="/lastUser">
          <LastUser />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId" exact>
          <OneProduct />
        </Route>
        <Route path="*">
          <p>404 - página no encontrada</p>
        </Route>
      </Switch>
    </main>
  );
}
