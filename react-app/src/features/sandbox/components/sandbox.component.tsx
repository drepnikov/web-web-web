import * as React from "react";
import { RandomUserComponent } from "src/features/sandbox/components/random-user.component";

interface SandboxComponentPropsInterface {}

const SandboxComponent: React.FC<SandboxComponentPropsInterface> = () => {
  return <RandomUserComponent />;
};

export { SandboxComponent };
