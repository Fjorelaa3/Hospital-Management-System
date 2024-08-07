import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
// Create styles

const Bill = (props) => {
  const { reservation } = props;

  const QRCodeView = (id) => {
    const dataUrl = document
      .getElementById(`reservation${reservation.reservationId}`)
      .toDataURL();
    return (
      <View style={{ margin: 10, padding: 10 }}>
        <Image
          allowDangerousPaths
          src={dataUrl}
          style={{ width: "200px", marginHorizontal: "auto" }}
        />
      </View>
    );
  };
  return (
    <Document>
      <Page size="A4">
        <View style={{ margin: 10, padding: 10 }}>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            AFMSH ProHealth Clinic
          </Text>
        </View>
        <View style={{ margin: 10, padding: 10 }}>
          <Text>Name: {reservation.firstName}</Text>
          <Text>Surname: {reservation.lastName}</Text>
          <Text>Gender: {reservation.gender}</Text>
          <Text>Identity No: {reservation.identityNumber}</Text>
          <Text>Birthdate: {reservation.birthday}</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 10,
            padding: 10,
          }}
        >
          <Text style={{ fontStyle: "italic" }}>
          Please keep the receipt if you want to have the right to cancel it.
          </Text>
        </View>
        <QRCodeView id={reservation.reservationId} />
      </Page>
    </Document>
  );
};

export default Bill;
