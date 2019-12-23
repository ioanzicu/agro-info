import React from "react";
import { Container, Image, Table, Spinner, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface IUserData {
  email: string | null;
  displayName: string | null;
  photoUrl: string | null;
  providerId: string | null;
}

const UserAccount = () => {
  const userLocalData: any = window.localStorage.getItem(
    "firebaseui::rememberedAccounts"
  );

  const userData: Array<IUserData> = JSON.parse(userLocalData);
  console.log(userLocalData);

  // if no data, show spinner
  if (!userData)
    return <Spinner className=" m-5 text-center" animation="border" />;

  return (
    <>
      <Navbar />
      <Container className="mt-5 mb-5 pb-2">
        <h1 className="m-3">Hi and Welcome to the Agro Info</h1>
        <Row>
          <Col sm={4} className="mb-2 mt-2">
            {userData && userData[0].photoUrl && (
              <Image src={userData[0].photoUrl} roundedCircle fluid />
            )}
          </Col>
          <Col sm={8} className="justify-content-center align-self-center">
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th colSpan={2}># Your Profile Data</th>
                </tr>
              </thead>
              {userData && userData[0] && (
                <tbody>
                  {userData[0].displayName && (
                    <tr>
                      <td>
                        <i className="fas fa-user"></i> Name
                      </td>
                      <td>{userData[0].displayName}</td>
                    </tr>
                  )}
                  {userData[0].email && (
                    <tr>
                      <td>
                        <i className="fas fa-at"></i> Email
                      </td>
                      <td>{userData[0].email}</td>
                    </tr>
                  )}
                  {userData[0].displayName && (
                    <tr>
                      <td>
                        <i className="fas fa-sync-alt"></i> Signed In with
                      </td>
                      <td>{userData[0].providerId}</td>
                    </tr>
                  )}
                </tbody>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default UserAccount;
// dangerouslySetInnerHTML={{
// __html: <p>heelloy</p>
// }}
