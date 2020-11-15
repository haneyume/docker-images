const App = () => {
  const [env, setEnv] = React.useState("");
  const [version, setVersion] = React.useState("");

  React.useEffect(() => {
    const socket = io("/?token=123");

    axios.get("/api/getVersion").then((res) => {
      setEnv(res.data.env);
      setVersion(res.data.version);
    });
  }, []);

  return (
    <div>
      <div>{`env: ${env}`}</div>
      <div>{`version: ${version}`}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
