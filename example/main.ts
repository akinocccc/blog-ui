import { createApp } from "vue";
import AniUI from "@animation-ui/core";

import App from "./app.example.vue";
const app = createApp(App);
for (const key in AniUI) {
  app.use(AniUI[key]);
}

app.mount("#play");
