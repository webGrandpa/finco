import emailjs from '@emailjs/browser';

/**
 * Sends an email using EmailJS.
 * 
 * @param {string} templateId - The EmailJS template ID to use.
 * @param {object} templateParams - The parameters to send to the template.
 * @returns {Promise} - A promise that resolves if successful, rejects if failed.
 */
export const sendEmail = async (templateId, templateParams) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey || !templateId) {
    console.error('EmailJS Error: Missing configuration.', {
      serviceId: !!serviceId,
      publicKey: !!publicKey,
      templateId: !!templateId
    });
    return Promise.reject('Missing EmailJS configuration.');
  }

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Email send failed:', error);
    throw error;
  }
};
