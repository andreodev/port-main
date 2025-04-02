// src/components/Footer/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className=" text-white py-4 text-center  bottom-0 w-full">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} {t("footer.text")}
      </p>
    </footer>
  );
}

export default Footer;
