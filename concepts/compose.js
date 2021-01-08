const compose = (...funcs) => deger => {
  debugger;
  return funcs.reverse().reduce((baslangicDegeri, f) => {
    debugger;
    return f(baslangicDegeri);
  }, deger);
};

const kelimelereAyir = cumle => cumle.split(" ");
const say = array => array.length;

const tekMiCiftMi = sayi => (sayi % 2 == 0 ? "çift" : "tek");
export const kelimeleriSayTekMiCiftMi = compose(
  tekMiCiftMi,
  say,
  kelimelereAyir
);

//usage
//kelimeleriSayTekMiCiftMi("JavaScript ile fonksiyonel programlama çok eğlenceli.");
