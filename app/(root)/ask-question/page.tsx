import React from 'react';
import { QuestionForm } from '@/components/forms/QuestionForm';
// import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.action';
import { redirect } from 'next/navigation';

export default async function AskQuestionPage() {
  // const { userId } = auth();
  const userId = '123456';
  if (!userId) {
    redirect('/sign-in');
  }

  // eslint-disable-next-line no-unused-vars
  const mongoUser = await getUserById({ userId });
  console.log('mongoUser', mongoUser);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <QuestionForm mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
}
