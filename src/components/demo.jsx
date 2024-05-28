import * as React from "react";

import "mafs/core.css";
import "mafs/font.css";

// import { Mafs, Coordinates } from "mafs";
import pkg from "mafs";
const { Mafs, Coordinates } = pkg;

export default function HelloFx() {
  return (
    <Mafs>
      <Coordinates.Cartesian />
    </Mafs>
  );
}
