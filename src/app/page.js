"use client"
import Header from "./components/Header";
import Main from "./pages/Main";
import { Provider } from 'react-redux'
import { store } from "./store";
export default function Home() {
  return (

    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}
