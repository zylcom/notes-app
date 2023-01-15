import AddNotePage from "./pages/AddNotePage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";
import FloatingToggle from "./components/FloatingToggle";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoadingSpinner from "./components/LoadingSpinner";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/PageNotFound";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/networkData";
import { LocaleContext, ThemeContext } from "./contexts";
import { performSearch } from "./utils";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import { useAuthUser, useCustomContext } from "./hooks";
import { useEffect, useState } from "react";

function App() {
  const [authedUser, initializing, setAuthedUser] = useAuthUser(null);
  const { context: theme, contextValue: themeContextValue } = useCustomContext(
    "theme",
    "dark",
    "light"
  );
  const { contextValue: localeContextValue } = useCustomContext(
    "locale",
    "id",
    "en"
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const navigate = useNavigate();

  function onKeywordChangeHandler(e) {
    setKeyword(e.target.value);
    setSearchParams({ keyword: e.target.value });
  }

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
    navigate("/login");
  }

  useEffect(() => {
    if (searchParams.get("keyword") === null) {
      setKeyword("");
    }
  }, [searchParams.get("keyword")]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (initializing) {
    return (
      <LocaleContext.Provider value={localeContextValue}>
        <LoadingSpinner />
      </LocaleContext.Provider>
    );
  }

  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <FloatingToggle />
          <Routes>
            <Route path="*" element={<LandingPage />} />
            <Route
              path="/login"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <FloatingToggle />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                keyword={keyword}
                searchNote={performSearch}
                keywordChange={onKeywordChangeHandler}
                onLogoutHandler={onLogout}
              />
            }
          />
          <Route
            path="/archives"
            element={
              <ArchivePage
                keyword={keyword}
                searchNote={performSearch}
                keywordChange={onKeywordChangeHandler}
                onLogoutHandler={onLogout}
              />
            }
          />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LocaleContext.Provider>{" "}
    </ThemeContext.Provider>
  );
}

export default App;
