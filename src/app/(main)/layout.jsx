import Banner from '@/components/shared/Banner';
import Card from '@/components/shared/Card';
import Navbar from '@/components/shared/Navbar';
import Top from '@/components/shared/Top';
import React from 'react';
import AllAnimals from './all-animals/page';
import Footer from '@/components/shared/Footer';

const MainLayout = ({children}) => {
    return (
        <>
        <Navbar />  
        {children}
        <Footer />
        </>
    );
};

export default MainLayout;