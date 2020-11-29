import fetch from "node-fetch";

let postToAuthServer = async (path: string, body: any) => {
  console.log(`http://adonis-auth-server:3333/${path}`)
  return await fetch(`http://adonis-auth-server:3333/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export let authenticateTest = async () => {
  let response = await postToAuthServer("authenticate", {
    username: "test-username",
    password: "test-new-password",
  });
  console.log(response.status);
};

export let registerTest = async () => {
  let response = await postToAuthServer("register", {
    username: "test-username",
    password: "test-password",
    email: "matthewpatrickburke@gmail.com",
  });
  console.log(response.status);
};

export let sendResetEmailTest = async () => {
  let response = await postToAuthServer("sendResetEmail", {
    email: "matthewpatrickburke@gmail.com",
    url: "http://localhost:8080",
  });
  console.log(response.status);
};

export let resetPasswordTest = async (token: string) => {
  console.log(token);

  let response = await postToAuthServer("resetPassword", {
    token: token,
    email: "matthewpatrickburke@gmail.com",
    password: "test-new-password",
  });
  console.log(response.status);
};

export let enableUserTest = async (enable: boolean) => {
  let response = await postToAuthServer("enableUser", {
    username: "test-username",
    enable: enable,
  });
  console.log(response.status);
};

export let changeEmail = async (oldEmail: string, newEmail: string) => {
  let response = await postToAuthServer("changeEmail", {
    oldEmail: oldEmail,
    newEmail: newEmail,
  });
  console.log(response.status);
};
