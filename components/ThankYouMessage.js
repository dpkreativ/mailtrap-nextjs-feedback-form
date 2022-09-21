import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Button } from './Inputs';

export default function ThankYouMessage() {
  const value = useContext(AppContext);

  const { feedbackData } = value.state;
  const { setSubmitSuccessful } = value.trigger;

  return (
    <div className="bg-white rounded-xl shadow-lg my-5">
      <div className="bg-[#2A2B50] p-10 rounded-t-xl text-white text-center">
        <h2 className="text-3xl font-bold mb-3">
          Thank you, {feedbackData.firstName}!
        </h2>
      </div>
      <div className="p-10 lg:px-20 text-lg text-center flex flex-col space-y-3">
        <p>
          We greatly appreciate the feedback you have given us so that we can
          serve you and other customers better.
        </p>
      </div>
      <div className="w-full flex justify-center p-10 lg:px-20">
        <Button onClick={() => setSubmitSuccessful(false)}>Back to Form</Button>
      </div>
    </div>
  );
}
