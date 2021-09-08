import { join } from "lodash";
import "./css/index.css";
import DemoSvgImg from "./assets/work-order.svg";
// import dataCsv from "./assets/data/data.csv";
// import dataXml from "./assets/data/data.xml";
// import toml from "./assets/data/data.toml";
// import yaml from "./assets/data/data.yaml";
// import json from "./assets/data/data.json5";
import demoFunc from "./demo.js";

// const renderDom = () => {
//   const ele = document.createElement("div");
//   const btn = document.createElement("button");
//   ele.innerHTML = join(["webpack", "demo"], "-");
//   const classnameList = ["container"];
//   ele.classList.add(...classnameList);

//   const eleImg = new Image();
//   eleImg.src = DemoSvgImg;
//   eleImg.className = "img";
//   ele.appendChild(eleImg);

//   btn.innerHTML = "click me332";
//   btn.onclick = demoFunc;
//   ele.appendChild(btn);

//   //   console.table("dataCsv", dataCsv);
//   //   console.log("dataXml", dataXml);

//   //   console.log(toml.title); // output `TOML Example`
//   //   console.log(yaml.title); // output `YAML Example`
//   //   console.log(json.title); // output `JSON5 Example`

//   return ele;
// };

const renderDom = async () => {
  const ele = document.createElement("div");
  const { default: _ } = await import("lodash");
  ele.innerHTML = join(["webpack", "demo"], "-");

  return ele;
};

renderDom.then((dom) => {
  document.body.appendChild(dom);
});

document.body.appendChild(renderDom());
