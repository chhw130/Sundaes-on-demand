import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SummaryForm = () => {
  const [isCheck, setIsCheck] = useState(false);

  const checkBoxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          onChange={() => setIsCheck(!isCheck)}
          checked={isCheck}
          label={checkBoxLabel}
        />
        {/* <button disabled={!isCheck}>버튼</button> */}
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isCheck}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
