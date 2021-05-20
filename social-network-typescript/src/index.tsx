import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import state, { addPost, StateType, subscribe, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import { RootStateType } from './redux/state';


// export type AppPropsType = {
//     store: StoreType;
//   };
  
  let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
      <BrowserRouter>
        <React.StrictMode>
          <App store={store} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
    );
  };
  
  rerenderEntireTree(store.getState());

  store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
  })
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
