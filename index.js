// Import stylesheets
import "./style.css";
import { curryWithSum } from "./concepts/curry";
import { kelimeleriSayTekMiCiftMi } from "./concepts/compose";
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>${kelimeleriSayTekMiCiftMi("JavaScript ile fonksiyonel programlama çok eğlenceli.")}</h1>`;
