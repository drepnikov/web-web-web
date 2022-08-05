import * as React from "react";
import { SliderWithOpacityComponent } from "src/features/sandbox/components/slider/slider-with-opacity.component";

interface SandboxComponentPropsInterface {}

const SandboxComponent: React.FC<SandboxComponentPropsInterface> = () => {
  return <SliderWithOpacityComponent />;
};

export { SandboxComponent };
