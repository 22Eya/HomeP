import React, { useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AccueilPage from './pages/AccueilPage';
import LoginModal from './Components/LoginModel';
//import EquipePage from './pages/EquipePage';
//import FormationsPage from './pages/FormationsPage';
//import EvenementsPage from './pages/EvenementsPage';
//import CommunautePage from './pages/CommunautePage';
//import EnvironnementPage from './pages/EnvironnementPage';
//import StatistiquesPage from './pages/StatistiquesPage';
//import ContactPage from './pages/ContactPage';
import {Routes,Route}from "react-router-dom";
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  BookOpen,
  Leaf,
  TrendingUp,
  Globe,
  Mail
} from 'lucide-react';
const App = () => {
  const [activeTab, setActiveTab] = useState('accueil');
  const [notifications, setNotifications] = useState(3);
  const [memberStats, setMemberStats] = useState({
    totalMembers: 2503,
    activeMembers: 3200,
    events: 45,
    formations: 28
  });

  // Animation des statistiques
  useEffect(() => {
    const interval = setInterval(() => {
      setMemberStats(prev => ({
        ...prev,
        totalMembers: prev.totalMembers + Math.floor(Math.random() * 3),
        activeMembers: prev.activeMembers + Math.floor(Math.random() * 2)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigation = [
    { id: 'accueil', label: 'Accueil', icon: Globe },
    { id: 'equipe', label: 'Équipe', icon: Users },
    { id: 'formations', label: 'Formations', icon: BookOpen },
    { id: 'evenements', label: 'Événements', icon: Calendar },
    { id: 'communaute', label: 'Communauté', icon: MessageCircle },
    { id: 'environnement', label: 'Environnement', icon: Leaf },
    { id: 'statistiques', label: 'Statistiques', icon: TrendingUp },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const renderPage = () => {
    switch (activeTab) {
      case 'accueil':
        return <AccueilPage memberStats={memberStats} />;
      case 'equipe':
        return <EquipePage />;
      case 'formations':
        return <FormationsPage />;
      case 'evenements':
        return <EvenementsPage />;
      case 'communaute':
        return <CommunautePage memberStats={memberStats} />;
      case 'environnement':
        return <EnvironnementPage />;
      case 'statistiques':
        return <StatistiquesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AccueilPage memberStats={memberStats} />;
    }
  };

  return (
   
    <div className="min-h-screen bg-gray-50">
      <Header notifications={notifications} />
      <Navigation navigation={navigation} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
    
  );
};

export default App;