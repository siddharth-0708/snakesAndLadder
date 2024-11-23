import { createStore } from "redux";
import { combined } from "./reducer";

export const oldStore = createStore(combined);