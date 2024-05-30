import "mafs/core.css";
import "mafs/font.css";

import { Mafs, Coordinates } from "mafs";

export default function HelloFx() {
  return (
    <Mafs>
      <Coordinates.Cartesian />
    </Mafs>
  );
}
