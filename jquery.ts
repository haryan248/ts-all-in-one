$("p").removeClass("myClass noClass").addClass("yourClass");
$("p").removeClass(["myClass", "noClass"]).addClass("yourClass");
// this 로 시작된 타입은 this에 타이핑하는 것

$(["p", "t"]).text("hello");
const tag = $("ul li").addClass(function (index) {
  return "item-" + index;
});
$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data("name") + "입니다";
});

tag.on("click", function () {
  console.log(this);
});

import $ from "jquery";
export default $;

// const $ = require("jquery"); //

// import $ = require("jQuery"); // TS 에서 import하는법
// import * as $ from 'jQuery'; // 위와 동일한 문법
// import $ from 'jQuery'; // tsconfig의 esModuleInterop true 시 가능 (commonjs 문법을 esmodule로 가능하도록)

// export = jQuery; // 타입스크립트에서 commonjs 라이브러리를 표시하는 방식
// module.export = jQuery // 위와 동일

interface zQuery {
  text(param?: string | number | boolean | ((this: this, index: number) => string | number | boolean)): this;
  html(param: string | Document | DocumentFragment): void;
}

const $tag: zQuery = $(["p", "t"]) as unknown as zQuery;

$tag.text("123");
$tag.text(123);
$tag.text(function (index) {
  console.log(this, index);
  return true;
});
$tag.text().html(document);
$($tag).html(document);
