import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockAssessmentResults } from '../utils/data';

export interface AssessmentResult {
  id: string;
  type: 'depression' | 'anxiety';
  date: string;
  score: number;
}


const Dashboard: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'depression' | 'anxiety' | 'both'>('both');
  const getChartData = (type?: 'depression' | 'anxiety') => {
    const filteredResults = type 
      ? mockAssessmentResults.filter(result => result.type === type)
      : mockAssessmentResults;

    return filteredResults.map(result => ({
      date: result.date,
      score: result.score,
      type: result.type
    }));
  };
  const renderProgressChart = () => {
    let chartData: any[] = [];
    let lines: React.ReactNode[] = [];

    switch (activeChart) {
      case 'depression':
        chartData = getChartData('depression');
        lines = [
          <Line 
            key="depression" 
            type="monotone" 
            dataKey="score" 
            stroke="#8B5CF6" 
            strokeWidth={3} 
            name="Depression Score"
          />
        ];
        break;
      case 'anxiety':
        chartData = getChartData('anxiety');
        lines = [
          <Line 
            key="anxiety" 
            type="monotone" 
            dataKey="score" 
            stroke="#6366F1" 
            strokeWidth={3} 
            name="Anxiety Score"
          />
        ];
        break;
      case 'both':
        chartData = getChartData();
        lines = [
          <Line 
            key="depression" 
            type="monotone" 
            dataKey="score" 
            stroke="#8B5CF6" 
            strokeWidth={3} 
            name="Depression Score"
            filter={(d) => d.type === 'depression'}
          />,
          <Line 
            key="anxiety" 
            type="monotone" 
            dataKey="score" 
            stroke="#6366F1" 
            strokeWidth={3} 
            name="Anxiety Score"
            filter={(d) => d.type === 'anxiety'}
          />
        ];
        break;
    }

    return (
      <div className="shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Assessment Progress</h3>
          <div className="flex space-x-2">
            {['both', 'depression', 'anxiety'].map((type) => (
              <button
                key={type}
                onClick={() => setActiveChart(type as any)}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeChart === type 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-black hover:bg-purple-100'
                }`}
              >
                {type === 'both' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip 
              labelFormatter={(label) => `Date: ${label}`}
              formatter={(value, name) => [value, name]}
            />
            <Legend />
            {lines}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  // Compute assessment summary
  const computeAssessmentSummary = () => {
    const depressionResults = mockAssessmentResults.filter(r => r.type === 'depression');
    const anxietyResults = mockAssessmentResults.filter(r => r.type === 'anxiety');

    return (
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h4 className="text-gray-500">Depression Assessments</h4>
          <p className="text-2xl font-bold text-purple-600">
            {depressionResults.length}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h4 className="text-gray-500">Anxiety Assessments</h4>
          <p className="text-2xl font-bold text-purple-600">
            {anxietyResults.length}
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h4 className="text-gray-500">Latest Score</h4>
          <p className="text-2xl font-bold text-purple-600">
            {mockAssessmentResults[mockAssessmentResults.length - 1].score}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold text-purple-600 mb-8">Your past activity</h1>
      
      {renderProgressChart()}
      {computeAssessmentSummary()}
    </div>
  );
};

export default Dashboard;