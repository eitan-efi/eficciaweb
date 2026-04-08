"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { QUIZ_STEPS, calcularResultado } from "@/lib/quiz-data";
import { QuizAnswers } from "@/lib/types";

import { QuizShell } from "@/components/quiz/QuizShell";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizStep } from "@/components/quiz/QuizStep";
import { QuizMicroInsight } from "@/components/quiz/QuizMicroInsight";
import { QuizEmailCapture } from "@/components/quiz/QuizEmailCapture";
import { QuizResult } from "@/components/quiz/QuizResult";

export function QuizPageClient() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showInsight, setShowInsight] = useState<string | null>(null);
  const [emailDone, setEmailDone] = useState(false);

  const stepCount = QUIZ_STEPS.length;
  const isEmailCapture = currentStepIndex === stepCount;
  const isResult = isEmailCapture && emailDone;

  const currentStepData = QUIZ_STEPS[currentStepIndex];

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStepData.field]: value,
    }));

    const insightText = currentStepData.insight?.[value];

    if (insightText) {
      setShowInsight(insightText);
    } else {
      advanceStep();
    }
  };

  const advanceStep = () => {
    setShowInsight(null);
    setCurrentStepIndex((prev) => prev + 1);
  };

  const handleEmailSubmit = () => {
    setEmailDone(true);
  };

  let content;

  if (isResult) {
    const resultado = calcularResultado(answers);
    content = <QuizResult key="result" resultado={resultado} answers={answers} />;
  } else if (isEmailCapture) {
    const resultado = calcularResultado(answers);
    content = (
      <QuizEmailCapture
        key="email-capture"
        answers={answers}
        resultado={resultado}
        onSubmit={handleEmailSubmit}
      />
    );
  } else if (showInsight) {
    content = <QuizMicroInsight key="insight" texto={showInsight} onDone={advanceStep} />;
  } else if (currentStepData) {
    content = (
      <QuizStep
        key={`step-${currentStepData.id}`}
        data={currentStepData}
        onAnswer={handleAnswer}
      />
    );
  }

  return (
    <QuizShell>
      {!isResult && !showInsight && !isEmailCapture && (
        <QuizProgress step={currentStepIndex + 1} total={stepCount} />
      )}
      <AnimatePresence mode="wait">{content}</AnimatePresence>
    </QuizShell>
  );
}
