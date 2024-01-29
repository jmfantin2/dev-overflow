import React from 'react';
import { QuestionForm } from '@/components/forms/QuestionForm';

export default function AskQuestionPage() {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </div>
  );
}
