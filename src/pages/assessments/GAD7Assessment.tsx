import React, { useState } from 'react';

interface GAD7AssessmentProps {
  onBack: () => void;
}

interface Option {
  value: number;
  label: string;
}

interface AssessmentResults {
  totalScore: number;
  severity: string;
  interpretation: string;
  recommendations: string[];
}

const GAD7Assessment: React.FC<GAD7AssessmentProps> = ({ onBack }) => {
  // GAD-7 questions
  const questions: string[] = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen"
  ];

  // Options for each question
  const options: Option[] = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" }
  ];

  // State to track answers, initialize with null values
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isAssessmentComplete, setIsAssessmentComplete] = useState<boolean>(false);

  // Handle answer selection
  const handleOptionSelect = (questionIndex: number, value: number): void => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
    setIsAssessmentComplete(newAnswers.every(answer => answer !== null));
  };

  // Calculate score and determine severity
  const calculateResults = (): AssessmentResults => {
    const totalScore = answers.reduce((sum, value) => sum + value, 0);
    
    let severity = "";
    let interpretation = "";
    let recommendations: string[] = [];

    // GAD-7 scoring interpretation
    if (totalScore >= 0 && totalScore <= 4) {
      severity = "Minimal anxiety";
      interpretation = "Your responses suggest minimal symptoms of anxiety.";
      recommendations = [
        "Continue monitoring your anxiety levels",
        "Practice regular stress management techniques",
        "Maintain healthy lifestyle habits"
      ];
    } else if (totalScore >= 5 && totalScore <= 9) {
      severity = "Mild anxiety";
      interpretation = "Your responses suggest mild symptoms of anxiety.";
      recommendations = [
        "Consider learning relaxation techniques or mindfulness practices",
        "Monitor situations that trigger anxiety",
        "Consider discussing your feelings with a healthcare provider if symptoms persist"
      ];
    } else if (totalScore >= 10 && totalScore <= 14) {
      severity = "Moderate anxiety";
      interpretation = "Your responses suggest moderate symptoms of anxiety.";
      recommendations = [
        "Consider speaking with a mental health professional",
        "Learn and practice anxiety management techniques",
        "Talk to your primary care provider about your symptoms"
      ];
    } else if (totalScore >= 15) {
      severity = "Severe anxiety";
      interpretation = "Your responses suggest severe symptoms of anxiety.";
      recommendations = [
        "Consider speaking with a mental health professional soon",
        "Discuss treatment options with your healthcare provider",
        "Practice self-care and stress reduction techniques in the meantime"
      ];
    }

    return { totalScore, severity, interpretation, recommendations };
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (isAssessmentComplete) {
      setShowResults(true);
    }
  };

  // Reset the assessment
  const resetAssessment = (): void => {
    setAnswers(Array(questions.length).fill(null));
    setShowResults(false);
    setIsAssessmentComplete(false);
  };

  // Calculate results if showing results
  const results = showResults ? calculateResults() : null;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <button 
          onClick={onBack}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Anxiety Screening Assessment (GAD-7)</h1>
      </div>
      
      <div className="bg-gray-50 border-l-4 border-indigo-500 p-4 mb-6 rounded">
        <p className="text-sm"><strong>Important Disclaimer:</strong> This assessment is a screening tool only and not a diagnostic instrument. 
        Results should be discussed with a qualified health professional. If you're experiencing a mental health emergency, 
        please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.</p>
      </div>
      
      {!showResults ? (
        <form onSubmit={handleSubmit}>
          <div className="bg-indigo-50 p-4 mb-6 rounded">
            <p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
          </div>
          
          {questions.map((question, index) => (
            <div key={index} className="mb-6 pb-4 border-b border-gray-200">
              <p className="font-medium mb-3">{index + 1}. {question}</p>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <label key={option.value} className={`flex items-center p-3 rounded cursor-pointer transition-colors ${
                    answers[index] === option.value ? 'bg-indigo-100 border border-indigo-300' : 'bg-gray-50 border border-gray-200'
                    }`}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option.value}
                      checked={answers[index] === option.value}
                      onChange={() => handleOptionSelect(index, option.value)}
                      className="hidden"
                    />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
        
        <button 
          type="submit" 
          className={`w-full py-3 rounded font-medium text-white transition-colors ${
            isAssessmentComplete ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'
          }`}
          disabled={!isAssessmentComplete}
        >
          Submit Assessment
        </button>
      </form>
    ) : (
      <div className="bg-gray-50 rounded-lg p-5">
        <h2 className="text-xl font-bold text-center mb-4">Assessment Results</h2>
        
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <p className="mb-2"><strong>Total Score:</strong> {results?.totalScore} out of 27</p>
          <p><strong>Severity:</strong> {results?.severity}</p>
        </div>
        
        <div className="mb-4">
          <p>{results?.interpretation}</p>
        </div>
        
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <h3 className="font-bold mb-2">Recommendations:</h3>
          <ul className="list-disc pl-5">
            {results?.recommendations.map((recommendation, index) => (
              <li key={index} className="mb-1">{recommendation}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded">
          <p className="text-sm"><strong>Important Note:</strong> These results are not a diagnosis. Mental health conditions can only be diagnosed by qualified health professionals. 
          If you have concerns about your mental health, please discuss these results with your healthcare provider.</p>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={resetAssessment} 
            className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded font-medium transition-colors"
          >
            Take Assessment Again
          </button>
          <button 
            onClick={onBack} 
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
          >
            Back to Selection
          </button>
        </div>
      </div>
    )}
  </div>
);
};

export default GAD7Assessment;