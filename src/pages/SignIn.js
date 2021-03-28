import React, { useState } from "react";
import { Form } from "../components";
import { HeaderContainer } from "../containers/Header";

export default function SignIn() {
  const [error, setError] = useState("");
  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
      </Form>
    </HeaderContainer>
  );
}
