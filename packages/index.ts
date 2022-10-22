import * as Components from "./components";
import { makeInstaller } from "./utils/install";

export const components = Components;
export default makeInstaller(Object.values(components));
