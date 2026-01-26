import { useEffect } from 'react';
import '../styles/Toast.scss';

interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
  autoCloseDuration?: number;
}

export default function Toast({ isVisible, onClose, autoCloseDuration = 10000 }: ToastProps) {
  useEffect(() => {
    if (isVisible && autoCloseDuration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDuration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, autoCloseDuration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`toast-container ${isVisible ? 'visible' : ''}`}>
      <div className="toast-content">
        <div className="toast-text">
          Você economizou R$ 29,90 da taxa de serviço por ser VIP!
        </div>
        <button className="toast-button">
          Saiba mais
        </button>
      </div>
    </div>
  );
}
