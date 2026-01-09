import { useEffect, useState } from 'react';
import '../styles/PixInfoSheet.scss';
import Toast from './Toast';

interface PixInfoSheetProps {
  isOpen: boolean;
  onClose: () => void;
  pixKey: string;
}

export default function PixInfoSheet({ isOpen, onClose, pixKey }: PixInfoSheetProps) {
  const [showToast, setShowToast] = useState(false);

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

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setShowToast(true);
  };

  return (
    <>
      <div className={`sheet-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`pix-info-sheet ${isOpen ? 'open' : ''}`}>
        <div className="sheet-content">
          {/* Header */}
          <div className="sheet-header">
            <div className="sheet-top-bar">
              <button className="close-button" onClick={onClose}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16669 15.8333L15.8334 4.16663M4.16669 4.16663L15.8334 15.8333" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="sheet-handle"></div>
            </div>

            <div className="header-content">
              <div className="pix-icon-large">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5898 22.2031C19.9119 21.881 20.4736 21.88 20.7958 22.2031L25.3857 26.7929C26.2346 27.6414 27.364 28.1093 28.5644 28.1093H29.1171L23.287 33.9385C21.4716 35.7538 18.5281 35.7538 16.7128 33.9385L10.9003 28.1259H11.8046C13.0051 28.1259 14.1343 27.6581 14.9833 26.8095L19.5898 22.2031ZM9.59853 13.1757C9.67257 13.2036 9.75095 13.2235 9.83486 13.2235H11.8046C12.6326 13.2235 13.4431 13.5597 14.0282 14.1454L18.6357 18.7519C19.065 19.1809 19.6289 19.3964 20.1933 19.3964C20.757 19.3963 21.3215 19.1813 21.7509 18.7519L26.3398 14.162C26.9249 13.5765 27.7363 13.2411 28.5644 13.2411H30.166C30.2545 13.2411 30.3385 13.2213 30.416 13.1903L33.9384 16.7128C35.7538 18.5283 35.7538 21.4716 33.9384 23.287L30.416 26.8105C30.3385 26.7794 30.2545 26.7598 30.166 26.7597H28.5644C27.7363 26.7597 26.9249 26.4234 26.3398 25.8378L21.7509 21.249C20.9191 20.4164 19.4673 20.417 18.6347 21.249L14.0282 25.8544C13.4431 26.44 12.6327 26.7763 11.8046 26.7763H9.83486C9.75098 26.7764 9.67268 26.7963 9.59853 26.8242L6.06142 23.287C4.24619 21.4715 4.24607 18.5282 6.06142 16.7128L9.59853 13.1757ZM16.7128 6.06139C18.5281 4.24605 21.4714 4.24622 23.287 6.06139L29.1171 11.8915H28.5634C27.3632 11.8916 26.2345 12.3587 25.3857 13.2069L20.7958 17.7978C20.4633 18.1311 19.9215 18.1295 19.5898 17.7978L14.9833 13.1903C14.1344 12.3418 13.0051 11.8739 11.8046 11.8739L10.9003 11.8749L16.7128 6.06139Z" fill="#0769DA"/>
                </svg>
              </div>
              <h2 className="sheet-title">
                Receba com segurança o pagamento do frete no Pix da sua Carteira Fretebras:
              </h2>
            </div>
          </div>

          {/* Steps */}
          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-item">
              <div className="step-number">1º</div>
              <div className="step-content">
                <p className="step-description">
                  <span className="text-medium">Peça para a empresa pagar o frete no </span>
                  <span className="text-bold">Pix da sua Carteira Fretebras</span>
                  <span className="text-strong">:</span>
                </p>
                <div className="info-box">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.82495 8.94134C7.96257 8.80376 8.20214 8.80333 8.3398 8.94134L10.3007 10.9015C10.6634 11.264 11.1457 11.464 11.6585 11.464H11.8945L9.40464 13.9546L9.25308 14.0906C8.52508 14.6842 7.47475 14.6842 6.74683 14.0906L6.59605 13.9546L4.11245 11.471H4.49917C4.94784 11.471 5.37333 11.3184 5.71558 11.0374L5.85699 10.9093L7.82495 8.94134ZM3.5562 5.08509C3.58786 5.09701 3.62188 5.1054 3.65777 5.1054H4.49917C4.85284 5.10545 5.19926 5.249 5.44917 5.49915L7.41714 7.46712C7.60054 7.65028 7.84177 7.74212 8.08277 7.74212C8.3235 7.74202 8.56423 7.64972 8.74761 7.46634L10.7085 5.50618C10.9273 5.28726 11.2198 5.1503 11.5265 5.11946L11.6585 5.11243H12.3429C12.3806 5.11238 12.4162 5.10375 12.4492 5.09055L13.9546 6.59602C14.7298 7.3715 14.7297 8.62834 13.9546 9.40384L12.4492 10.9093C12.4162 10.8961 12.3806 10.8875 12.3429 10.8874H11.6585C11.3048 10.8874 10.9585 10.7438 10.7085 10.4937L8.74761 8.53352C8.3923 8.17793 7.77282 8.17822 7.41714 8.53352L5.44917 10.5007C5.19926 10.7508 4.85284 10.8944 4.49917 10.8945H3.65777C3.62188 10.8945 3.58792 10.9029 3.5562 10.9148L2.04605 9.40384C1.31902 8.6768 1.27325 7.52681 1.90933 6.7468L2.04605 6.59602L3.5562 5.08509ZM6.59605 2.04602C7.37154 1.27047 8.62903 1.27047 9.40464 2.04602L11.8945 4.53587H11.6585C11.1457 4.53587 10.6634 4.73588 10.3007 5.09837L8.3398 7.0593C8.19779 7.20151 7.96663 7.20079 7.82495 7.0593L5.85699 5.09134C5.49437 4.72889 5.01194 4.52889 4.49917 4.52884H4.11245L6.59605 2.04602Z" fill="#636B7E"/>
                  </svg>
                  <div className="info-text">{pixKey}</div>
                  <button className="copy-icon-button" onClick={handleCopyPix}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.20833 14.5833V2.41663H16.375V14.5833H6.20833ZM7.29167 13.5H15.2917V3.49996H7.29167V13.5ZM3.625 17.1666V5.25642H4.70833V16.0833H13.5352V17.1666H3.625Z" fill="#111111"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="step-divider"></div>

            {/* Step 2 */}
            <div className="step-item">
              <div className="step-number">2º</div>
              <div className="step-content">
                <p className="step-description">
                  <span className="text-medium">Após receber o pagamento, </span>
                  <span className="text-bold">a taxa de serviço será descontada</span>
                  <span className="text-strong">.</span>
                </p>
                <div className="info-box">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.56176 12.2721H8.42209V11.5144C8.92809 11.4554 9.36848 11.2445 9.74326 10.8816C10.118 10.5188 10.3054 10.0917 10.3054 9.60026C10.3054 9.10026 10.1484 8.68743 9.83426 8.36176C9.52015 8.03621 9.04643 7.75676 8.41309 7.52343C7.70109 7.26187 7.24959 7.04071 7.05859 6.85993C6.86759 6.67915 6.77209 6.43704 6.77209 6.13359C6.77209 5.8857 6.88426 5.67459 7.10859 5.50026C7.33293 5.32593 7.61348 5.23876 7.95026 5.23876C8.25282 5.23876 8.52715 5.30948 8.77326 5.45093C9.01948 5.59237 9.19432 5.78659 9.29776 6.03359L10.0374 5.71943C9.88698 5.38698 9.67098 5.11393 9.38943 4.90026C9.10776 4.68659 8.78532 4.54854 8.42209 4.48609V3.72843H7.57843V4.50276C7.06565 4.60109 6.66248 4.80109 6.36893 5.10276C6.07526 5.40454 5.92843 5.75371 5.92843 6.15026C5.92843 6.62893 6.09682 7.0347 6.43359 7.36759C6.77037 7.70048 7.32037 8.00109 8.08359 8.26943C8.59215 8.45154 8.95393 8.64582 9.16893 8.85226C9.38382 9.05859 9.49126 9.30793 9.49126 9.60026C9.49126 9.94048 9.35432 10.2163 9.08043 10.4278C8.80643 10.6393 8.49082 10.7451 8.13359 10.7451C7.75837 10.7451 7.4227 10.624 7.12659 10.3818C6.83037 10.1394 6.61943 9.83448 6.49376 9.46693L5.71693 9.81059C5.86737 10.2387 6.10709 10.5985 6.43609 10.8899C6.7652 11.1814 7.14043 11.384 7.56176 11.4978V12.2721ZM8.00026 14.0669C7.16948 14.0669 6.38554 13.9088 5.64843 13.5926C4.91121 13.2764 4.26587 12.8415 3.71243 12.2881C3.15898 11.7347 2.72415 11.0893 2.40793 10.3521C2.0917 9.61498 1.93359 8.83104 1.93359 8.00026C1.93359 7.15837 2.0917 6.37165 2.40793 5.64009C2.72415 4.90843 3.15898 4.26587 3.71243 3.71243C4.26587 3.15898 4.91121 2.72415 5.64843 2.40793C6.38554 2.09171 7.16948 1.93359 8.00026 1.93359C8.84215 1.93359 9.62887 2.09171 10.3604 2.40793C11.0921 2.72415 11.7347 3.15898 12.2881 3.71243C12.8415 4.26587 13.2764 4.90843 13.5926 5.64009C13.9088 6.37165 14.0669 7.15837 14.0669 8.00026C14.0669 8.83104 13.9088 9.61498 13.5926 10.3521C13.2764 11.0893 12.8415 11.7347 12.2881 12.2881C11.7347 12.8415 11.0921 13.2764 10.3604 13.5926C9.62887 13.9088 8.84215 14.0669 8.00026 14.0669Z" fill="#636B7E"/>
                  </svg>
                  <div className="info-text">R$ 49,90</div>
                </div>
              </div>
            </div>

            <div className="step-divider"></div>

            {/* Step 3 */}
            <div className="step-item">
              <div className="step-number">3º</div>
              <div className="step-content">
                <p className="step-description">
                  <span className="text-medium">O valor recebido é </span>
                  <span className="text-bold">transferido automaticamente para sua conta em</span>
                  <span className="text-strong">:</span>
                </p>
                <div className="info-box">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.69972 11.6V6.06671H4.56638V11.6H3.69972ZM7.56638 11.6V6.06671H8.43305V11.6H7.56638ZM2.11255 13.2667V12.4H13.8869V13.2667H2.11255ZM11.433 11.6V6.06671H12.2997V11.6H11.433ZM2.11255 5.26671V4.05138L7.99972 1.17188L13.8869 4.05138V5.26671H2.11255Z" fill="#636B7E"/>
                  </svg>
                  <div className="info-text">Itaú Unibanco SA.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <Toast
        message="Chave Pix copiada com sucesso."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
