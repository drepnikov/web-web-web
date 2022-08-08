import * as React from "react";

interface SandboxComponentPropsInterface {}

const SandboxComponent: React.FC<SandboxComponentPropsInterface> = () => {
  return (
    <div>
      <img
        width="500"
        src="https://images.unsplash.com/photo-1659201045838-7905e3656417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      />
      <img
        width="500"
        src="https://images.unsplash.com/photo-1659355863904-a6b023894b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <img
        width="500"
        src="https://images.unsplash.com/photo-1656189641630-baf5189a42e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
    </div>
  );
};

export { SandboxComponent };
