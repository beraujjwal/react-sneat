import React from 'react'
import { Container, Sidebar, Footer, Header } from '../components/assets'
function DefaultLayout() {
    return (
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <Container />
              </div>                
              <Footer />
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    );
}
  
export default DefaultLayout;