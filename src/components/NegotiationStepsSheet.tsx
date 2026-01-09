import { useEffect } from 'react';
import '../styles/NegotiationStepsSheet.scss';

interface NegotiationStepsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
}

export default function NegotiationStepsSheet({ isOpen, onClose, currentStep }: NegotiationStepsSheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`sheet-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`negotiation-steps-sheet ${isOpen ? 'open' : ''}`}>
        <div className="sheet-content">
          {/* Header */}
          <div className="sheet-header">
            <div className="sheet-handle"></div>
            <div className="sheet-title-row">
              <h2 className="sheet-title">Etapas da negociação</h2>
              <button className="close-button" onClick={onClose}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16675 15.8333L15.8334 4.16666M4.16675 4.16666L15.8334 15.8333" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Steps */}
          <div className="steps-container">
            {/* Step 1 - Always Completed */}
            <div className="step-item">
              <div className="step-row">
                <div className="step-badge completed">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="#0C884C"/>
                    <path d="M17.5951 27L12 21.3119L13.3988 19.8898L17.5951 24.1559L26.6012 15L28 16.422L17.5951 27Z" fill="white"/>
                  </svg>
                </div>
                <div className="step-content">
                  <div className="step-title muted">Negociação inicial</div>
                  <div className="step-description">Acerte condições e preço do frete.</div>
                </div>
              </div>
              <div className="step-connector"></div>
            </div>

            {/* Step 2 */}
            <div className="step-item">
              <div className="step-row">
                {currentStep >= 3 ? (
                  <div className="step-badge completed">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#0C884C"/>
                      <path d="M17.5951 27L12 21.3119L13.3988 19.8898L17.5951 24.1559L26.6012 15L28 16.422L17.5951 27Z" fill="white"/>
                    </svg>
                  </div>
                ) : (
                  <div className="step-badge active">
                    <span>2</span>
                  </div>
                )}
                <div className="step-content">
                  <div className={`step-title ${currentStep >= 3 ? 'muted' : 'active'}`}>Libere seus documentos</div>
                  <div className={`step-description ${currentStep >= 3 ? '' : 'active'}`}>
                    Seus documentos serão enviados para análise da empresa.
                  </div>
                  
                  {/* Waiting status - only show if step 2 is active */}
                  {currentStep === 2 && (
                    <div className="waiting-status">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0088 2.42871C11.0541 2.42875 12.0368 2.62711 12.957 3.02441C13.8778 3.42195 14.6794 3.96122 15.3604 4.64258C16.0413 5.32393 16.5803 6.12559 16.9775 7.04688C17.3747 7.96802 17.5732 8.9526 17.5732 10C17.5732 11.0431 17.3765 12.0236 16.9824 12.9414C16.5882 13.8593 16.0488 14.6637 15.3652 15.3545C14.6817 16.0452 13.8789 16.5879 12.957 16.9824C12.0352 17.3767 11.0501 17.5742 10.002 17.5742C8.95893 17.5742 7.97833 17.3774 7.06055 16.9834C6.14257 16.5892 5.33733 16.046 4.64648 15.3555C3.95581 14.665 3.41298 13.8599 3.01855 12.9404C2.62433 12.0211 2.42773 11.0387 2.42773 9.99316C2.42774 8.94757 2.62441 7.96439 3.01855 7.04395C3.41271 6.12351 3.95512 5.32149 4.64551 4.6377C5.33608 3.95378 6.14185 3.41403 7.06152 3.01953C7.98073 2.62539 8.96337 2.42871 10.0088 2.42871ZM9.44824 9.9209H9.44434L9.45117 9.92871L12.9287 13.4062L12.9365 13.4131L13.7246 12.625L13.7178 12.6172L10.5527 9.45215V4.99121H9.44824V9.9209Z" fill="#0769DA" stroke="#0769DA" strokeWidth="0.0208333"/>
                      </svg>
                      <span className="waiting-text">Aguardando resposta da empresa...</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="step-connector"></div>
            </div>

            {/* Step 3 - Fechamento */}
            <div className="step-item">
              <div className="step-row">
                <div className={`step-badge ${currentStep >= 3 ? 'completed' : 'inactive'}`}>
                  {currentStep >= 3 ? (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#0C884C"/>
                      <path d="M17.5951 27L12 21.3119L13.3988 19.8898L17.5951 24.1559L26.6012 15L28 16.422L17.5951 27Z" fill="white"/>
                    </svg>
                  ) : (
                    <span>3</span>
                  )}
                </div>
                <div className="step-content">
                  <div className={`step-title ${currentStep >= 3 ? 'muted' : ''}`}>Fechamento do frete</div>
                  <div className={`step-description ${currentStep >= 3 ? '' : ''}`}>
                    Faça a coleta e receba o adiantamento no Pix da sua Carteira Fretebras.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Points Card */}
          <div className="points-card">
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5143 0L20.9956 6V18L10.5143 24L0.032959 18L0.032959 6L10.5143 0Z" fill="#F7C53B"/>
              <path opacity="0.1" d="M10.5144 11.9998L20.9957 17.9999L10.5144 24L10.5144 11.9998Z" fill="white"/>
              <path opacity="0.05" d="M10.5142 12L20.9955 6L20.9955 18L10.5142 12Z" fill="#111111"/>
              <path opacity="0.1" d="M10.5142 12L0.0280919 18L0.0280914 6L10.5142 12Z" fill="white"/>
              <path opacity="0.05" d="M10.5142 12L10.5142 6.6482e-05L20.9955 6.00008L10.5142 12Z" fill="white"/>
              <path opacity="0.05" d="M10.5096 12L10.5096 24L0.0330103 18L10.5096 12Z" fill="#111111"/>
              <path d="M10.6076 6L15.857 9V15L10.6076 18L5.35823 15V9L10.6076 6Z" fill="#FFE5A0"/>
            </svg>
            <div className={`points-text ${currentStep >= 3 ? 'completed' : ''}`}>
              {currentStep >= 3 ? 'Você ganhou + 55 pontos. Parabéns!' : '+55 pontos ao concluir todas as etapas.'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
