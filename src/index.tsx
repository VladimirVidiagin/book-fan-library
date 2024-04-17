import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import client from "./apollo/client";
import { store } from "./app/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </>
);
