/* import React, { useState, useEffect, useRef } from "react";
import {io} from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

function Socket() {
  const [response, setResponse] = useState("");
  const socket = useRef();

  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's {response}
    </p>
  );
}

export default Socket; */