import { useEffect, type ComponentType } from "react";

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
  return function WithLogger(props: P) {
    const name = WrappedComponent.displayName || WrappedComponent.name || "Component";

    useEffect(() => {
      console.log(`[withLogger] ${name} mounted`);
      return () => console.log(`[withLogger] ${name} unmounted`);
    }, [name]);

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;