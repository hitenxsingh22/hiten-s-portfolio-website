import Loader from "react-loaders";
import './pacman.scss';
import './index.scss';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet' 
const Contact = () => {
    const refForm = useRef(null); // Initialize the reference

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(
                'service_uouqegb',
                'template_5wcobkj',
                refForm.current, 
                'ppfZxPY-QHWCqATyy'  
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result);
                    alert("Message sent successfully!");
                    window.location.reload(false);
                },
                (error) => {
                    console.error('Email sending error:', error);
                    alert("Failed to send the message");
                }
            );
    };
    

    return (
        <>
            <div className="contact-page">
                <div className="text-zone">
                    <h1>Contact me</h1>
                    <p>
                        Feel free to reach out if you have any questions, collaboration ideas, or just want to connect. Whether you're interested in discussing a potential project, need advice on a tech stack, or simply want to share insights, I'm here to help. Your messages are always valued, and I look forward to engaging with fellow tech enthusiasts, potential clients, and anyone eager to explore innovative solutions together.<br/> Don't hesitate to get in touch—I'm excited to hear from you!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="text" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message"></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">

                    Hiten Singh,
                    <br/>
                    India,
                    <br/>
                    Greater Noida
                    <br/>
                     Uttar Pradesh, 201310
                     <br/>
                     <span>hitensingh2212@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[28.4828, 77.5114]} zoom={13} >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[28.4828, 77.5114]}>
                            <Popup>Hiten's Place of Residence</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>







            {/* <Loader type="pacman"/> loading container disabled */}
        </>
    );
};

export default Contact;
