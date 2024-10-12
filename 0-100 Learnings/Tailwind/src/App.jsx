import React from 'react';
import Navbar from './components/Navbar';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <JobList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
