import React from 'react';
import dummyImg from "../assets/images/dummy-image.png"

const Users = () => {
  return (
    <div className='user-div'>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8">
          <div className="card mb-2">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <div className="d-flex">
                    <div>
                      <img className="user-image" src={dummyImg} alt="" />
                      <div className='video-icon'><i class="fa fa-video-camera" aria-hidden="true"></i></div>
                    </div>
                    <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
                      <h6 className="primary-color"><span>Pet3011 Par3011</span> <span className="edit-badge"><i className="fa fa-pencil" aria-hidden="true"></i>|<i className="fa fa-ellipsis-v" aria-hidden="true"></i></span> <span className="small-badge primary-bg"><i className="fa fa-plus" aria-hidden="true"></i> Chart</span> <span className="small-badge primary-bg"><i className="fa fa-plus" aria-hidden="true"></i> Enroll</span> </h6>
                      <div className="small-text mt-2">Male DOB : 01-Jan-1980 (42 Yrs)</div>
                      <div className="small-text mt-2"> Ethnicity : Caucasian (European) </div>
                      <div className="small-text mt-2"> Occupation : Management </div>
                      <div className="small-text mt-2"> <span>Account # :1513465337</span>
                        <span>MRN : (EBS Demo Facility - 35)</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-sm-12 col-md-12 col-lg-3 small-div">
                      <div className='primary-bg'>Risk</div>
                      <div className='secondary-bg' style={{ marginTop: "2px" }}>Tis Year :
                        <b>N/A</b>
                      </div>
                      <div className='secondary-bg' style={{ marginTop: "2px" }}>Last Year :
                        <b>N/A</b>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 small-div">
                      <div className='primary-bg'>Care Gaps</div>
                      <div className='d-flex justify-content-center'>
                        <div className='round-div' >3</div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 small-div">
                      <div className='primary-bg'>ASVD</div>
                      <div className='secondary-bg' style={{ marginTop: "2px" }}>Current Risk :
                        <b>2.70</b>
                      </div>
                      <div className='secondary-bg' style={{ marginTop: "2px" }}>Lowest Risk :
                        <b>0.20</b>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 small-div">
                      <div className='primary-bg'>SDOH</div>
                      <div className='secondary-bg' style={{ marginTop: "2px" }}>Tis Year :
                        <b>0.57</b>
                      </div>
                      <div className='secondary-bg' style={{ marginTop: "2px" }}>Last Year :
                        <b>0.60</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div style={{ fontWeight: "bold" }}>
                    <div className="small-text mt-2">Location : No Data Found</div>
                    <div className="small-text mt-2"> Primary : +919000000000 <span><i
                      className="fa fa-phone-square"
                      style={{ color: "#d36f14", fontSize: "15px" }}
                      aria-hidden="true"></i></span> </div>
                    <div className="small-text mt-2"> Emergency : +918000000000 </div>
                    <div className="small-text mt-2"> Policy Number : 8768758659 </div>
                    <div className="small-text mt-2"> Insurer : Medicare </div>
                  </div>
                  <div className="screening-div">
                    <h6>Screening</h6>
                    <div>
                      <span> <i className="fa fa-circle" aria-hidden="true"></i> DM</span>
                      <span> <i className="fa fa-circle" aria-hidden="true"></i> BP</span>
                      <span> <i className="fa fa-circle" aria-hidden="true"></i> Depression</span>
                      <br />
                      <span> <i className="fa fa-circle" aria-hidden="true"></i> Colorectal</span>
                      <span> <i className="fa fa-circle" aria-hidden="true"></i> Breast
                        Cancer</span> <br />
                      <span> <i className="fa fa-circle" aria-hidden="true"></i> Fall Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 small-card">
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between">
              <div><i className="fa fa-briefcase" aria-hidden="true"></i> Recent Activity :</div>
              <div><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
            </div>
            <div className="card-body">
              <p>Follow Up</p>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-header d-flex justify-content-between">
              <div><i className="fa fa-sticky-note" aria-hidden="true"></i> Latest Notes :</div>
              <div><i className="fa fa-plus-circle" aria-hidden="true"></i></div>
            </div>
            <div className="card-body">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sunt.
                  </div>
                  <div className="carousel-item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sunt.
                  </div>
                  <div className="carousel-item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sunt.
                  </div>
                </div>
                <button className="carousel-control-prev" type="button"
                  data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon secondary-bg"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"
                  data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon secondary-bg"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row list-cards row-cols-4 m-0">
        <div class="col col-sm-12 col-md-3 col-lg-3 px-0 primary-bg" >
          <div class="card h-100">
            <div class="card-body">
              <h5><b>Primary Physician :</b></h5>
              <div>Test Only</div>
              <h5><b>Primary Location :</b></h5>
              <div>EBS Demo Facility - 35</div>
              <h5><b>Referred By :</b></h5>
              <div>Not Provided</div>
              <h5><b>Last Visit :</b></h5>
              <div>15-Nov-2019</div>
              <h5><b>No of visit :</b></h5>
              <div>7 (in last 3 month)</div>
              <h5><b>No of Hospitalization :</b></h5>
              <div>0 (in last 3 month)</div>
              <h5 className='text-danger'><b>Readmission :</b></h5>
              <div className='text-danger'>0</div>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-3 col-lg-3 px-0" style={{ backgroundColor: "#75b934" }}>
          <div class="card h-100">
            <div class="card-body">
              <h5><b>Condition :</b></h5>
              <div>Heart Failure, Hypertension, Ischemic Heart Disease</div>
              <h5><b>Habits :</b></h5>
              <div>Smoking</div>
              <h5><b>Vitals :</b></h5>
              <div>BMI: NA, Systolic/Diastolic : 127/84, Glucose : NA, Saturation : NA</div>
              <h5><b>Lab :</b></h5>
              <div style={{ padding: "5px" }}>
                <span>HDL N/A</span>
                <span>LDL N/A</span>
                <span>HbA1c N/A</span>
              </div>

            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-3 col-lg-3 px-0" style={{ backgroundColor: "#ffb000" }}>
          <div class="card h-100">
            <div class="card-body">
              <h5><b>Allergy :</b></h5>
              <div>Env (Fungicide), Food (Egg), Food (Tree Nut)</div>
              <h5><b>Medication :</b></h5>
              <div>DIA-EZE</div>
              <h5><b>Immunization</b></h5>
              <div>1122 (dtp)</div>
            </div>
          </div>
        </div>
        <div class="col col-sm-12 col-md-3 col-lg-3 px-0" style={{ backgroundColor: "#f14103" }}>
          <div class="card h-100">
            <div class="card-body">
              <h5><b>Programs :</b></h5>
              <div>Remote Monitoring, Disease Management Program, CCM, AWW</div>
              <h5><b>Service Category :</b></h5>
              <div>High Acuity, Straight Medicare</div>
              <h5><b>Measures :</b></h5>
              <div>Adult Access to Preventive/Ambulatory Health Services All, Adult BMI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users