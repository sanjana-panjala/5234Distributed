import React from "react";

const About = () => {

  return (
    <div class="bg-light py-5">
      <div class="container py-5">
        <div class="row mb-4">
          <div class="col-lg-5">
            <h2 class="display-4 font-weight-light">Our team</h2>
            <p class="font-italic text-muted">Meet the people who make everything happen.</p>
          </div>
        </div>

        <div class="row text-center">
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="/Arvind-Picture.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 class="mb-0">Arvind Kumar</h5><span class="small text-uppercase text-muted">Chief Financial Officer</span>
              <p>Arvind is responsible for managing the finances for Distributed Danishes. He recently completed his MBA from
              The Ohio State University. He has been working on the team since 2021.</p>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img
                src="https://i.ibb.co/3mbBqsT/02023-EAC-DE92-4-DFD-88-BF-E356-B1-F9-B3-D1-1-201-a.jpg" alt=""
                width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
              <h5 className="mb-0">Sanjana Panjala</h5><span className="small text text-muted">Head Baker</span>
              <p>Sanj is responsible for creating and tweaking our danish recipes. She's currently completing her
                masters in Food Science at The Ohio State University. She has been part of Distributed Danishes since
                2020 and never gets tired of baking!</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="/Mohith-Picture.png" alt="" width="125" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 class="mb-0">Mohith Kankanala</h5><span class="small text-uppercase text-muted">Chief Technology Officer</span>
              <p> Mohith is responsible for managing the technological requirements of Distributed Danishes. He integrates new technology trends and ensures that it meets the needs of the company. He recently got his MBA from The Ohio State University. He has been working on the team since 2021.</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="/Ryan-Picture.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 class="mb-0">Ryan Baxter</h5><span class="small text-uppercase text-muted">Chief Information Security Officer</span>
              <p>Ryan is responsible for establishing and maintaining the enterprise vision, strategy, and program to ensure information assests and technologies are protected. He recently got his MBA from The Ohio State University. He has been working on the team since 2021.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;

/* https://bootstrapious.com/p/about-us-page */