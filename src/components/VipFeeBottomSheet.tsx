import { useEffect } from 'react';
import '../styles/VipFeeBottomSheet.scss';

interface VipFeeBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VipFeeBottomSheet({ isOpen, onClose }: VipFeeBottomSheetProps) {
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

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={`vip-fee-sheet-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
      <div className={`vip-fee-sheet ${isOpen ? 'open' : ''}`} onClick={handleContentClick}>
        {/* Top Bar */}
        <div className="sheet-header">
          <div className="holder"></div>
          <div className="header-actions">
            <button className="close-button" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 16.25L16.25 3.75M3.75 3.75L16.25 16.25" stroke="#111111" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="sheet-content">
          <div className="content-wrapper">
            {/* Title */}
            <h2 className="sheet-title">
              <span className="title-highlight">Você economizou R$ 29,90!</span> Motoristas VIP são isentos da Taxa de serviço<span className="title-highlight">:</span>
            </h2>

            {/* Fee Card */}
            <div className="fee-breakdown-card">
              <div className="fee-item">
                <div className="fee-label">Valor da taxa</div>
                <div className="fee-value strikethrough">R$ 29,90</div>
              </div>

              <div className="fee-item">
                <div className="fee-label-with-tag">
                  <div className="fee-label">Desconto</div>
                  <div className="vip-tag">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8652 3.21875L17.7383 7.96484L9.99902 16.6553L2.25977 7.96484L4.13477 3.21875H15.8652ZM4.21777 8.54785L9.4502 14.4795L9.46875 14.5V8.53125H4.20215L4.21777 8.54785ZM10.5312 14.5L10.5488 14.4795L15.7812 8.54785L15.7969 8.53125H10.5312V14.5ZM4.88281 4.28711L3.57031 7.4541L3.56445 7.46875H6.66992V7.48145L6.67871 7.46289L8.2627 4.2959L8.26953 4.28125H4.89258V4.26367L4.88281 4.28711ZM7.85449 7.46875H12.1445L12.1377 7.45312L10.5537 4.28711L10.5449 4.29102L10.5654 4.28125H9.45508V4.26758L7.85449 7.46875ZM11.7373 4.2959L13.3203 7.46289L13.3096 7.46875H16.4355L16.4297 7.4541L15.1377 4.28711L15.1533 4.28125H11.7295L11.7373 4.2959Z" fill="white" stroke="white" strokeWidth="0.0208333"/>
                    </svg>
                    <span>VIP</span>
                  </div>
                </div>
                <div className="fee-value discount">-R$ 29,90</div>
              </div>

              <div className="fee-divider"></div>

              <div className="fee-total-section">
                <div className="fee-total-row">
                  <div className="fee-total-label">O que você paga:</div>
                  <div className="fee-total-value">R$ 0,00</div>
                </div>
                <div className="fee-total-subtitle">Você economizou R$ 29,90 por ser VIP!</div>
              </div>
            </div>

            {/* Close Button */}
            <button className="close-action-button" onClick={onClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
