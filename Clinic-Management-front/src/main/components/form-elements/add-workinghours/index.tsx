import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormSelect from '../select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IAddWorkingHours {
  value: any;
  onChange: (data: Array<any>) => void;
}

const AddWorkingHours = (props: IAddWorkingHours) => {
  const { value, onChange } = props;

  const [weekDayValue, setWeekDay] = useState<any>('');
  const [startTime, setStartTime] = useState<any>('');
  const [endTime, setEndTime] = useState<any>();

  const options = [
    { value: 0, label: 'Monday' },
    { value: 1, label: 'Tuesday' },
    { value: 2, label: 'Wednesday' },
    { value: 3, label: 'Thursday' },
    { value: 4, label: 'Friday' },
    { value: 5, label: 'Saturday' },
    { value: 6, label: 'Sunday' },
  ];

  return (
    <div>
      <div>Add schedules</div>
      <div>
        {value &&
          value.map((v: any, index: number) => {
            return (
              <div key={`ditet${index}${v.weekday}${v.startTime}`} className="d-flex justify-content-between" style={{ fontSize: '18px' }}>
                <div className="text-black fw-bold fst-italic">{options.find((o: any) => o.value == v.weekday).label}</div>
                <div>{v.startHour}</div>
                <div>{v.endHour}</div>
                <div>
                  <FontAwesomeIcon
                    icon={'fa-solid fa-trash' as any}
                    color={'red'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => onChange(value.filter((x: any) => x.weekday !== v.weekday || x.startTime !== v.startTime))}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          onChange(
            value
              ? [
                  ...value,
                  {
                    weekday: weekDayValue,
                    startHour: startTime,
                    endHour: endTime,
                  },
                ]
              : [
                  {
                    weekday: weekDayValue,
                    startHour: startTime,
                    endHour: endTime,
                  },
                ]
          );

          setStartTime('');
          setEndTime('');
          setWeekDay(undefined);
        }}
      >
        <div className="d-flex gap-2">
          <Form.Group>
            <Form.Label>Week day</Form.Label>
            <FormSelect
              options={options}
              value={weekDayValue}
              onChange={(newValue) => {
                setWeekDay(newValue);
              }}
              required={true}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start</Form.Label>
            <div>
              <input
                type={'time'}
                value={startTime}
                style={{
                  fontSize: '14px',
                  borderRadius: '5px',
                  height: '37px',
                  borderColor: 'hsl(0, 0%, 80%)',
                }}
                onChange={(e: any) => {
                  setStartTime(e.target.value);
                }}
                required
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>End</Form.Label>
            <div>
              <input
                type={'time'}
                value={endTime}
                defaultValue={''}
                style={{
                  fontSize: '14px',
                  borderRadius: '5px',
                  height: '37px',
                  borderColor: 'hsl(0, 0%, 80%)',
                }}
                onChange={(e: any) => {
                  setEndTime(e.target.value);
                }}
                required
              />
            </div>
          </Form.Group>
          <div className="d-flex align-items-center">
            <Button type="submit">
              <FontAwesomeIcon icon={'fa-solid fa-plus' as any} />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWorkingHours;
