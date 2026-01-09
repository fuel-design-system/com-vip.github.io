import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/PaymentLoadingPage.scss';

export default function PaymentLoadingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const method = searchParams.get('method');

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      if (method === 'pix') {
        navigate('/payment/pix');
      } else if (method === 'card') {
        navigate('/payment/success?method=card');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [method, navigate]);

  const getLoadingText = () => {
    if (method === 'pix') return 'Gerando código Pix';
    if (method === 'card') return 'Processando pagamento...';
    return 'Aguarde...';
  };

  return (
    <div className="payment-loading-page">
      <div className="loading-content">
        <svg className="loading-spinner" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C19.1645 0 22.2579 0.938384 24.8891 2.69649C27.5203 4.45459 29.5711 6.95345 30.7821 9.87707C31.9931 12.8007 32.3099 16.0177 31.6926 19.1214C31.0752 22.2251 29.5513 25.0761 27.3137 27.3137C25.0761 29.5513 22.2251 31.0752 19.1214 31.6926C16.0177 32.3099 12.8007 31.9931 9.87706 30.7821C6.95345 29.5711 4.45459 27.5203 2.69649 24.8891C0.938384 22.2579 -3.77363e-08 19.1645 0 16L3.2 16C3.2 18.5316 3.95071 21.0063 5.35719 23.1113C6.76367 25.2162 8.76276 26.8569 11.1017 27.8257C13.4405 28.7945 16.0142 29.0479 18.4972 28.5541C20.9801 28.0602 23.2609 26.8411 25.051 25.051C26.8411 23.2609 28.0602 20.9801 28.5541 18.4972C29.0479 16.0142 28.7945 13.4405 27.8257 11.1017C26.8569 8.76276 25.2162 6.76367 23.1113 5.35719C21.0063 3.95071 18.5316 3.2 16 3.2V0Z" fill="url(#paint0_angular)"/>
          <defs>
            <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16 16) rotate(90) scale(16)">
              <stop offset="0.745" stopColor="#0769DA"/>
              <stop offset="1" stopColor="#0769DA" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>

        <div className="loading-text-container">
          <p className="loading-text">{getLoadingText()}</p>
        </div>
      </div>
    </div>
  );
}
