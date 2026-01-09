import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PaymentCheckoutPage.scss';

type PaymentMethod = 'pix' | 'card' | null;

export default function PaymentCheckoutPage() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('pix');

  const handlePayment = () => {
    if (selectedMethod === 'pix') {
      navigate('/payment/loading?method=pix');
    } else if (selectedMethod === 'card') {
      navigate('/payment/loading?method=card');
    }
  };

  const getButtonLabel = () => {
    if (selectedMethod === 'pix') return 'Gerar código Pix';
    if (selectedMethod === 'card') return 'Pagar agora no cartão';
    return 'Continuar';
  };

  return (
    <div className="payment-checkout-page">
      <div className="checkout-header">
        <button className="back-button" onClick={() => navigate('/pending-payment')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.95185 17.6537L4.29785 11.9999L9.95185 6.34619L11.0056 7.43069L7.18635 11.2499H19.7019V12.7499H7.18635L11.0056 16.5692L9.95185 17.6537Z" fill="#111111"/>
          </svg>
        </button>
        <h1 className="checkout-title">Pagamento pendente</h1>
      </div>

      <div className="checkout-content">
        <div className="checkout-section">
          <h2 className="section-title">Pagar taxa de serviço</h2>

          <div className="cards-container">
            {/* Fee Summary */}
            <div className="fee-summary">
              <span className="fee-label">Taxa de serviço</span>
              <span className="fee-amount">R$ 49,90</span>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods-section">
              <p className="methods-label">Escolha uma forma de pagamento:</p>

              {/* Pix Option */}
              <div 
                className={`payment-option ${selectedMethod === 'pix' ? 'selected' : ''}`}
                onClick={() => setSelectedMethod('pix')}
              >
                <div className="option-content">
                  <svg className="payment-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7319 13.4361C11.9419 13.2261 12.3089 13.2254 12.519 13.4361L15.5112 16.4283C16.0646 16.9815 16.8007 17.2867 17.5834 17.2867H17.9438L14.143 21.0875L14.0297 21.1949C12.8784 22.2349 11.1214 22.2349 9.97013 21.1949L9.85685 21.0875L6.06681 17.2974H6.65665C7.43922 17.2974 8.17545 16.993 8.72892 16.44L11.7319 13.4361ZM5.21818 7.55128C5.26644 7.56946 5.31777 7.5825 5.37247 7.58253H6.65665C7.19652 7.58253 7.72537 7.80128 8.10685 8.18312L11.1098 11.1861C11.3897 11.4658 11.7575 11.606 12.1254 11.606C12.493 11.606 12.861 11.4661 13.141 11.1861L16.1332 8.19386C16.467 7.85986 16.9133 7.6502 17.3813 7.60304L17.5834 7.59327H18.6274C18.6852 7.59327 18.7399 7.58031 18.7905 7.56007L21.0873 9.85695C22.2707 11.0406 22.2708 12.9595 21.0873 14.1431L18.7905 16.44C18.7399 16.4197 18.6852 16.4068 18.6274 16.4068H17.5834C17.0436 16.4068 16.5147 16.1879 16.1332 15.8062L13.141 12.814C12.5987 12.2712 11.6526 12.2716 11.1098 12.814L8.10685 15.8169C7.72537 16.1987 7.19652 16.4175 6.65665 16.4175H5.37247C5.31777 16.4175 5.26653 16.4306 5.21818 16.4488L2.91251 14.1431C1.76592 12.9965 1.73026 11.16 2.80509 9.97023L2.91251 9.85695L5.21818 7.55128ZM9.85685 2.91259C11.0404 1.72902 12.9593 1.72899 14.143 2.91259L17.9438 6.71339H17.5834C16.8009 6.71339 16.0646 7.01785 15.5112 7.57081L12.518 10.564C12.3011 10.7811 11.948 10.7803 11.7319 10.564L8.72892 7.56007C8.17545 7.00693 7.43927 6.70265 6.65665 6.70264H6.06681L9.85685 2.91259Z" fill="#636B7E"/>
                  </svg>
                  <span className="option-label">Pagar via Pix</span>
                </div>
                <div className="radio-button">
                  <div className={`radio-circle ${selectedMethod === 'pix' ? 'checked' : ''}`}>
                    {selectedMethod === 'pix' && <div className="radio-inner"></div>}
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              {/* Card Option */}
              <div 
                className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setSelectedMethod('card')}
              >
                <div className="option-content">
                  <svg className="payment-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2451 6.1792H8.75537V17.8413H15.2451V6.1792Z" fill="#FF5F00"/>
                    <path d="M9.16737 12.0105C9.16635 10.8874 9.42086 9.77873 9.91165 8.76848C10.4024 7.75824 11.1166 6.87289 12.0002 6.17946C10.906 5.31945 9.59201 4.78462 8.20829 4.63611C6.82457 4.48759 5.42699 4.73138 4.17527 5.33961C2.92356 5.94784 1.86822 6.89597 1.12988 8.07562C0.391546 9.25528 0 10.6189 0 12.0105C0 13.4022 0.391546 14.7658 1.12988 15.9455C1.86822 17.1251 2.92356 18.0732 4.17527 18.6815C5.42699 19.2897 6.82457 19.5335 8.20829 19.385C9.59201 19.2365 10.906 18.7016 12.0002 17.8416C11.1166 17.1482 10.4024 16.2628 9.91165 15.2526C9.42087 14.2423 9.16635 13.1337 9.16737 12.0105V12.0105Z" fill="#EB001B"/>
                    <path d="M23.9998 12.0105C23.9998 13.4022 23.6083 14.7658 22.87 15.9454C22.1317 17.1251 21.0764 18.0732 19.8247 18.6814C18.5731 19.2897 17.1755 19.5335 15.7918 19.385C14.4081 19.2365 13.0941 18.7016 12 17.8416C12.8828 17.1475 13.5964 16.262 14.0871 15.2519C14.5778 14.2418 14.8328 13.1335 14.8328 12.0105C14.8328 10.8876 14.5778 9.77925 14.0871 8.76917C13.5964 7.75908 12.8828 6.87359 12 6.17946C13.0941 5.31945 14.4081 4.78462 15.7918 4.63611C17.1755 4.48759 18.5731 4.73139 19.8247 5.33962C21.0764 5.94786 22.1317 6.89599 22.87 8.07565C23.6083 9.25531 23.9998 10.6189 23.9998 12.0105V12.0105Z" fill="#F79E1B"/>
                  </svg>
                  <div className="card-details">
                    <span className="option-label">•••• 4296</span>
                    <svg className="edit-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.375 15.625H5.30125L13.0817 7.84454L12.1554 6.93913L4.375 14.7195V15.625ZM2.75 17.25V14.0337L14.375 2.33496L17.694 5.5385L5.96625 17.25H2.75ZM12.6313 7.38954L12.1554 6.93913L13.0817 7.84454L12.6313 7.38954Z" fill="#111111"/>
                    </svg>
                  </div>
                </div>
                <div className="radio-button">
                  <div className={`radio-circle ${selectedMethod === 'card' ? 'checked' : ''}`}>
                    {selectedMethod === 'card' && <div className="radio-inner"></div>}
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              {/* Add Card Option */}
              <div className="payment-option add-card">
                <div className="option-content">
                  <svg className="payment-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 19.5V4.5H21.5V19.5H2.5ZM4 11.596H20V8.404H4V11.596Z" fill="#636B7E"/>
                  </svg>
                  <span className="option-label">Adicionar novo cartão</span>
                </div>
                <svg className="add-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.25 16.75H12.75V12.75H16.75V11.25H12.75V7.25H11.25V11.25H7.25V12.75H11.25V16.75ZM12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9982 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9982C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0018 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#111111"/>
                </svg>
              </div>
            </div>

            {/* Info Callout */}
            <div className="info-callout">
              <svg className="info-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_info)">
                  <path d="M10.0002 0.833496C8.18717 0.833496 6.41489 1.37111 4.90744 2.37836C3.39999 3.3856 2.22507 4.81724 1.53127 6.49223C0.837468 8.16722 0.655937 10.0103 1.00964 11.7885C1.36333 13.5666 2.23637 15.2 3.51835 16.482C4.80034 17.764 6.43368 18.637 8.21184 18.9907C9.99 19.3444 11.8331 19.1629 13.5081 18.4691C15.1831 17.7753 16.6147 16.6003 17.622 15.0929C18.6292 13.5854 19.1668 11.8132 19.1668 10.0002C19.1668 7.56901 18.2011 5.23743 16.482 3.51835C14.7629 1.79927 12.4313 0.833496 10.0002 0.833496V0.833496ZM10.1911 4.65294C10.4178 4.65294 10.6393 4.72014 10.8277 4.84605C11.0162 4.97195 11.163 5.15091 11.2497 5.36028C11.3365 5.56966 11.3592 5.80004 11.315 6.02231C11.2707 6.24458 11.1616 6.44875 11.0014 6.609C10.8411 6.76925 10.6369 6.87838 10.4147 6.92259C10.1924 6.9668 9.96202 6.94411 9.75265 6.85739C9.54327 6.77066 9.36432 6.6238 9.23841 6.43536C9.11251 6.24693 9.0453 6.0254 9.0453 5.79877C9.0453 5.49488 9.16603 5.20343 9.38091 4.98855C9.5958 4.77366 9.88724 4.65294 10.1911 4.65294ZM11.9099 14.9654H8.85433C8.65174 14.9654 8.45744 14.885 8.31418 14.7417C8.17092 14.5984 8.09044 14.4041 8.09044 14.2015C8.09044 13.999 8.17092 13.8047 8.31418 13.6614C8.45744 13.5181 8.65174 13.4377 8.85433 13.4377H9.42725C9.4779 13.4377 9.52647 13.4175 9.56229 13.3817C9.5981 13.3459 9.61822 13.2973 9.61822 13.2467V9.80919C9.61822 9.75854 9.5981 9.70997 9.56229 9.67415C9.52647 9.63834 9.4779 9.61822 9.42725 9.61822H8.85433C8.65174 9.61822 8.45744 9.53774 8.31418 9.39448C8.17092 9.25122 8.09044 9.05692 8.09044 8.85433C8.09044 8.65173 8.17092 8.45743 8.31418 8.31418C8.45744 8.17092 8.65174 8.09044 8.85433 8.09044H9.61822C10.0234 8.09044 10.412 8.2514 10.6985 8.53792C10.985 8.82443 11.146 9.21303 11.146 9.61822V13.2467C11.146 13.2973 11.1661 13.3459 11.2019 13.3817C11.2377 13.4175 11.2863 13.4377 11.337 13.4377H11.9099C12.1125 13.4377 12.3068 13.5181 12.45 13.6614C12.5933 13.8047 12.6738 13.999 12.6738 14.2015C12.6738 14.4041 12.5933 14.5984 12.45 14.7417C12.3068 14.885 12.1125 14.9654 11.9099 14.9654Z" fill="#636B7E"/>
                </g>
                <defs>
                  <clipPath id="clip0_info">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <p className="info-text">Não se preocupe: se você não fechar o frete, devolvemos o seu dinheiro!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="checkout-footer">
        <div className="footer-content">
          <div className="total-row">
            <span className="total-label">Você pagará:</span>
            <span className="total-amount">R$ 49,90</span>
          </div>
          <button className="payment-button" onClick={handlePayment}>
            {getButtonLabel()}
          </button>
        </div>
      </div>
    </div>
  );
}
