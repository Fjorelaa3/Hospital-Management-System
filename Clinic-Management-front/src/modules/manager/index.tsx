import { Spinner } from "@themesberg/react-bootstrap";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useGetUser from "../../main/hooks/useGetUser";

const ManagerHomePage = () => {
  const user = useGetUser();

  const [staffReport, setStaffReport] = useState<Array<any>>();
  const [reservationReport, setReservationReport] = useState<any>();
  const [receptionReport, setReceptionReport] = useState<Array<any>>();

  const fetchReports = async () => {
    const res1 = await axios.get("reports/staff");
    const res2 = await axios.get("reports/reservations");
    const res3 = await axios.get("reports/reception");

    if (res1.data && res2.data && res3.data) {
      setStaffReport(res1.data);
      setReservationReport(res2.data);
      setReceptionReport(res3.data);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <>
      {staffReport && reservationReport && receptionReport ? (
        <Container>
          <Row style={{ marginBottom: "2rem" }}>
            <Col xs="12" sm="12" md="12" lg="6">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <h4>Hello !</h4>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <h4>
                      {user.FirstName} {user.LastName}
                    </h4>
                  </div>

                  <div className="d-flex justify-content-center">
                    <h2 style={{ color: "blue" }}>
                      {moment().format("HH:mm")}
                    </h2>
                  </div>

                  <div className="d-flex justify-content-center">
                    <h4>Role : {user.role}</h4>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="12" md="12" lg="6">
              <Card style={{ height: "100%" }}>
                <Card.Header>Raport on staff</Card.Header>
                <Card.Body>
                  <table border={1}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Finished</th>
                        <th>Unfinished</th>
                        <th>Postponed</th>
                        <th>Delays</th>
                      </tr>
                    </thead>
                    <tbody>
                      {staffReport.map((s: any) => {
                        return (
                          <tr style={{ border: "2px solid" }}>
                            <td>{s.fullName}</td>
                            <td>{s.successfulReservations}</td>
                            <td>{s.unCompletedReservations}</td>
                            <td>{s.postponedReservations}</td>
                            <td>{s.delays}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12" md="12" lg="6">
              <Card style={{ height: "100%" }}>
                <Card.Header>
                  <h4>Raport on Reservations</h4>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <h4>
                      Pending reservations :
                      {reservationReport.totalWaitingReservations}
                    </h4>
                  </div>

                  <div className="d-flex justify-content-center">
                    <h4 style={{ color: "red" }}>
                      Canceled reservations:
                      {reservationReport.totalCanceledReservations}
                    </h4>
                  </div>

                  <div className="d-flex justify-content-center">
                    <h4 style={{ color: "green" }}>
                      Completed reservations :
                      {reservationReport.totalSuccessfulReservations}
                    </h4>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" sm="12" md="12" lg="6">
              <Card style={{ height: "100%" }}>
                <Card.Header>Report on Reception</Card.Header>
                <Card.Body>
                  <table border={1}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Total Reservations</th>
                        <th>Total Canceled Reservations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {receptionReport.map((r: any) => {
                        return (
                          <tr style={{ border: "2px solid" }}>
                            <td>{r.fullName}</td>
                            <td>{r.totalReservations}</td>
                            <td>{r.totalCanceled}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Spinner
            animation="border"
            role="status"
            style={{ marginBlock: "auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

export default ManagerHomePage;
