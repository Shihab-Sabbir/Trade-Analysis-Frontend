import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/global.scss";
import "./styles/antdOverrides.scss";
import router from "./router/router";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App, ConfigProvider } from "antd";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import { antdThemetoken } from "./styles/antdThemeToken";
import LoadingScreen from "./components/loaders/LoadingScreen";

nProgress.configure({
  showSpinner: false,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={antdThemetoken}>
        <App>
          <StyleProvider hashPriority="high">
            <Suspense fallback={<LoadingScreen />}>
              <RouterProvider router={router} />
            </Suspense>
          </StyleProvider>
        </App>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
