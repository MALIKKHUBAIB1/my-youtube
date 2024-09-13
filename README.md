# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

      component that we have to build 
       Header 
       Body Comonent will have two components
         1->SideBar 
          2->Video container (it contain  list of  video )
       Filter button just like header 
       Video Detail Page with sideBar
       and more..... 

#Debouncing
  for each and every key press i can make an api call
    ->or instead of making an api call for each key stroke we can make an api call if the diffrence beyween two api calls is 200ms
    ->or we can decline the api call if the diffrence is greater than 200ms

-> dry run it 
  key press -> i 
    =>component will  render
    and then useEffect call and register the timer when the timer is complete it will  make an api call  after the 200ms
  => and then in unmounting phase we have to clean the timer using the clearTimeout becuse of the  memory leaks

 key press -> ip
   component will  render
    and then useEffect call and register the timer when the timer is complete it will  make an api call  after the 200ms
     and then in unmounting phase we have to clean the timer using the clearTimeout becuse of the memory leaks 
