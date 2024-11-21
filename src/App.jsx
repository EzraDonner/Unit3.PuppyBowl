import { useState } from "react";

import { Provider } from "react-redux";
import store from "./store/store";

import PuppyList from "./features/puppies/PuppyList";

import "./App.scss";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  return (
    <Provider store={store}>
      <h1>Puppy Bowl</h1>
      <main>
        <PuppyList />
      </main>
    </Provider>
  );
}
