import Head from 'next/head';
import { useContext } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import HomeLayout from '../components/layouts/HomeLayout';
import ThankYouMessage from '../components/ThankYouMessage';
import AppContext from '../context/AppContext';

export default function Home() {
  const value = useContext(AppContext);
  const { submitSuccessful } = value.state;

  return (
    <div>
      <Head>
        <title>Feedback Form - Neon Lounge and Bar</title>
        <meta
          name="description"
          content="Feedback Form - Neon Lounge and Bar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <section className="w-full max-w-lg">
          <h1 className="text-center mb-5 text-xl text-[#2A2B50] font-bold">
            Neon Lounge &amp; Bar
          </h1>
          {submitSuccessful ? <ThankYouMessage /> : <FeedbackForm />}
        </section>
      </HomeLayout>
    </div>
  );
}
