import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import SearchBar from "../Component/Header/SearchBar";
import UserHandler from "../Component/Header/UserHandler";
import Logo from "../Component/Header/Logo";
import { useEffect, useState } from "react";
import { SUGGESTION_URL } from "../utils/constant";
import ErrorPage from "../utils/Error/ErrorPage";
function Header() {
  const [searchQuaery, setSearchQueary] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
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
      console.log(data);
      setSuggestion(data);
    } catch (error) {
      setError(error);
    }
  };

  // for each and every key press i can make an api call
  // or instead of making an api call for each key stroke we can make an api call if the diffrence beyween two api calls is 200ms
  // or we can decline the api call if the diffrence is greater than 200ms
  useEffect(() => {
    let debounceFn = setTimeout(() => {
      if(searchQuaery){
      getSearchSuggestionHandler(SUGGESTION_URL);
      }
    }, 2000);
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
    <header className="grid grid-flow-col shadow-md m-2 items-center sticky top-0 ">
      <Logo toogleMenuHandler={toogleMenuHandler} />
      <SearchBar inputChnageHandler={inputChnageHandler} value={searchQuaery} />
      <UserHandler />
    </header>
  );
}

export default Header;
