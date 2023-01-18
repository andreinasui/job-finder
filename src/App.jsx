import { useContext } from "react";
import { HomePage, JoinUs, NotFound, WPFound } from "./pages";
import { ProtectedRoute } from "./components";
import { appRoutes } from "./pages/constants";
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

const AppRouter = () => {
  const { isFinalised: isInquiryFinalised } = useContext(
    InquiryFinalisedContext
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={appRoutes.ROOT_PAGE} element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path={appRoutes.JOINUS} element={<JoinUs />} />
        <Route
          element={
            <ProtectedRoute
              // isAllowed={isInquiryFinalised}
              isAllowed={true}
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
