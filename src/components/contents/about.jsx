import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
            <div className="">
                <h1 className="text-4xl font-bold mb-4">{t('About.title')}</h1>
                <p className="mb-2 text-lg">
                    {t('About.sobre')}
                </p>
            </div>
    );
}
