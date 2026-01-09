import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/PaymentFeePage.scss';
import Toast from '../components/Toast';
import PixInfoSheet from '../components/PixInfoSheet';
import VIPWarningSheet from '../components/VIPWarningSheet';

export default function PaymentFeePage() {
  const navigate = useNavigate();
  const { freightId, contactId } = useParams();
  const [pixKey] = useState('(11) 9 9999-8888');
  const [showToast, setShowToast] = useState(false);
  const [isPixInfoSheetOpen, setIsPixInfoSheetOpen] = useState(false);
  const [isVIPWarningSheetOpen, setIsVIPWarningSheetOpen] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setShowToast(true);
  };

  const handleLearnMore = () => {
    setIsPixInfoSheetOpen(true);
  };

  const handleSubscribeVIP = () => {
    // TODO: Navegar para página de assinatura VIP
    console.log('Assinar VIP');
  };

  const handleContinue = () => {
    // Abre o bottom sheet de aviso VIP
    setIsVIPWarningSheetOpen(true);
  };

  const handleVIPWarningConfirm = () => {
    // Fecha o sheet e navega para o chat com indicação de documentos enviados
    setIsVIPWarningSheetOpen(false);
    navigate(`/freight/${freightId}/chat/${contactId}`, {
      state: { documentsSubmitted: true, skipTransition: true }
    });
  };

  return (
    <div className="payment-fee-page">
      {/* Top Bar */}
      <div className="top-bar">
        <button className="back-button" onClick={handleBackClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.95185 17.6537L4.29785 11.9999L9.95185 6.34619L11.0056 7.43069L7.18635 11.2499H19.7019V12.7499H7.18635L11.0056 16.5692L9.95185 17.6537Z" fill="#111111"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="page-content">
        <h1 className="page-title">Fechando o frete na Fretebras, será cobrada a taxa de serviço de R$ 49,90</h1>

        <div className="content-container">
          {/* VIP Fee Card */}
          <div className="vip-fee-card">
            <div className="vip-badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.7407 8.1278L9.77591 4.02051H10.0163L12.239 8.1278H7.7407ZM9.62841 16.7609L2.60612 8.87155H9.62841V16.7609ZM10.3722 16.7609V8.87155H17.3945L10.3722 16.7609ZM13.0836 8.1278L10.699 3.70801H15.8722L17.6236 8.1278H13.0836ZM2.37695 8.1278L4.12841 3.70801H9.11404L6.89612 8.1278H2.37695Z" fill="white"/>
              </svg>
              <span className="vip-badge-text">Você é VIP e não paga</span>
            </div>
            <div className="fee-row">
              <div className="fee-label">Valor da taxa:</div>
              <div className="fee-values">
                <div className="fee-original">R$ 49,90</div>
                <div className="fee-discounted">R$ 0,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <button className="continue-button" onClick={handleContinue}>
          Concluir e enviar documentos
        </button>
        <div className="terms-text">
          <span className="terms-normal">Ao continuar vocês estará concordando com os </span>
          <span className="terms-link">Termos e condições da taxa de serviço.</span>
        </div>
      </div>

      {/* Toast */}
      <Toast
        message="Chave Pix copiada com sucesso."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* Pix Info Sheet */}
      <PixInfoSheet
        isOpen={isPixInfoSheetOpen}
        onClose={() => setIsPixInfoSheetOpen(false)}
        pixKey={pixKey}
      />

      {/* VIP Warning Sheet */}
      <VIPWarningSheet
        isOpen={isVIPWarningSheetOpen}
        onClose={() => setIsVIPWarningSheetOpen(false)}
        onConfirm={handleVIPWarningConfirm}
        pixKey={pixKey}
      />
    </div>
  );
}
