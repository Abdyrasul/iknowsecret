import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Send": "Send",
      "Optional": "Optional",
      "SHARE_SECRET": "SHARE SECRET",
      "HOME": "HOME",
      "Name": "Name",
      "Share_your_secret_with_us" : "Share your secret with us",
      "SUCCESSFUL": "SUCCESSFUL",
      "UNSUCCESSFUL": "UNSUCCESSFUL"
    }
  },
  tm: {
    translation: {
      "Send": "Iber",
      "Optional": "Meýletin",
      "SHARE_SECRET": "SYR PAÝLAŞ",
      "HOME": "BAŞ SAHYPA",
      "Name": "Ady",
      "Share_your_secret_with_us" : "Syryňy biz bilen paýlaş",
      "SUCCESSFUL": "ÜSTÜNLIKLI",
      "UNSUCCESSFUL": "ÜSTÜNLIKSIZ"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tm",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;