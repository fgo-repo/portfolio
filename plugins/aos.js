import AOS from "aos";
import "aos/dist/aos.css";

// https://michalsnik.github.io/aos/
export default ({ app }) => {
  app.AOS = new AOS.init({ disable: "mobile" });
};