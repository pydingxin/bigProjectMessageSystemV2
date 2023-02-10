// 各组件引入后，可直接使用naiveUi的独立api工具

import {
  createDiscreteApi,
} from "naive-ui";

const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ["message", "dialog", "notification", "loadingBar"],
);

function notifyFail(msg){
  notification['error']({
    content: "未成功",
    meta: msg,
    duration: 2500,
    keepAliveOnHover: true
  });
}
function notifySuccess(msg){
  notification['success']({
    content: "成功",
    meta: msg,
    duration: 2500,
    keepAliveOnHover: true
  });
}


export default {
  message, notification, dialog, loadingBar,
  notifyFail,notifySuccess
}
