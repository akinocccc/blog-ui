import { App } from "vue";
import Loading from "@components/loading/index";
import LoadingPlus from "@components/loading-plus/index";
import Text from "@components/text/index";

export { Loading, LoadingPlus, Text };

export default {
  install(app: App) {
    app.component("Loading", Loading);
    app.component("LoadingPlus", LoadingPlus);
    app.component("Text", Text);
  },
};
