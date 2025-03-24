import React, { useState } from 'react';

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

const MentalHealthAssessment: React.FC = () => {
  // PHQ-9 questions
  const questions: string[] = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead or of hurting yourself in some way"
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

    // PHQ-9 scoring interpretation
    if (totalScore >= 0 && totalScore <= 4) {
      severity = "Minimal depression";
      interpretation = "Your responses suggest minimal symptoms of depression.";
      recommendations = [
        "Continue monitoring your mood",
        "Maintain healthy habits like regular exercise and adequate sleep",
        "Consider reaching out to friends and family for support"
      ];
    } else if (totalScore >= 5 && totalScore <= 9) {
      severity = "Mild depression";
      interpretation = "Your responses suggest mild symptoms of depression.";
      recommendations = [
        "Consider discussing your feelings with a healthcare provider",
        "Try incorporating stress-reduction activities into your routine",
        "Maintain social connections and healthy lifestyle habits"
      ];
    } else if (totalScore >= 10 && totalScore <= 14) {
      severity = "Moderate depression";
      interpretation = "Your responses suggest moderate symptoms of depression.";
      recommendations = [
        "Consider speaking with a mental health professional",
        "Talk to your primary care provider about your symptoms",
        "Practice self-care activities that improve your mood"
      ];
    } else if (totalScore >= 15 && totalScore <= 19) {
      severity = "Moderately severe depression";
      interpretation = "Your responses suggest moderately severe symptoms of depression.";
      recommendations = [
        "Speak with a mental health professional soon",
        "Discuss treatment options with your healthcare provider",
        "Ensure you have support from trusted friends or family"
      ];
    } else if (totalScore >= 20) {
      severity = "Severe depression";
      interpretation = "Your responses suggest severe symptoms of depression.";
      recommendations = [
        "Please speak with a mental health professional as soon as possible",
        "Discuss treatment options with your healthcare provider",
        "If you're having thoughts of harming yourself, please call a crisis hotline immediately"
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
    <div className="flex justify-center p-4 bg-gray-50 min-h-screen">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Depression Screening Assessment (PHQ-9)</h1>
        
        <div className="bg-gray-50 border-l-4 border-red-500 p-4 mb-6 rounded">
          <p className="text-sm"><strong>Important Disclaimer:</strong> This assessment is a screening tool only and not a diagnostic instrument. 
          Results should be discussed with a qualified health professional. If you're experiencing a mental health emergency, 
          please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.</p>
        </div>
        
        {!showResults ? (
          <form onSubmit={handleSubmit}>
            <div className="bg-blue-50 p-4 mb-6 rounded">
              <p>Over the last 2 weeks, how often have you been bothered by any of the following problems?</p>
            </div>
            
            {questions.map((question, index) => (
              <div key={index} className="mb-6 pb-4 border-b border-gray-200">
                <p className="font-medium mb-3">{index + 1}. {question}</p>
                <div className="flex flex-wrap gap-2">
                  {options.map((option) => (
                    <label key={option.value} className={`flex items-center p-3 rounded cursor-pointer transition-colors ${
                      answers[index] === option.value ? 'bg-blue-100 border border-blue-300' : 'bg-gray-50 hover:bg-gray-100'
                    }`}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option.value}
                        checked={answers[index] === option.value}
                        onChange={() => handleOptionSelect(index, option.value)}
                        className="mr-2"
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
            
            <button 
              onClick={resetAssessment} 
              className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white rounded font-medium transition-colors"
            >
              Take Assessment Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthAssessment;