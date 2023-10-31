import React from 'react';
import '../Pages/Home.css'
import Navbar from '../Components/Navbar';
import Bottombar from '../Components/Bottombar';
import Main from '../Components/Main';


function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Bottombar/>
    </div>
  );
}

export default Home;