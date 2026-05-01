import Banner from '@/components/shared/Banner';
import Card from '@/components/shared/Card';
import Navbar from '@/components/shared/Navbar';
import Top from '@/components/shared/Top';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
        <Navbar />  
        <Banner />
        <Top />
        <Card />
        {children}
        </>
    );
};

export default MainLayout;