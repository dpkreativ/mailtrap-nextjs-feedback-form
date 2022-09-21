import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Button, Input, TextArea } from './Inputs';

export default function FeedbackForm() {
  const value = useContext(AppContext);

  const { feedbackData } = value.state;
  const { setFeedbackData, setSubmitSuccessful } = value.trigger;

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      firstName: feedbackData.firstName,
      lastName: feedbackData.lastName,
      feedback: feedbackData.feedback,
    };

    const JSONData = JSON.stringify(data);

    const endpoint = 'api/mailtrap';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONData,
    };

    try {
      await fetch(endpoint, options).then((res) => res.json());
      setSubmitSuccessful(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      className="bg-white rounded-xl shadow-lg my-5"
      onSubmit={handleSubmit}
    >
      {/* Form Header */}
      <div className="bg-[#2A2B50] p-10 rounded-t-xl text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Did you enjoy our service?</h2>
        <h3>Send us your feedback!</h3>
      </div>

      <div className="p-10 lg:px-20 text-[#2A2B50]">
        {/* Form Content */}
        <div>
          {/* First Name */}
          <Input
            id={`firstName`}
            label={`Your First Name`}
            placeholder={`Fill in your first name`}
            type={`text`}
            onChange={(e) =>
              setFeedbackData({ ...feedbackData, firstName: e.target.value })
            }
          />

          {/* Last Name */}
          <Input
            id={`lastName`}
            label={`Your Last Name`}
            placeholder={`Fill in your last name`}
            type={`text`}
            onChange={(e) =>
              setFeedbackData({ ...feedbackData, lastName: e.target.value })
            }
          />

          {/* Feedback */}
          <TextArea
            id={`feedback`}
            label={`Your Feedback`}
            placeholder={`Describe your experience...`}
            onChange={(e) =>
              setFeedbackData({ ...feedbackData, feedback: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <Button type={`submit`}>Send Feedback</Button>
      </div>
    </form>
  );
}
