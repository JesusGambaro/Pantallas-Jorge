import axios from "axios";
import {useState, useEffect} from "react";
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

const Table = ({section}) => {
  console.log(section);
  const [open, setOpen] = useState(false);
  const [simulators, setSimulators] = useState([]);
  useEffect(() => {
    (async () => {
      const {data} = await axios.get(
        `https://prueba-tecnica-be.herokuapp.com/simulators/${section}`
      );
      setSimulators(data);
      console.log(data);
    })();
  }, []);
  return (
    <MDBContainer fluid className="p-0 m-0 min-vh-100">
      <MDBNavbar
        expand="md"
        light
        bgColor="light"
        className="p-0 shadow-0 border-bottom"
        style={{height: "4rem"}}
      >
        <MDBContainer fluid className="m-0 p-0 h-100">
          <MDBNavbarBrand className="ms-4" href="/">
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
                    style={{border: ".1rem solid #00a6ff"}}
                  >
                    <MDBDropdownItem
                      className="square rounded-0"
                      style={{textTransform: "none"}}
                    >
                      <MDBDropdownLink
                        className="square rounded-0 w-md-100"
                        href="/VRs"
                      >
                        VRs
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink
                        className="square rounded-0 w-md-100"
                        href="/WEB360"
                      >
                        WEB 360
                      </MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem
                className="h-100 square rounded-0 mx-4"
                style={{color: "white"}}
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
              href="/"
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
        style={{border: ".0rem solid red"}}
      >
        <MDBTypography variant="h3" className="d-flex align-items-center">
          <img
            src={`./Images/${
              section === "vr"
                ? "Raster.png"
                : "dc2f796f667045a889d242b9f1f17218.png"
            }`}
            height={30}
            className="me-3"
          />
          Simuladores {section === "vr" ? "VRs" : "WEB 360"}
        </MDBTypography>
        <MDBTable responsive style={{border: ".1rem solid #C0CCDA"}}>
          <MDBTableHead light>
            <tr>
              <th>ID</th>
              <th>Curso</th>
              <th>Simulador</th>
              <th>Versión</th>
              <th>Alumnos conectados</th>
              <th>% Avance</th>
              <th>Estado</th>
              {section === "vr" && <th>Batería</th>}
              <th>Acciones</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {simulators.length &&
              simulators.map((sim, i) => {
                return (
                  <tr scope="col" className="table-light">
                    <th scope="row">{i + 1}</th>
                    <td>{sim.curso}</td>
                    <td>{sim.nombre}</td>
                    <td>{sim.version}</td>
                    <td>{sim.alumnosCon}</td>
                    <td>{sim.avance}</td>
                    <td>{sim.alumnosCon}</td>
                    {section === "vr" && (
                    <td>{sim.bateria}</td>
                    )}
                    <td>
                        <MDBBtn
                          className="shadow-0 m-0 mb-md-1"
                          color="dark"
                          size="sm"
                        >
                          Mensaje Emergente Masivo
                        </MDBBtn>
                        <MDBBtn
                          outline
                          className="mx-2  mb-md-1"
                          color="dark"
                          size="sm"
                        >
                          Gameplay
                        </MDBBtn>
                        <MDBBtn
                          className="shadow-0 ms-2"
                          color="dark"
                          size="sm"
                        >
                          Reporte
                        </MDBBtn>
                        <MDBBtn
                          floating
                          tag="a"
                          color="dark"
                          className="shadow-0 ms-lg-2 mt-md-1"
                          size="sm"
                        >
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </td>
                  </tr>
                );
              })}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </MDBContainer>
  );
};

export default Table;
