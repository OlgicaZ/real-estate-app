import './ContactModal.scss';

import { IoIosClose } from "react-icons/io";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactModal({ showModal, toggleModal }) {

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
            .required('Required')
    });

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
                            message: ''
                        }}
                        validationSchema={contactFormSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                resetForm();
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <label htmlFor='firstName'>First Name</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component='div' />

                            <label htmlFor='lastName'>Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component='div' />

                            <label htmlFor='email'>Email</label>
                            <Field name='email' type='email' />
                            <ErrorMessage name='email' component='div' />

                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <Field name='phoneNumber' type='tel' />
                            <ErrorMessage name='phoneNumber' component='div' />

                            <label htmlFor='subject'>Subject</label>
                            <Field name='subject' type='text' />
                            <ErrorMessage name='subject' component='div' />

                            <label htmlFor='message'>Message</label>
                            <Field name='message' as='textarea' />
                            <ErrorMessage name='message' component='div' />

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}