import React, { useState, useEffect } from 'react';
import { Download, Upload, Play, BarChart3, Shield, Database, Clock, FileText, Settings, Eye, AlertCircle, CheckCircle2 } from 'lucide-react';

const SyntheticDataPlatform = () => {
  const [activeTab, setActiveTab] = useState('tabular');
  const [generatedData, setGeneratedData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [metrics, setMetrics] = useState(null);
  const [config, setConfig] = useState({
    tabular: {
      rows: 1000,
      privacy_level: 'medium',
      correlation_preservation: 0.8,
      distribution_matching: 0.9
    },
    timeseries: {
      length: 365,
      frequency: 'daily',
      seasonality: true,
      trend: true,
      noise_level: 0.1
    },
    text: {
      samples: 500,
      style: 'formal',
      privacy_mode: 'differential',
      vocabulary_size: 10000
    }
  });

  // Sample datasets for demonstration
  const sampleTabularData = [
    { id: 1, name: 'John Doe', age: 32, income: 75000, city: 'New York', category: 'A' },
    { id: 2, name: 'Jane Smith', age: 28, income: 62000, city: 'Los Angeles', category: 'B' },
    { id: 3, name: 'Bob Johnson', age: 45, income: 89000, city: 'Chicago', category: 'A' },
    { id: 4, name: 'Alice Brown', age: 35, income: 71000, city: 'Houston', category: 'C' },
    { id: 5, name: 'Charlie Davis', age: 29, income: 58000, city: 'Phoenix', category: 'B' }
  ];

  const generateTabularData = () => {
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];
    const categories = ['A', 'B', 'C', 'D'];
    const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson'];
    
    const data = [];
    for (let i = 1; i <= config.tabular.rows; i++) {
      const age = Math.floor(Math.random() * 50) + 18;
      const baseIncome = 40000 + (age - 18) * 1000 + Math.random() * 20000;
      data.push({
        id: i,
        name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        age: age,
        income: Math.floor(baseIncome),
        city: cities[Math.floor(Math.random() * cities.length)],
        category: categories[Math.floor(Math.random() * categories.length)]
      });
    }
    return data;
  };

  const generateTimeSeriesData = () => {
    const data = [];
    const startDate = new Date('2023-01-01');
    const baseValue = 100;
    
    for (let i = 0; i < config.timeseries.length; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      let value = baseValue;
      
      // Add trend
      if (config.timeseries.trend) {
        value += i * 0.1;
      }
      
      // Add seasonality
      if (config.timeseries.seasonality) {
        value += Math.sin(i * 2 * Math.PI / 365) * 20;
        value += Math.sin(i * 2 * Math.PI / 7) * 5; // Weekly pattern
      }
      
      // Add noise
      value += (Math.random() - 0.5) * config.timeseries.noise_level * 100;
      
      data.push({
        date: date.toISOString().split('T')[0],
        value: Math.round(value * 100) / 100,
        category: Math.random() > 0.5 ? 'A' : 'B'
      });
    }
    
    return data;
  };

  const generateTextData = () => {
    const templates = [
      "The customer expressed {sentiment} about the {product} and mentioned {feature}.",
      "Our analysis shows {trend} in {metric} over the past {period}.",
      "The {department} team reported {status} on the {project} initiative.",
      "Market research indicates {insight} regarding {segment} preferences.",
      "The quarterly review highlighted {achievement} in {area} performance."
    ];
    
    const replacements = {
      sentiment: ['satisfaction', 'concerns', 'enthusiasm', 'disappointment', 'interest'],
      product: ['software', 'service', 'platform', 'solution', 'application'],
      feature: ['usability', 'performance', 'reliability', 'security', 'interface'],
      trend: ['improvement', 'decline', 'stability', 'growth', 'fluctuation'],
      metric: ['revenue', 'efficiency', 'engagement', 'conversion', 'retention'],
      period: ['quarter', 'month', 'week', 'year', 'season'],
      department: ['marketing', 'sales', 'engineering', 'operations', 'finance'],
      status: ['progress', 'completion', 'delays', 'success', 'challenges'],
      project: ['digital transformation', 'customer experience', 'process improvement', 'innovation', 'optimization'],
      insight: ['increased demand', 'changing preferences', 'new opportunities', 'market shifts', 'competitive advantages'],
      segment: ['enterprise', 'consumer', 'SMB', 'government', 'healthcare'],
      achievement: ['milestone completion', 'target exceeded', 'efficiency gains', 'cost reduction', 'quality improvement'],
      area: ['customer service', 'product development', 'operational', 'strategic', 'technical']
    };
    
    const data = [];
    for (let i = 1; i <= config.text.samples; i++) {
      const template = templates[Math.floor(Math.random() * templates.length)];
      let text = template;
      
      // Replace placeholders
      Object.keys(replacements).forEach(key => {
        const placeholder = `{${key}}`;
        if (text.includes(placeholder)) {
          const options = replacements[key];
          const replacement = options[Math.floor(Math.random() * options.length)];
          text = text.replace(placeholder, replacement);
        }
      });
      
      data.push({
        id: i,
        text: text,
        category: Math.random() > 0.5 ? 'positive' : 'neutral',
        confidence: Math.round((Math.random() * 0.3 + 0.7) * 100) / 100
      });
    }
    
    return data;
  };

  const calculateMetrics = (original, synthetic) => {
    const utility = Math.random() * 0.2 + 0.8; // 80-100%
    const privacy = Math.random() * 0.15 + 0.85; // 85-100%
    const fidelity = Math.random() * 0.25 + 0.75; // 75-100%
    
    return {
      utility: Math.round(utility * 100),
      privacy: Math.round(privacy * 100),
      fidelity: Math.round(fidelity * 100),
      diversity: Math.round((Math.random() * 0.3 + 0.7) * 100),
      correlation_preservation: Math.round((Math.random() * 0.2 + 0.8) * 100),
      distribution_similarity: Math.round((Math.random() * 0.25 + 0.75) * 100)
    };
  };

  const generateSyntheticData = async () => {
    setIsGenerating(true);
    
    // Simulate generation time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    let syntheticData;
    let originalSample;
    
    switch (activeTab) {
      case 'tabular':
        syntheticData = generateTabularData();
        originalSample = sampleTabularData;
        break;
      case 'timeseries':
        syntheticData = generateTimeSeriesData();
        originalSample = generateTimeSeriesData().slice(0, 10);
        break;
      case 'text':
        syntheticData = generateTextData();
        originalSample = generateTextData().slice(0, 5);
        break;
    }
    
    setGeneratedData(syntheticData);
    setOriginalData(originalSample);
    setMetrics(calculateMetrics(originalSample, syntheticData));
    setIsGenerating(false);
  };

  const downloadData = () => {
    if (!generatedData) return;
    
    const dataStr = JSON.stringify(generatedData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `synthetic_${activeTab}_data.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const renderConfigPanel = () => (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Settings className="w-5 h-5" />
        Generation Configuration
      </h3>
      
      {activeTab === 'tabular' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Rows</label>
            <input
              type="number"
              value={config.tabular.rows}
              onChange={(e) => setConfig({...config, tabular: {...config.tabular, rows: parseInt(e.target.value)}})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Privacy Level</label>
            <select
              value={config.tabular.privacy_level}
              onChange={(e) => setConfig({...config, tabular: {...config.tabular, privacy_level: e.target.value}})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low (High Utility)</option>
              <option value="medium">Medium (Balanced)</option>
              <option value="high">High (High Privacy)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correlation Preservation</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={config.tabular.correlation_preservation}
              onChange={(e) => setConfig({...config, tabular: {...config.tabular, correlation_preservation: parseFloat(e.target.value)}})}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{config.tabular.correlation_preservation}</span>
          </div>
        </div>
      )}
      
      {activeTab === 'timeseries' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length (Days)</label>
            <input
              type="number"
              value={config.timeseries.length}
              onChange={(e) => setConfig({...config, timeseries: {...config.timeseries, length: parseInt(e.target.value)}})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
            <select
              value={config.timeseries.frequency}
              onChange={(e) => setConfig({...config, timeseries: {...config.timeseries, frequency: e.target.value}})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.timeseries.seasonality}
                onChange={(e) => setConfig({...config, timeseries: {...config.timeseries, seasonality: e.target.checked}})}
                className="mr-2"
              />
              Include Seasonality
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={config.timeseries.trend}
                onChange={(e) => setConfig({...config, timeseries: {...config.timeseries, trend: e.target.checked}})}
                className="mr-2"
              />
              Include Trend
            </label>
          </div>
        </div>
      )}
      
      {activeTab === 'text' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Samples</label>
            <input
              type="number"
              value={config.text.samples}
              onChange={(e) => setConfig({...config, text: {...config.text, samples: parseInt(e.target.value)}})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Style</label>
            <select
              value={config.text.style}
              onChange={(e) => setConfig({...config, text: {...config.text, style: e.target.value}})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="technical">Technical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Privacy Mode</label>
            <select
              value={config.text.privacy_mode}
              onChange={(e) => setConfig({...config, text: {...config.text, privacy_mode: e.target.value}})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="differential">Differential Privacy</option>
              <option value="anonymization">Anonymization</option>
              <option value="paraphrasing">Paraphrasing</option>
            </select>
          </div>
        </div>
      )}
      
      <button
        onClick={generateSyntheticData}
        disabled={isGenerating}
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isGenerating ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            Generating...
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Generate Synthetic Data
          </>
        )}
      </button>
    </div>
  );

  const renderDataPreview = () => {
    if (!generatedData) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Generated Data Preview
          </h3>
          <button
            onClick={downloadData}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {Object.keys(generatedData[0]).map(key => (
                  <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {generatedData.slice(0, 10).map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((value, valueIdx) => (
                    <td key={valueIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {typeof value === 'number' ? value.toLocaleString() : value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          Showing 10 of {generatedData.length} rows
        </div>
      </div>
    );
  };

  const renderMetrics = () => {
    if (!metrics) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Data Quality Metrics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-blue-900">Privacy Score</h4>
            </div>
            <div className="text-2xl font-bold text-blue-600">{metrics.privacy}%</div>
            <div className="text-sm text-blue-700">Anonymization level</div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h4 className="font-medium text-green-900">Utility Score</h4>
            </div>
            <div className="text-2xl font-bold text-green-600">{metrics.utility}%</div>
            <div className="text-sm text-green-700">Data usefulness</div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-purple-600" />
              <h4 className="font-medium text-purple-900">Fidelity Score</h4>
            </div>
            <div className="text-2xl font-bold text-purple-600">{metrics.fidelity}%</div>
            <div className="text-sm text-purple-700">Statistical similarity</div>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Distribution Similarity</span>
            <span className="text-sm text-gray-600">{metrics.distribution_similarity}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${metrics.distribution_similarity}%` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Correlation Preservation</span>
            <span className="text-sm text-gray-600">{metrics.correlation_preservation}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full" 
              style={{ width: `${metrics.correlation_preservation}%` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Data Diversity</span>
            <span className="text-sm text-gray-600">{metrics.diversity}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full" 
              style={{ width: `${metrics.diversity}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Synthetic Data Generation Platform</h1>
              <p className="text-gray-600">Generate realistic synthetic datasets with privacy preservation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg mb-6">
          {[
            { id: 'tabular', label: 'Tabular Data', icon: Database },
            { id: 'timeseries', label: 'Time Series', icon: Clock },
            { id: 'text', label: 'Text Data', icon: FileText }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            {renderConfigPanel()}
          </div>

          {/* Data Preview and Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {renderDataPreview()}
            {renderMetrics()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticDataPlatform;