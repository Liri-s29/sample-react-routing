import React from "react";
import { Outlet } from "react-router";

export function Home() {
  return (
    <div >
      <div style={{ height: "50px", background: "green", width: "100%" }}>
        Nav
      </div>
      <br />
      <Outlet />
    </div>
  );
}

export function Component1() {
  return (
    <div>
      <div style={{ height: "400px", background: "blue", width: "100%" }} >Component 1</div>
        <Outlet />
    </div>
  );
}

export function Component3() {
  return (
    <div>
      <div style={{ height: "200px", background: "blue", width: "100%" }}>Component 3</div>
    </div>
  );
}

export function Component2() {
  return (
    <div>
      <div style={{ height: "200px", background: "red", width: "100%" }} >Component 2</div>
    </div>
  );
}
