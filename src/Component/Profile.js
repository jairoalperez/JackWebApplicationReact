import { useEffect, useState } from "react";
import { NavBar } from "../Component/Nav";
import { Footer } from "../Component/Footer";
import { Button, Modal } from 'react-bootstrap';
import { Registor } from "../Component/Registration";
import axios from "axios";
import AuthServices from "../Services/AuthServices";
import React from 'react';

import "../index.css"
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Profile() {

  const [userData, setUserData] = useState(null)

  const [showEdit, setShowEdit] = useState(true)

  const [input, setInput] = useState()

  useEffect(() => {
    var data = '';

    var config = {
      method: 'post',
      url: 'http://localhost:8077/apiauth/apiprofile',
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).response
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setUserData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  const consoleLog = (event) => {
    event.preventDefault()
    console.log(userData)
  }

  const handleShowEdit = (event) => {
    event.preventDefault()
    setShowEdit(false)
  }

  const handleSaveEdit = (event) => {
    event.preventDefault()
    setShowEdit(true)
    
    var data = JSON.stringify(userData);
    
    var config = {
      method: 'put',
      url: 'http://localhost:8077/apiauth/updateprofile',
      headers: { 
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).response, 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      setUserData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleInput = (name, value) => {
    setUserData({
      ...userData,
      [name]: value
    })
  }

  return (
    <section className="profileBody" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              <div className="container">
                <Button onClick={(event) => { handleShowEdit(event) }}>Edit User</Button>
              </div>
            </MDBBreadcrumb>



          </MDBCol>
        </MDBRow>

        {

          (showEdit != false) ?
            <>
              {/* SHOWING THE USER DATA */}
              {
                (userData != null && userData != undefined) ?
                  <>

                    <MDBRow>
                      <MDBCol lg="4">
                        <MDBCard className="mb-4">
                          <MDBCardBody className="text-center">
                            <MDBCardImage
                              src={userData.profilePicture}
                              alt="avatar"
                              className="rounded-circle"
                              style={{ width: '150px' }}
                              fluid />
                            <p className="text-muted mb-1">Full Stack Developer</p>
                            <p className="text-muted mb-4">{userData.address}</p>
                            <div className="d-flex justify-content-center mb-2">
                              <MDBBtn onClick={(event) => { consoleLog(event) }}>Follow</MDBBtn>
                              <MDBBtn outline className="ms-1">Message</MDBBtn>
                            </div>
                          </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                          <MDBCardBody className="p-0">
                            <MDBListGroup flush className="rounded-3">
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fas icon="globe fa-lg text-warning" />
                                <MDBCardText>https://mdbootstrap.com</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                <MDBCardText>mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                <MDBCardText>@mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                <MDBCardText>mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                <MDBCardText>mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                            </MDBListGroup>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol lg="8">
                        <MDBCard className="mb-4">
                          <MDBCardBody>
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Full Name</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{userData.fullName}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Email</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{userData.email}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Phone</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{userData.mobileNumber}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Address</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{userData.address}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                          <MDBCol md="6">
                            <MDBCard className="mb-4 mb-md-0">
                              <MDBCardBody>
                                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                
                                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                            <MDBCard className="mb-4 mb-md-0">
                              <MDBCardBody>
                                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                </MDBProgress>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>

                  </>
                  :
                  <>
                    loading...
                  </>
              }

            </>
            :
            <>

              {/* EDITING THE USER DATA */}
              {
                (userData != null && userData != undefined) ?
                  <>

                    <MDBRow>
                      <MDBCol lg="4">
                        <MDBCard className="mb-4">
                          <MDBCardBody className="text-center">
                            <MDBCardImage
                              src={userData.profilePicture}
                              alt="avatar"
                              className="rounded-circle"
                              style={{ width: '150px' }}
                              fluid />
                            <p className="text-muted mb-1">Full Stack Developer</p>
                            <p className="text-muted mb-4">{userData.address}</p>
                            <div className="d-flex justify-content-center mb-2">
                              <MDBBtn onClick={(event) => { consoleLog(event) }}>Follow</MDBBtn>
                              <MDBBtn outline className="ms-1">Message</MDBBtn>
                            </div>
                          </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                          <MDBCardBody className="p-0">
                            <MDBListGroup flush className="rounded-3">
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fas icon="globe fa-lg text-warning" />
                                <MDBCardText>https://mdbootstrap.com</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                <MDBCardText>mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                <MDBCardText>@mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                <MDBCardText>mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                <MDBCardText>mdbootstrap</MDBCardText>
                              </MDBListGroupItem>
                            </MDBListGroup>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol lg="8">
                        <MDBCard className="mb-4">
                          <MDBCardBody>
                            <MDBRow>
                              <MDBCol>
                                <div class="input-group mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">First Name</span>
                                  </div>
                                  <input type="text" class="form-control" value={userData.firstName} aria-label="first" aria-describedby="basic-addon1" onChange={(event) => handleInput('firstName', event.target.value)}/>
                                </div>
                              </MDBCol>
                              <MDBCol>
                                <div class="input-group mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Last Name</span>
                                  </div>
                                  <input type="text" class="form-control" value={userData.lastName} aria-label="first" aria-describedby="basic-addon1" onChange={(event) => handleInput('lastName', event.target.value)}/>
                                </div>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol>
                                <div class="input-group mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Email</span>
                                  </div>
                                  <input type="text" class="form-control" value={userData.email} aria-label="last" aria-describedby="basic-addon1" onChange={(event) => handleInput('email', event.target.value)}/>
                                </div>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol>
                                <div class="input-group mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Contact Number</span>
                                  </div>
                                  <input type="text" class="form-control" value={userData.mobileNumber} aria-label="last" aria-describedby="basic-addon1" onChange={(event) => handleInput('mobileNumber', event.target.value)}/>
                                </div>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol>
                                <div class="input-group mb-3">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Address</span>
                                  </div>
                                  <input type="text" class="form-control" value={userData.address} aria-label="last" aria-describedby="basic-addon1" onChange={(event) => handleInput('address', event.target.value)}/>
                                </div>
                              </MDBCol>
                            </MDBRow>
                            <div className="container mt-3">
                              <Button onClick={(event) => { handleSaveEdit(event) }}>Save</Button>
                            </div>
                          </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                          <MDBCol md="6">
                            <MDBCard className="mb-4 mb-md-0">
                              <MDBCardBody>
                                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                </MDBProgress>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                            <MDBCard className="mb-4 mb-md-0">
                              <MDBCardBody>
                                <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                </MDBProgress>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>

                  </>
                  :
                  <>
                    loading...
                  </>
              }

            </>

        }

      </MDBContainer>
    </section>
  );
}

export { Profile }