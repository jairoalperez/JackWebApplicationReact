

import { MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function UserProfileItemsTable(props) {

    const [userProfile, setUserProfile] = useState(props.userProfile)

    console.log("User Profile Component", userProfile)

    return (
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
                    {
                        userProfile.experience.length > 0 ?
                            Object.keys(userProfile.experience[0]).map((key, index) => {
                                return (
                                    <th>{key}</th>
                                )
                            })
                            :
                            <>No Data Avaliable</>
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>


                <tr>
                    <td>
                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                class="rounded-circle"
                                alt=""
                                style={{ "width": "45px", "height": "45px" }}
                            />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Alex Ray</p>
                                <p class="text-muted mb-0">alex.ray@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">Consultant</p>
                        <p class="text-muted mb-0">Finance</p>
                    </td>
                    <td>
                        <span class="badge badge-primary rounded-pill d-inline"
                        >Onboarding</span
                        >
                    </td>
                    <td>Junior</td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-link btn-rounded btn-sm fw-bold"
                            data-mdb-ripple-color="dark"
                        >
                            Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                class="rounded-circle"
                                alt=""
                                style={{ "width": "45px", "height": "45px" }}
                            />
                            <div class="ms-3">
                                <p class="fw-bold mb-1">Kate Hunington</p>
                                <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">Designer</p>
                        <p class="text-muted mb-0">UI/UX</p>
                    </td>
                    <td>
                        <span class="badge badge-warning rounded-pill d-inline">Awaiting</span>
                    </td>
                    <td>Senior</td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-link btn-rounded btn-sm fw-bold"
                            data-mdb-ripple-color="dark"
                        >
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default  UserProfileItemsTable ;