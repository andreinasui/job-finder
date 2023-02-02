import { useContext } from "react";
import {
  appRoutes,
  ErrorPage,
  HomePage,
  JoinUs,
  NotFound,
  WPFound,
} from "pages";
import { ProtectedRoute } from "components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  InquiryFinalisedContext,
  InquiryFinalisedContextProvider,
} from "./contexts";
import { RootLayout } from "./layouts";
import { inquiryLoader } from "pages/JoinUs/JoinUs";

const AppRouter = () => {
  const { isFinalised: isInquiryFinalised } = useContext(
    InquiryFinalisedContext
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={appRoutes.ROOT_PAGE} element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={appRoutes.JOINUS}
          element={<JoinUs />}
          loader={inquiryLoader}
          errorElement={<ErrorPage />}
        />
        <Route
          element={
            <ProtectedRoute
              isAllowed={isInquiryFinalised}
              redirectPath={appRoutes.HOME_PAGE}
            />
          }
        >
          <Route path={appRoutes.WORKPLACES} element={<WPFound />} />
        </Route>
        <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

const App = () => {
  return (
    <>
      <InquiryFinalisedContextProvider>
        <AppRouter />
      </InquiryFinalisedContextProvider>
    </>
  );
};

export default App;
