import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Nav } from './components/nav';
import * as ui from '@chakra-ui/react'
import { Card } from './components/card';
import { Header } from './components/header';
import { MainSection } from './components/mainsection';
import { Footer } from './components/footer';

function App() {
  return (
      <ui.Box width='100%' p='0' m='0'  box-sizing='border-box'
      >
        <Header/>
        <MainSection />
        <Card />
        <Footer/>
        </ui.Box>
  );
}

export default App;
