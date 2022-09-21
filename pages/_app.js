import '../styles/globals.css';
import AppContext from '../context/AppContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [feedbackData, setFeedbackData] = useState({
    firstName: '',
    lastName: '',
    feedback: '',
  });
  const [submitSuccessful, setSubmitSuccessful] = useState(false);

  return (
    <AppContext.Provider
      value={{
        state: {
          feedbackData: feedbackData,
          submitSuccessful: submitSuccessful,
        },
        trigger: {
          setFeedbackData: setFeedbackData,
          setSubmitSuccessful: setSubmitSuccessful,
        },
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
