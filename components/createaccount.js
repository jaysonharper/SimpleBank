function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("[" + label + "] required.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (label == "password" && field.length < 8) {
      setStatus("[password] must be 8 or more characters.");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log("name: " + name, ", email: " + email, ", pass: " + password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      // bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              disabled={!name && !email && !password}
              type="submit"
              className="btn btn-primary"
              onClick={handleCreate}
            >
              Create Account
            </button>
            <br />
            <span style={{ color: "red" }}>{status}</span>
          </>
        ) : (
          <>
            <h5 className="text-success">Success</h5>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )
      }
    />
  );
}