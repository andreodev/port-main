import { useState } from 'react';
import emailjs from 'emailjs-com';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mjhh8bk', 'template_vjsjysw', e.target, 'lP7SL1kR-MI11unzn')
      .then(
        () => {
          setFormData(initialState);
          setShowModal(true);
          setTimeout(() => window.location.reload(), 3000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const closeModal = () => setShowModal(false);

  return (
    <section id="contact" className="py-16 bg-gray-900 bg-opacity-80">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12">{t('Contact.title')}</h2>

        <form name="contactForm" onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              id="name"
              placeholder={t('Contact.placeholderName')}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t('Contact.placeholderEmail')}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-600 bg-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder={t('Contact.placeholderMessage')}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-6 w-full rounded-md border border-gray-600 bg-gray-700 text-white px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <div className="text-center mt-8">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 text-white font-semibold px-10 py-3 rounded-md shadow-md transition"
            >
              {t('Contact.submitButton')}
            </button>
          </div>
        </form>

        <div className="mt-12 flex justify-center">
          <a
            href="https://api.whatsapp.com/send/?phone=92991784771&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="4x" />
          </a>
        </div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">{t('contact.modalSuccessTitle')}</h3>
            <p className="text-gray-700">{t('contact.modalSuccessSubtitle')}</p>
            <button
              onClick={closeModal}
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            >
              {t('contact.modalCloseButton')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
