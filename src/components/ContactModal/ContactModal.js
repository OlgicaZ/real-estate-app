import './ContactModal.scss';
import { IoIosClose } from "react-icons/io";
import * as Yup from 'yup';
import emailjs from 'emailjs-com'; // Import EmailJS library
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactModal({ showModal, toggleModal }) {

    const env = {
        SERVICE_ID: 'service_7sxk4sc',
        TEMPLATE_ID: 'contact_form',
        PUBLIC_KEY: 'Whngj3oMgM3tpqLMG'
    }

    const contactFormSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        phoneNumber: Yup.string()
            .matches(/^\+?\s?1?\s?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid phone number')
            .required('Required'),
        subject: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        message: Yup.string()
            .min(10, 'Message is too short')
            .required('Required'),
        marketingConsent: Yup.bool()
            .oneOf([true], 'You must accept the marketing communications to continue.')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const formParameters = {
            name: values.firstName + ' ' + values.lastName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            subject: values.subject,
            message: values.message,
            marketingConsent: values.marketingConsent
        }

        emailjs.send(env.SERVICE_ID, env.TEMPLATE_ID, formParameters, env.PUBLIC_KEY)
            .then((response) => {
                //console.log('Email sent successfully!', response);
                alert('Your message has been sent successfully!');
                resetForm();
            })
            .catch((error) => {
                //console.error('Error sending email:', error);
                alert('An error occurred while sending your message. Please try again later.');
            })
            .finally(() => {
                setSubmitting(false);
                toggleModal();
            });
    }

    if (!showModal) {
        return null;
    }

    return (
        <div className='contact-modal'>
            <div className='contact-modal__content'>
                <IoIosClose
                    className='contact-modal__close-button'
                    onClick={toggleModal}
                />
                <div className='contact-modal__form-container'>
                    <h2>Contact Us</h2>
                    <Formik
                        className='contact-modal__form'
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phoneNumber: '',
                            subject: '',
                            message: '',
                            marketingConsent: false
                        }}
                        validationSchema={contactFormSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <label className='contact-modal__label' htmlFor='firstName'>First Name</label>
                            <Field name='firstName' id='firstName' type='text' />
                            <ErrorMessage className='contact-modal__error-message' name='firstName' component='div' />

                            <label className='contact-modal__label' htmlFor='lastName'>Last Name</label>
                            <Field name='lastName' id='lastName' type='text' />
                            <ErrorMessage className='contact-modal__error-message' name='lastName' component='div' />

                            <label className='contact-modal__label' htmlFor='email'>Email</label>
                            <Field name='email' id='email' type='email' autoComplete='email' />
                            <ErrorMessage className='contact-modal__error-message' name='email' component='div' />

                            <label className='contact-modal__label' htmlFor='phoneNumber'>Phone Number</label>
                            <Field name='phoneNumber' id='phoneNumber' type='tel' />
                            <ErrorMessage className='contact-modal__error-message' name='phoneNumber' component='div' />

                            <label className='contact-modal__label' htmlFor='subject'>Subject</label>
                            <Field name='subject' id='subject' type='text' />
                            <ErrorMessage className='contact-modal__error-message' name='subject' component='div' />

                            <label className='contact-modal__label' htmlFor='message'>Message</label>
                            <Field name='message' id='message' as='textarea' />
                            <ErrorMessage className='contact-modal__error-message' name='message' component='div' />

                            <div className='contact-modal__consent-container'>
                                <Field name="marketingConsent" type="checkbox" id="marketingConsent" />
                                <label className='contact-modal__consent-statement' htmlFor="marketingConsent">
                                    I agree to receive marketing communications via voice call, AI voice call, text message or similar automated means from Keller Williams Realty Miami Lakes. Consent is not a condition of purchase. Msg/data rates may apply. Msg frequency varies. Reply STOP to unsubscribe.
                                </label>
                            </div>
                            <ErrorMessage className='contact-modal__error-message' name="marketingConsent" component="div" />

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}