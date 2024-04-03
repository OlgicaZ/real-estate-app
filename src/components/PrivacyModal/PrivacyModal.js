import './PrivacyModal.scss';

import { IoIosClose } from "react-icons/io";

export default function PrivacyModal({ showModal, toggleModal }) {

    if (!showModal) {
        return null;
    }

    return (
        <section className='privacy-modal'>
            <div className="privacy-modal__content">
                <IoIosClose
                    className='privacy-modal__close-button'
                    onClick={toggleModal}
                />
                <div className='privacy-modal__policy'>
                    <h2>Privacy Policy</h2>
                    <p>
                        We are committed to respecting your right to privacy and protecting your information when you use our services.
                        <br />
                        <br />
                        This privacy policy also describes the choices available to you regarding our use of your personal information and how you can access and update this information.
                        <br />
                        <br />
                        We want you to understand what information we gather about you, how we use it and the safeguards we have in place to protect it. This Privacy Policy applies to information collected through this website and otherwise. Your use of this website and our services, and any disputes arising from it, is subject to this Privacy Policy as well as the Terms of Use and all its dispute resolution provisions, including arbitration, limitation on damages and choice of law.
                        <br />
                        <br />
                        This website is a general audience site and we do not knowingly collect personal information from children under the age of 13.
                        <br />
                        <br />
                        If you have questions or concerns regarding this policy, you should first contact our website and advertising vendor at support@ylopo.com
                        <br />
                        <br />
                        1. Collection and Use of Your Personal Information
                        <br />
                        <br />
                        We collect Personal Information from you only when you voluntarily submit it in order to obtain certain information, including without limitation (A) requests to find out more about our programs; (B) requests to contact us; and (C) requests to forward your information to one of our affiliates.
                        <br />
                        <br />
                        We do not honor all “do not track” requests and settings. If you use any signal(s) or another mechanism(s) that provides you the ability to exercise choice regarding the collection of personally identifiable information about your online activities over time and across third-party websites or online services, we will attempt to override such signals or mechanisms. When you use our website, no other parties can collect personally identifiable information about your online activities over time and across different websites. Your choice is indicated by your settings in your web browser. A “do not track” indication sent from your web browser will not result in any tracking activity (i.e., tracking cookies) within the website to be programmatically disabled.
                        <br />
                        <br />
                        We collect the following personal information from you:
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Contact Information such as name, email address, mailing ad
                        dress, and phone number
                        <br />
                        <br />
                        We use this information to:
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Send you requested product or service information
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Respond to customer service requests
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Administer your account
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Send you a newsletter
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Send you marketing communications
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Improve our Web site and marketing efforts
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Conduct research and analysis
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- Display content based upon your interests
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;- We may share this information with our vendor to improve our services and for our vendor's development of new products, features, and technologies that benefit our users, our vendor, and our vendor's other customers. For example, our vendor may use the information collected to help train AI models and improve its offerings or those of other third parties.
                        <br />
                        <br />
                        By clicking the Submit button, you agree to have your information shared with us and for us to contact you via telephone, mobile phone (including through automated dialing, text SMS/MMS, or pre-recorded messaging) and/or email, even if your telephone number is on a corporate, state, or the National Do Not Call Registry, and you agree to our Privacy Policy. To opt out of voice call, tell the operator you no longer wish to receive voice calls. To opt out of text calls, reply “Stop”. For text messaging, you agree to only use the term “Stop” to communicate an opt out.
                        <br />
                        <br />
                        Special Notice to California Residents. If you are a resident of California, in addition to the rights set forth in this Privacy Policy:
                        <br />
                        <br />
                        1. We will not share any personal information about you to the extent prohibited by applicable California law or to the extent your prior consent to share is required by applicable California law; and
                        <br />
                        <br />
                        2. You have the right to request information from us regarding the manner in which we share certain categories of information with third parties for their direct marketing purposes. California law gives you the right to send us a request at a designated address to receive the following information
                        <br />
                        <br />
                        the categories of information we disclosed to third parties for their direct marketing purposes during the preceding calendar year
                        the names and addresses of the third parties that received that information; and
                        if the nature of the third party's business cannot be determined from their name, examples of the products or services marketed.
                        The rights of Users
                        <br />
                        <br />
                        We adopt this Notice to comply with the California Consumer Privacy Act of 2018 (CCPA). Any terms defined in the CCPA have the same meaning when used in this Notice.
                        Users may exercise certain rights regarding their Data processed by the Owner.
                        In particular, Users have the right to do the following:
                        Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.
                        Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.
                        Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.
                        Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.
                        Restrict the processing of their Data. Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.
                        Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.
                        Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.
                        Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.
                        Details about the right to object to processing
                        <br />
                        <br />
                        Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.
                        <br />
                        <br />
                        Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.
                        <br />
                        <br />
                        How to exercise these rights
                        <br />
                        <br />
                        Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.
                        <br />
                        <br />
                        We may provide this information in a standardized format that is not specific to you. The designated email address for these requests is support@ylopo.com
                        <br />
                        <br />
                        Consent to Receiving Emails, Auto-Dialing & Auto-Texting:
                        <br />
                        <br />
                        By registering, you are giving us and our professional real estate clients and advertisers permission to contact you via text message, email, or telephone using the email address and/or telephone number that you have provided during the registration process. Such contact may, from time to time, include attempts to contact you via auto-dialing or auto-texting technology. You may opt out of receiving these forms of communication by unsubscribing from any email communication or texting STOP as a reply to one of our text communications. There is no fee charged by us or its advertisers to receive text messages, however, your mobile service provider may charge you for sending and/or receiving text messages and air-time, as well as any other standard applicable rates charged by your mobile service provider.
                        <br />
                        <br />
                        Information Sharing
                        <br />
                        <br />
                        We may share your personal information with business associated with this site, only in the ways that are described in this Privacy Statement. We may provide your personal information to our subcontractors in support of our services, such as customer service. These companies are authorized to use your personal information as is necessary to provide these services to you.
                        <br />
                        <br />
                        We may also disclose your personal information:
                        <br />
                        <br />
                        As required by law such as to comply with a subpoena, or similar legal process.
                        When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud or respond to a government request,
                        To any other third party with your prior consent to do so.
                        Cookies and Other Tracking Technologies
                        <br />
                        <br />
                        We may use cookies, for example, to keep track of your preferences and profile information. Cookies are also used to collect general usage and volume statistical information that does not include personal information.
                        <br />
                        <br />
                        We may use another company to place cookies on your computer to collect non-personally identifiable information to compile aggregated statistics for us about visitors to our site.
                        <br />
                        <br />
                        Links to Other Web Sites
                        <br />
                        <br />
                        Our Site includes links to other Websites whose privacy practices may differ from ours. If you submit personal information to any of those sites, your information is governed by their privacy policy statements. We encourage you to carefully read the privacy statement of any Web site you visit.
                        <br />
                        <br />
                        Security
                        <br />
                        <br />
                        The security of your personal information is important to us. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the internet, or method of electronic storage is 100% secure, however. Therefore, we cannot guarantee its absolute security. If you have any questions about the security of our Web site, you can contact our website and advertising provider support@ylopo.com
                        <br />
                        <br />
                        Additional Policy Information
                        <br />
                        <br />
                        Our Web site includes Widgets, which are interactive mini-programs that run on our site to provide specific services from another company (e.g. displaying the news, opinions, music, etc.). Personal information, such as your email address, may be collected through the Widget. Cookies may also be set by the Widget to enable it to function properly. Information collected by this Widget is governed by the privacy policy of the company that created it.
                        <br />
                        <br />
                        Our Web site offers publicly accessible blogs, social media, or community forums such as Facebook, Twitter, or Google Plus. You should be aware that any information you provide in these areas may be read, collected, and used by others who access them.
                        <br />
                        <br />
                        Visiting our Websites From Outside the United States.
                        <br />
                        <br />
                        This Privacy Policy is intended to cover collection of information on our websites from residents of the United States. If you are visiting our websites from outside the United States, please be aware that your information may be transferred to, stored and processed in the United States where our servers are located and our central database is operated. The data protection and other laws of the United States and other countries might not be as comprehensive as those in your country. By using our services, you understand that your information may be transferred to our facilities and those third parties with whom we share it as described in this Privacy Policy.
                        <br />
                        <br />
                        No Rights of Third Parties.
                        <br />
                        <br />
                        This Privacy Policy does not create rights enforceable by third parties or require disclosure of any personal information relating to users of our websites.
                        <br />
                        <br />
                        Notification of Privacy Policy Statement Changes
                        <br />
                        <br />
                        We may update this privacy statement to reflect changes to our information practices or changes in regulations governing privacy. If we make any material changes we will notify you by email (sent to the email address specified in your account) or by means of a notice on this Site prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.
                        <br />
                        <br />
                        This Privacy Policy was last revised on January 12, 2024. We reserve the right to modify or amend this policy at any time by posting the revised Privacy Policy on the website
                    </p>
                    <div
                        className='privacy-modal__accept-button'
                        onClick={toggleModal}
                    >
                        Accept
                    </div>
                </div>
            </div>
        </section>
    )
}