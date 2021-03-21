import React from 'react';
import Link from 'next/link';

import notFound from '../assets/img/common/not-found.png';
import Footer from '../components/Footer';

const PageNotFound = () => (
  <>
    <section className='page-not-found'>
      <div className='wrapper not-found'>
        <div className='label not-found-label'><span>netflix</span>roulette</div>
        <img className='not-found-image' src={notFound} alt='Page not found'></img>
        <Link href="/">
          <button className='black-button'>GO BACK TO HOME</button>
        </Link>
      </div>
    </section>
    <Footer />
  </>
);
  
export default PageNotFound;