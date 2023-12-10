import { Route, Switch } from "react-router-dom";
import Products from "./products/Products";
import Statistics from "./Content/Statistics";

export default function ContentWrap() {
  return (
    <main className="content-wrap" style={{ maxHeight: "calc(100vh - 6rem)" }}>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <p>404 - página no encontrada</p>
        </Route>
      </Switch>
    </main>
  );
}
