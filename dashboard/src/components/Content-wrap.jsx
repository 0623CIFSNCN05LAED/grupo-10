import { Route, Switch } from "react-router-dom";
import Products from "./products/Products";

export default function ContentWrap() {
  return (
    <main className="content-wrap" style={{ maxHeight: "calc(100vh - 6rem)" }}>
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/statistics"></Route>
        <Route path="*">
          <p>404 - página no encontrada</p>
        </Route>
      </Switch>
    </main>
  );
}
