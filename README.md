# Synthetic Data Generation Platform

A comprehensive React-based platform for generating realistic synthetic datasets with privacy preservation and quality evaluation metrics.

![Platform Screenshot](https://via.placeholder.com/800x400/2563eb/ffffff?text=Synthetic+Data+Generation+Platform)

## Features

### Multi-Type Data Generation
- **Tabular Data**: Generate customer records, demographics, and structured business data
- **Time Series**: Create financial metrics, sensor data, and temporal patterns
- **Text Data**: Produce business communications, reports, and natural language content

### Privacy & Security
- **Privacy Levels**: Configurable anonymization (Low, Medium, High)
- **Privacy Preservation**: Differential privacy and anonymization techniques
- **Data Protection**: Secure generation without exposing sensitive information

### Quality Metrics
- **Utility Score**: Measure data usefulness for analysis
- **Fidelity Score**: Statistical similarity to original data
- **Distribution Similarity**: Preservation of statistical distributions
- **Correlation Preservation**: Maintenance of variable relationships
- **Data Diversity**: Variety and uniqueness assessment

### User Experience
- **Modern Interface**: Clean, intuitive design with responsive layout
- **Real-time Configuration**: Live updates and instant feedback
- **Export Functionality**: Download generated datasets in JSON format
- **Mobile Responsive**: Works seamlessly across all devices

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/synthetic-data-platform.git
cd synthetic-data-platform

# Install dependencies
npm install

# Start the development server
npm start
```

### Using Create React App
```bash
npx create-react-app synthetic-data-platform
cd synthetic-data-platform
npm install lucide-react
# Replace src/App.js with the provided code
npm start
```

## Usage

### 1. Select Data Type
Choose from three data generation modes:
- **Tabular**: Structured data with columns and rows
- **Time Series**: Sequential data with temporal patterns
- **Text**: Natural language content generation

### 2. Configure Parameters

#### Tabular Data
- **Rows**: Number of records to generate (default: 1000)
- **Privacy Level**: Low (High Utility) / Medium (Balanced) / High (High Privacy)
- **Correlation Preservation**: Maintain relationships between variables (0-1)
- **Distribution Matching**: Preserve statistical distributions (0-1)

#### Time Series
- **Length**: Number of time points (default: 365 days)
- **Frequency**: Daily, Weekly, or Monthly intervals
- **Seasonality**: Include seasonal patterns
- **Trend**: Add long-term trends
- **Noise Level**: Control random variation (0-1)

#### Text Data
- **Samples**: Number of text samples to generate (default: 500)
- **Style**: Formal, Casual, or Technical writing style
- **Privacy Mode**: Differential Privacy, Anonymization, or Paraphrasing
- **Vocabulary Size**: Control text complexity (default: 10,000)

### 3. Generate & Evaluate
1. Click "Generate Synthetic Data"
2. Review quality metrics and data preview
3. Download the generated dataset

## Quality Metrics Explained

### Privacy Score (85-100%)
Measures the level of anonymization and data protection. Higher scores indicate better privacy preservation but may reduce data utility.

### Utility Score (80-100%)
Evaluates how useful the synthetic data is for analysis and machine learning tasks. Higher scores mean the data maintains analytical value.

### Fidelity Score (75-100%)
Assesses statistical similarity between synthetic and original data. Higher scores indicate better preservation of statistical properties.

### Advanced Metrics
- **Distribution Similarity**: How well the synthetic data matches original distributions
- **Correlation Preservation**: Maintenance of variable relationships and dependencies
- **Data Diversity**: Variety and uniqueness of generated samples

## Technical Details

### Dependencies
```json
{
  "react": "^18.0.0",
  "lucide-react": "^0.263.1"
}
```

### Data Generation Algorithms
- **Tabular**: Statistical sampling with correlation preservation
- **Time Series**: Seasonal decomposition with trend and noise modeling
- **Text**: Template-based generation with privacy-preserving transformations

### Privacy Techniques
- Differential Privacy for statistical queries
- K-anonymity for record-level protection
- Data masking and anonymization
- Correlation-preserving noise injection

## Roadmap

### Upcoming Features
- [ ] **Advanced ML Models**: GANs and VAEs for complex data generation
- [ ] **Custom Data Schemas**: User-defined data structures and constraints
- [ ] **Batch Processing**: Generate multiple datasets simultaneously
- [ ] **API Integration**: REST API for programmatic access
- [ ] **Data Validation**: Automated quality checks and validation rules
- [ ] **Export Formats**: CSV, Excel, Parquet, and database export options

### Performance Improvements
- [ ] **Streaming Generation**: Handle large datasets efficiently
- [ ] **Parallel Processing**: Multi-threaded generation for speed
- [ ] **Memory Optimization**: Reduced memory footprint for large datasets
- [ ] **Caching System**: Cache generated patterns for faster subsequent runs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Statistics

![GitHub stars](https://img.shields.io/github/stars/yourusername/synthetic-data-platform?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/synthetic-data-platform?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/synthetic-data-platform)
![GitHub license](https://img.shields.io/github/license/yourusername/synthetic-data-platform)

---
