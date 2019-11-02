import React, { useState } from "react";
import { Typography, Form, Input, Button, Checkbox } from "antd";
import { Redirect } from "react-router-dom";
// import { FirebaseDB as db } from "../constants/firebase";

const { Title, Text } = Typography;
const { TextArea } = Input;

const MakeClaimContent = props => {
  const { data } = props;
  const [form, setForm] = useState({
    notes: "",
    permissions: false
  });
  const [redirect, setRedirect] = useState(false);

  if (data === null) {
    return (
      <div>
        <Title level={2}>Please select a transaction.</Title>
      </div>
    );
  }
  const handleTextChange = e => {
    form.notes = e.target.value;
    setForm({ form });
  };
  const handleCheckboxChange = e => {
    form.permissions = e.target.checked;
    setForm({ form });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    setRedirect(true);
  };
  if (redirect) return <Redirect to="/" />;
  return (
    <div>
      <Title level={2}>Claim Application</Title>
      <Title level={3}>#Transaction {data.id}</Title>
      <Form layout="vertical" onSubmit={handleSubmit}>
        <Text>Notes to HKECIC</Text>
        <TextArea
          rows={12}
          style={{ margin: "10px auto" }}
          placeholder="instructions and information pertaining to the claim"
          onChange={handleTextChange}
        />
        <Text>Data Permissions</Text>
        <Checkbox
          style={{ display: "block", margin: "10px auto" }}
          onChange={handleCheckboxChange}
        >
          Allow HKECIC to see all documents related to transaction
        </Checkbox>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MakeClaimContent;