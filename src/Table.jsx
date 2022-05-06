import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";

const Table = () => {
  const [open, setOpen] = useState(false);
  return (
    <MDBContainer fluid className="p-0 m-0 min-vh-100">
      <MDBNavbar
        expand="md"
        light
        bgColor="light"
        className="p-0 shadow-0 border-bottom"
        style={{ height: "4rem" }}
      >
        <MDBContainer fluid className="m-0 p-0 h-100">
          <MDBNavbarBrand className="ms-4">
            <img
              src="./Images/ST_SMS_LOGO-01.png"
              alt="logo"
              loading="lazy"
              height={"55"}
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={open} navbar className="h-100">
            <MDBNavbarNav className="h-100">
              <MDBNavbarItem className="h-100">
                <MDBDropdown className="active h-100 shadow-0 w-md-100" group>
                  <MDBDropdownToggle
                    nav
                    caret
                    className="actived h-100 square rounded-0 caret-off "
                  >
                    Simuladores
                  </MDBDropdownToggle>
                  <MDBDropdownMenu
                    className="dropdown square rounded-0 w-md-100 mt-2 "
                    style={{ border: ".1rem solid #00a6ff" }}
                  >
                    <MDBDropdownItem
                      className="square rounded-0"
                      style={{ textTransform: "none" }}
                    >
                      <MDBDropdownLink
                        className="square rounded-0 w-md-100"
                        href="#"
                      >
                        Another action
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink
                        className="square rounded-0 w-md-100"
                        href="#"
                      >
                        Another action
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem
                className="h-100 square rounded-0 mx-4"
                style={{ color: "white" }}
              >
                <MDBNavbarLink
                  href="#"
                  className="h-100 d-flex justify-content-center align-items-center"
                >
                  Estadísticas
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="mx-4">
                <MDBNavbarLink
                  href="#"
                  className="h-100 d-flex justify-content-center align-items-center"
                >
                  Ubot
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="mx-4">
                <MDBNavbarLink
                  href="#"
                  className="h-100 d-flex justify-content-center align-items-center"
                >
                  Ayuda
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBBtn
              color="warning"
              className="p-1 py-2 me-3 shadow-0"
              href="/home"
            >
              Cerrar sesion
              <MDBIcon fas icon="sign-out-alt" className="fs-5" />
            </MDBBtn>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <MDBRow className="d-flex align-items-center justify-content-md-end">
        <MDBCol
          xl={9}
          xxl={6}
          className="d-flex align-items-center justify-content-center justify-content-md-end me-md-3 my-3"
        >
          <MDBBtnGroup
            size="lg"
            aria-label="Basic example"
            className="shadow-0 p-0"
          >
            <MDBBtn className="list-btns">Inicio</MDBBtn>
            <MDBBtn className="list-btns">Simuladores</MDBBtn>
            <MDBBtn className="list-btns">VRs</MDBBtn>
            <MDBBtn className="list-btns">Listado</MDBBtn>
          </MDBBtnGroup>
        </MDBCol>
      </MDBRow>
      <MDBContainer
        fluid
        className="px-4 mt-4"
        style={{ border: ".0rem solid red" }}
      >
        <MDBTypography variant="h3" className="d-flex align-items-center">
          <img src="./Images/Raster.png" height={30} className="me-3" />
          Simuladores VRs
        </MDBTypography>
        <MDBTable responsive style={{ border: ".1rem solid #C0CCDA" }}>
          <MDBTableHead light>
            <tr>
              <th>ID</th>
              <th>Curso</th>
              <th>Simulador</th>
              <th>Versión</th>
              <th>Alumnos conectados</th>
              <th>% Avance</th>
              <th>Estado</th>
              <th>Batería</th>
              <th>Acciones</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr scope="col">
              <th scope="row">1</th>
              <td>Química industrial</td>
              <td>Simulador 360</td>
              <td>v.1.0.8</td>
              <td>29</td>
              <td>60/100(60%)</td>
              <td>OFF</td>
              <td>30%</td>
              <td>
                <MDBBtn className="shadow-0 m-0" color="dark" size="sm">
                  Mensaje Emergente Masivo
                </MDBBtn>
                <MDBBtn outline className="mx-2" color="dark" size="sm">
                  Gameplay
                </MDBBtn>
                <MDBBtn className="shadow-0 ms-2" color="dark" size="sm">
                  Reporte
                </MDBBtn>
                <MDBBtn
                  floating
                  tag="a"
                  color="dark"
                  className="shadow-0 ms-lg-2"
                  size="sm"
                >
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </td>
            </tr>
            <tr scope="col" className="table-light">
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr scope="col">
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr scope="col" className="table-light">
              <th scope="row">4</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr scope="col">
              <th scope="row">5</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </MDBContainer>
  );
};

export default Table;
