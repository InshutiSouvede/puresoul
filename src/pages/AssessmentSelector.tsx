import React, { useState } from 'react';
import PHQ9Assessment from './assessments/PHQ9Assessment';
import GAD7Assessment from './assessments/GAD7Assessment';

type AssessmentType = 'depression' | 'anxiety' | null;

const AssessmentSelector: React.FC = () => {
  const [selectedAssessment, setSelectedAssessment] = useState<AssessmentType>(null);

  const renderAssessment = () => {
    switch (selectedAssessment) {
      case 'depression':
        return <PHQ9Assessment onBack={() => setSelectedAssessment(null)} />;
      case 'anxiety':
        return <GAD7Assessment onBack={() => setSelectedAssessment(null)} />;
      default:
        return (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Mental Health Self-Assessment</h1>
            
            <p className="mb-6 text-gray-600">
              Please select an assessment to begin. These assessments are designed to help you understand your mental health better.
              They are not diagnostic tools but can indicate when you might want to seek professional support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setSelectedAssessment('depression')}
                className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-6 text-left transition-colors flex flex-col"
              >
                <span className="text-lg font-medium text-blue-800 mb-2">Depression Screening</span>
                <span className="text-sm text-gray-600">PHQ-9 assessment for depressive symptoms (9 questions)</span>
              </button>
              
              <button
                onClick={() => setSelectedAssessment('anxiety')}
                className="bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg p-6 text-left transition-colors flex flex-col"
              >
                <span className="text-lg font-medium text-indigo-800 mb-2">Anxiety Screening</span>
                <span className="text-sm text-gray-600">GAD-7 assessment for anxiety symptoms (7 questions)</span>
              </button>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 text-sm text-gray-700 rounded">
              <p><strong>Note:</strong> These assessments are screening tools only. They are not meant to replace professional medical advice, diagnosis, or treatment.
              If you're experiencing distress or have concerns about your mental health, please consult with a qualified healthcare provider.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {renderAssessment()}
    </div>
  );
};

export default AssessmentSelector;