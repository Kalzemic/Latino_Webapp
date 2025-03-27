
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './ContactPage.css'
function ContactPage() {

    const whatsappLink = "...";
    const InstaLink = "...";

    return (
        <div className="page-content">
            <div className="contact-grid">
                <h1> צרו קשר</h1>
                <button className="Whatsapp-button"
                    onClick={() => window.open(whatsappLink, "_blank")}>
                    הצטרפו אלינו ב-WhatsApp
                    <FaWhatsapp className="whatsapp-icon" />
                </button>
                <button className="Instagram-button"
                    onClick={() => window.open(InstaLink, "_blank")}>
                    עמוד האינסטגרם שלנו
                    <FaInstagram className="Instagram-icon" />
                </button>
            </div>
        </div>
    );
}


export default ContactPage;