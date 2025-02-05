import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const LoginCallback = () => {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth.handleRedirect();
    }
  }, [authState, oktaAuth]);

  return <div>Loading authentication...</div>;
};

export default LoginCallback;

