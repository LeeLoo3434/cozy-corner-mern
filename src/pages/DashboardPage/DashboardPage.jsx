import React from "react";
import { Link } from "react-router-dom";
import MyCarousel from "../../components/MyCarousel/MyCarousel";


export default function DashboardPage() {
  return (
    <>
      <div className="dashboard container-fluid d-flex row">
        <MyCarousel className="col-12" interval={3000} />
        <div className="mt-4 col-12">
          <h1 className="text-center mb-4">
            Connecting and Creating Events for the Queer Community
          </h1>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link to="/auth" className="btn btn-lg btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}