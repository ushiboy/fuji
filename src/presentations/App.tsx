import { useEffect, PropsWithChildren } from "react";
import { HashRouter, useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";
import { AppRoutes } from "./AppRoutes";

export function App() {
  return (
    <HashRouter>
      <TagManagerWrapper>
        <AppRoutes />
      </TagManagerWrapper>
    </HashRouter>
  );
}

function TagManagerWrapper({ children }: PropsWithChildren) {
  const location = useLocation();
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "page_view",
        pagePath: location.pathname,
      },
    });
  }, [location.pathname]);
  return children;
}
