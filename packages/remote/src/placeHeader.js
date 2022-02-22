import { createApp } from "vue";

import Header from "./Header.vue";

export default function placeHeader(el) {
  createApp(Header).mount(el);
}
