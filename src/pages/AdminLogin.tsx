
import React from 'react';
import Navbar from '../components/Navbar';
import AdminLoginForm from '../components/AdminLoginForm';
import Footer from '../components/Footer';

const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ direction: 'rtl' }}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-100 py-20">
        <div className="container px-4">
          <AdminLoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
