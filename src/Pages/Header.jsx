import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import SearchBar from "../Component/Header/SearchBar";
import UserHandler from "../Component/Header/UserHandler";
import Logo from "../Component/Header/Logo";
import { useEffect, useState } from "react";
import { SUGGESTION_URL } from "../utils/constant";
import ErrorPage from "../utils/Error/ErrorPage";
import { cacheResults } from "../utils/appstore/Slice/searchslice";
function Header() {
  const [searchQuaery, setSearchQueary] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);
  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };
  function inputChnageHandler(e) {
    setSearchQueary(e);
  }
  const getSearchSuggestionHandler = async (url) => {
    try {
      const response = await fetch(url + searchQuaery);
      if (!response.ok) return;
      const data = await response.json();
      if (data && data.length > 0) {
        setSuggestion(data[1]);
      }
      dispatch(cacheResults({ [searchQuaery]: data[1] }));
      if (data.length === 0) {
        setSuggestion("No suggestion found");
      }
    } catch (error) {
      setError(error);
    }
  };

  // for each and every key press i can make an api call
  // or instead of making an api call for each key stroke we can make an api call if the diffrence beyween two api calls is 200ms
  // or we can decline the api call if the diffrence is greater than 200ms
  useEffect(() => {
    let debounceFn = setTimeout(() => {
      // check if the queary in the memory
      if (searchCache[searchQuaery]) {
        setSuggestion(searchCache[searchQuaery]);
      } else if (searchQuaery) {
        getSearchSuggestionHandler(SUGGESTION_URL);
      }
    }, 200);
    return () => clearTimeout(debounceFn);
  }, [searchQuaery]);
  // dry run it
  // key press -> i
  // component will  render
  // and then useEffect call and register the timer when the timer is complete it will  make an api call  after the 200ms
  // and then in unmounting phase we have to clean the timer using the clearTimeout becuse of the memory leaks

  // key press -> ip
  // component will  render
  // and then useEffect call and register the timer when the timer is complete it will  make an api call  after the 200ms
  // and then in unmounting phase we have to clean the timer using the clearTimeout becuse of the memory leaks

  if (error) {
    return (
      <ErrorPage
        message={error.message || "failed to fetch Data"}
        status={error.status || 401}
      />
    );
  }
  return (
    <header className="grid grid-flow-col shadow-md p-1 items-center sticky top-0 bg-white z-50">
      <Logo toogleMenuHandler={toogleMenuHandler} />
      <SearchBar
        inputChnageHandler={inputChnageHandler}
        value={searchQuaery}
        suggestion={suggestion}
      />
      <UserHandler />
    </header>
  );
}

export default Header;
