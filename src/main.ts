import { createApp } from "vue";
import App from "./App.vue";
import {
  ElInput,
  ElSelect,
  ElButton,
  ElIcon,
  ElOption,
  ElRow,
  ElCol,
  ElAutocomplete,
} from "element-plus";
import axios from "axios";
import "./style/index.scss";

const app = createApp(App);
app.component(ElInput.name, ElInput);
app.component(ElSelect.name, ElSelect);
app.component(ElButton.name, ElButton);
app.component(ElIcon.name, ElIcon);
app.component(ElOption.name, ElOption);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElAutocomplete.name, ElAutocomplete);

app.use(function (vue) {
  vue.config.globalProperties.$http = axios;
});

app.mount("#app");
