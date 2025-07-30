import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertTriangle, X } from 'lucide-react';

const DemoTool: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState('news');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        news: {
          status: 'verified',
          trustScore: 92,
          source: 'Reuters Official',
          details: 'Cross-referenced with 5 reliable sources'
        },
        certificate: {
          status: 'warning',
          trustScore: 67,
          source: 'QR Code Mismatch',
          details: 'Document QR code does not match issuing authority database'
        },
        other: {
          status: 'invalid',
          trustScore: 23,
          source: 'AI Watermark Detected',
          details: 'Content appears to be AI-generated with manipulation signatures'
        }
      };

      setResult(mockResults[documentType as keyof typeof mockResults]);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
      case 'invalid':
        return <X className="w-6 h-6 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'invalid':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Live Demo Tool
          </h2>
          <p className="text-lg text-gray-600">
            Experience the power of AI truth verification. No login required.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Document
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      {selectedFile ? selectedFile.name : 'Drop files here or click to upload'}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      PDF, JPG, PNG, DOCX up to 10MB
                    </p>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Type
                </label>
                <select
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="news">News Article</option>
                  <option value="certificate">Certificate</option>
                  <option value="other">Other Document</option>
                </select>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={!selectedFile || isAnalyzing}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5" />
                    <span>Verify Document</span>
                  </>
                )}
              </button>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Verification Results</h3>
              
              {!result && !isAnalyzing && (
                <div className="bg-white rounded-lg p-6 border-2 border-gray-200 text-center">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Upload a document to see verification results</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <span className="font-medium text-blue-600">Analyzing document...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-sm text-gray-600">Checking authenticity and cross-referencing sources...</p>
                  </div>
                </div>
              )}

              {result && (
                <div className={`rounded-lg p-6 border-2 ${getStatusColor(result.status)}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {getStatusIcon(result.status)}
                    <span className="font-bold text-lg capitalize">
                      {result.status === 'verified' ? '✅ VERIFIED' : 
                       result.status === 'warning' ? '⚠️ WARNING' : 
                       '❌ INVALID'}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Trust Score:</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg">{result.trustScore}/100</span>
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              result.trustScore >= 80 ? 'bg-green-500' :
                              result.trustScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${result.trustScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-medium">Source: </span>
                      <span>{result.source}</span>
                    </div>
                    
                    <div>
                      <span className="font-medium">Details: </span>
                      <span>{result.details}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTool;