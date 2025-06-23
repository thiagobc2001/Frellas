import { useState } from 'react';
import Home from './components/Home';
import ProposalForm from './components/ProposalForm';
import ProposalView from './components/ProposalView';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'form', 'proposal'
  const [proposalData, setProposalData] = useState(null);

  const handleCreateProposal = () => {
    setCurrentView('form');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleFormSubmit = (formData) => {
    // Gerar ID único para a proposta
    const proposalId = Date.now().toString();
    const proposalWithId = {
      ...formData,
      id: proposalId,
      createdAt: new Date().toISOString()
    };

    // Salvar no localStorage
    localStorage.setItem(`proposal_${proposalId}`, JSON.stringify(proposalWithId));
    
    // Salvar lista de propostas
    const existingProposals = JSON.parse(localStorage.getItem('proposals') || '[]');
    existingProposals.push(proposalId);
    localStorage.setItem('proposals', JSON.stringify(existingProposals));

    setProposalData(proposalWithId);
    setCurrentView('proposal');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Home onCreateProposal={handleCreateProposal} />;
      case 'form':
        return <ProposalForm onBack={handleBackToHome} onSubmit={handleFormSubmit} />;
      case 'proposal':
        return <ProposalView data={proposalData} onBack={handleBackToHome} />;
      default:
        return <Home onCreateProposal={handleCreateProposal} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  );
}

export default App;

