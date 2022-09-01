import React from 'react'
import { Container, Sidebar, Footer, Header } from '../components/assets'
function DefaultLayout() {
    return (
        <div>
        <Sidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <Header />
          <div className="body flex-grow-1 px-3">
            <Container />
          </div>
          <Footer />
        </div>
      </div>
    );
}
  
export default DefaultLayout;