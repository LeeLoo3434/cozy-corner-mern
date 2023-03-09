import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'bootstrap';
import NavBar from '../../components/Navbar/Navbar';

export default function DashboardPage() {
  return (
    <>
      <NavBar />
      <Carousel />

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center mb-4">Connecting and Creating Events for the Queer Community</h1>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/auth" className="btn btn-lg btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
