import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import "./PageBanner.css";

export default function PageBanner({ title, bgImage }) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
      aria-label={`${title} page banner`}
    >
      {/* Overlay */}
      <div className="page-banner-overlay"></div>

     
    

     {/* Content */}
      <Container className="page-banner-content text-center">
        <h1>{title}</h1>

        <Breadcrumb className="page-banner-breadcrumb justify-content-center">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </section>
  );
}
