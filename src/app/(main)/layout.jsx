import Banner from '@/components/shared/Banner';
import Card from '@/components/shared/Card';
import Navbar from '@/components/shared/Navbar';
import Top from '@/components/shared/Top';
import React from 'react';
import AllAnimals from './all-animals/page';

const MainLayout = ({children}) => {
    return (
        <>
        <Navbar />  
        {children}
        </>
    );
};

export default MainLayout;