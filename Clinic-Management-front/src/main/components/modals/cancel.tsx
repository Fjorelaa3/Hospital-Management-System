import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

interface ICheckInModal {
  open: boolean;
  onClose: () => void;
  reservationId: number;
  canceled: (data: boolean) => void;
}
const CheckInModal = (props: ICheckInModal) => {
  const { open, onClose, reservationId, canceled } = props;

  const cancelReservation = async () => {
    const response = await axios.put(`reservations/cancel/${reservationId}`);

    if (response.data.result) {
      toast.success("Veprimi u krye me sukses");
      canceled(true);
      onClose();
    }
  };
  return (
    <Modal show={open} centered>
      <ModalHeader>Cancellation of reservation</ModalHeader>

      <ModalBody>Are you sure you want to cancel your reservation?</ModalBody>
      <ModalFooter>
        <Button variant="danger" onClick={onClose}>
          Back
        </Button>
        <Button
          variant="warning"
          onClick={() => {
            cancelReservation();
          }}
        >
          OK
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CheckInModal;
