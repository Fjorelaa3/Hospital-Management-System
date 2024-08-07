import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Drawer from "../../../main/components/drawer";
import { useForm, Controller } from "react-hook-form";

interface IEmployeeFormDrawer {
  model?: any;
  mode: any;
  onCancel: () => void;
  onSave: (data: any) => void;
}
const EmployeeFormDrawer = (props: IEmployeeFormDrawer) => {
  const { model, mode, onCancel, onSave } = props;

  const { control, handleSubmit, watch } = useForm();
  return (
    <>
      <Drawer
        title={`${mode} Customer`}
        show={mode != null}
        actions={
          <>
            <Button onClick={() => onCancel()}>Cancel</Button>
            <Button
              className="mx-2"
              color="success"
              onClick={handleSubmit(onSave)}
            >
              Submit
            </Button>
          </>
        }
        onClose={() => onCancel()}
      >
        <>
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Controller
              control={control}
              name={"firstName"}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <InputGroup>
                    <Form.Control
                      value={value}
                      onChange={onChange}
                      autoFocus
                      required
                    />
                  </InputGroup>
                </>
              )}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Surname</Form.Label>
            <Controller
              control={control}
              name={"lastName"}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <InputGroup>
                    <Form.Control
                      value={value}
                      onChange={onChange}
                      autoFocus
                      required
                    />
                  </InputGroup>
                </>
              )}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Gender</Form.Label>
            <Controller
              control={control}
              name={"gender"}
              defaultValue="Male"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <Form.Select value={value} onChange={onChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </>
              )}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Controller
              control={control}
              name={"email"}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <InputGroup>
                    <Form.Control
                      value={value}
                      onChange={onChange}
                      autoFocus
                      required
                      type="email"
                    />
                  </InputGroup>
                </>
              )}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Adress</Form.Label>
            <Controller
              control={control}
              name={"adress"}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <InputGroup>
                    <Form.Control
                      value={value}
                      onChange={onChange}
                      autoFocus
                      required
                      type="email"
                    />
                  </InputGroup>
                </>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Birthdate</Form.Label>
            <Controller
              control={control}
              name={"birthday"}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                <>
                  <Form.Control type="date" value={value} onChange={onChange} />
                </>
              )}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Telephone number</Form.Label>
            <Controller
              control={control}
              name={"phoneNumber"}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <>
                  <InputGroup>
                    <Form.Control
                      value={value}
                      onChange={onChange}
                      autoFocus
                      required
                    />
                  </InputGroup>
                </>
              )}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Role</Form.Label>
            <Controller
              control={control}
              name={"role"}
              defaultValue="Staff"
              render={({ field: { onChange, value } }) => (
                <>
                  <Form.Select value={value} onChange={onChange}>
                    <option value="Staff">Staff</option>
                    <option value="Reception">Reception</option>
                  </Form.Select>
                </>
              )}
            />
          </Form.Group>
          {watch("role") == "Staff" && (
            <Form.Group className="mb-4">
              <Form.Label>Specialized as</Form.Label>
              <Controller
                control={control}
                name={"specialization"}
                defaultValue="Doctor"
                render={({ field: { onChange, value } }) => (
                  <>
                    <Form.Select value={value} onChange={onChange}>
                      <option value="Doctor">Doctor</option>
                      <option value="Nurse">Nurse</option>
                    </Form.Select>
                  </>
                )}
              />
            </Form.Group>
          )}
        </>
      </Drawer>
    </>
  );
};

export default EmployeeFormDrawer;
