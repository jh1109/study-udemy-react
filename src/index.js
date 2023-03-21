import ReactDOM from "react-dom/client";
// react-dom이라는 서드파티 라이브러리(의존성 중 하나)

import "./index.css";
// 일반적인 js에서는 동작하지 않음! JS에서는 CSS를 불러올 수 없음.
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
