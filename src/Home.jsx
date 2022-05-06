import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
const Home = () => {
  const navigate = useNavigate();
  return (
    <MDBContainer
      fluid
      className="min-vh-100 bg-image pt-2 pb-4 d-flex align-items-center justify-content-center justify-content-lg-end"
      id="container"
      style={{ minHeight: "100vh" }}
    >
      <MDBRow className="d-flex min-vh-100 align-items-center col-lg-11 justify-content-end me-lg-5 px-lg-4">
        <MDBCol
          size={12}
          lg={6}
          xl={5}
          className="m-lg-0 p-lg-0 d-flex align-items-center justify-content-center justify-content-lg-start"
          style={{ border: ".0rem solid blue" }}
        >
          <MDBCard
            className="rounded-6 m-0 p-0 "
            style={{ border: "0rem solid green", width: "90%" }}
          >
            <MDBCardHeader
              className="text-center d-flex align-items-center"
              style={{ border: "none" }}
            >
              <MDBRow
                className="d-flex flex-column align-items-center w-100"
                // style={{border: ".1rem solid red"}}
              >
                <MDBCol size={5} sm={4} md="4" lg={5}>
                  <img
                    src="./Images/ST_SMS_LOGO-01.png"
                    alt="logo"
                    className="img-fluid "
                  />
                </MDBCol>
                <MDBCol size={8} className="mt-2">
                  <img
                    src="./Images/st_isologo_header_black-01.png"
                    alt="logo"
                    className="img-fluid"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody
              className="w-100 d-flex align-items-center flex-column justify-content-center py-0"
              style={{ border: ".0rem solid blue" }}
            >
              <MDBCardTitle
                className="text-center h2 w-75"
                style={{
                  color: "#47525E",
                  fontWeight: 700,
                  border: ".0rem solid green",
                  letterSpacing: ".1rem",
                }}
              >
                Ingresa tus datos
              </MDBCardTitle>
              <p className="text-center w-75 mt-3" style={{ fontSize: "14px" }}>
                Debes ingresar tus credenciales para acceder a la administración
                del SMS
              </p>
              <form style={{ border: ".0rem solid green", width: "70%" }}>
                <MDBInput
                  className="mb-3 mt-2 mt-sm-4"
                  type="email"
                  autoComplete={false}
                  id="form2Example1"
                  label="Nombre de Usuario / RUT / Email"
                  size="lg"
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form2"
                  label="Contraseña"
                  size="lg"
                  style={{ color: "#8492A6" }}
                />
                <MDBBtn
                  className="w-100"
                  size="lg"
                  style={{ background: "#00A6FF", fontWeight: 700 }}
                  onClick={() => navigate("/table")}
                >
                  ACCEDER
                </MDBBtn>
                <div class="text-center my-4">
                  <a style={{ color: "#8190A5", fontWeight: "400" }} href="#!">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
