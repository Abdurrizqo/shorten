interface LoadingOverlayProps {
  status: string;
}

function LoadingOverlay({ status }: LoadingOverlayProps) {
  if (status !== "LOADING") {
    return null;
  }

  return (
    <>
      <div className="w-screen h-screen absolute bg-white opacity-30 blur z-10"></div>
      <div className="h-screen w-screen flex justify-center flex-col gap-5 items-center absolute z-20">
        <span className="rounded-full animate-ping h-5 w-5 bg-orange-theme"></span>
        <p className="font-semibold text-orange-theme">Loading....</p>
      </div>
    </>
  );
}

export default LoadingOverlay;
