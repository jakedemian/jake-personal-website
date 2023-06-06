import { useEffect, useState } from 'react';

const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

export const useCanSendEmail = () => {
  const [canSendEmail, setCanSendEmail] = useState<boolean>(true);

  const handleSuccessfulEmailSend = () => {
    localStorage.setItem('email_sent_timestamp', String(new Date().getTime()));
    setCanSendEmail(false);
  };

  useEffect(() => {
    const emailSentTimestamp = localStorage.getItem('email_sent_timestamp');

    if (emailSentTimestamp) {
      const difference = new Date().getTime() - Number(emailSentTimestamp);
      if (difference < THIRTY_DAYS_IN_MS) {
        setCanSendEmail(false);
      }
    }
  }, []);

  return { canSendEmail, handleSuccessfulEmailSend };
};
