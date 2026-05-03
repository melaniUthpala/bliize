import { useEffect, useRef } from 'react';
import './Sections.css';

export default function NotFoundPage({ onNavigate }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (window.google && mapRef.current) {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 10,
        styles: [{ elementType: 'geometry', stylers: [{ color: '#f5f5f5' }] },
                 { featureType: 'water', stylers: [{ color: '#c9c9c9' }] }],
      });
    }
  }, []);

  return (
    <div className="nf-page">
      <div className="nf-content">
        <span className="about-pill">Contact Us</span>
        <div className="nf-number">404</div>
        <h1 className="nf-heading">Oops! Page Not Found!</h1>
        <p className="nf-para">We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
        <button className="nf-btn" onClick={() => onNavigate('home')}>Back To Home</button>
      </div>
      <div className="nf-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949928!2d-74.11976397304631!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0, filter: 'grayscale(100%)' }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}