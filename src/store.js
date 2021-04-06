import { makeAutoObservable, runInAction } from "mobx";

import { createContext } from "react";
import test_data from "./data.json";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Store {
  isLoading = false;
  locations = [];
  envs = [];
  servers = [];

  fetchData = async () => {
    await sleep(3000);
    runInAction(() => {
      this.locations = test_data.locations;
      this.envs = test_data.envs;
      this.servers = test_data.servers;
      this.isLoading = true;
    });
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
export const storeContext = createContext(store);
