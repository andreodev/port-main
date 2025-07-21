import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      aria-label="Rodapé do site"
      className=" text-white py-6 text-center w-full mt-12"
    >
      <p className="text-sm select-none">
        © {new Date().getFullYear()} {t("footer.text")}
      </p>
    </footer>
  );
}

export default Footer;
