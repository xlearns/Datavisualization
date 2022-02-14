import { getCurrentInstance } from "vue";
export const $ = function(el) {
	return document.querySelector(el);
}

export const echarts = function(){
  let {proxy} = getCurrentInstance()
  return proxy.$echarts
}