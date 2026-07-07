function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="mesh-blob-1 absolute w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[110px] top-0 left-1/4" />
      <div className="mesh-blob-2 absolute w-[400px] h-[400px] bg-orange-500/15 rounded-full blur-[110px] bottom-0 right-1/4" />
      <div className="mesh-blob-3 absolute w-[350px] h-[350px] bg-amber-400/15 rounded-full blur-[100px] top-1/3 right-10" />
    </div>
  );
}

export default GradientMesh;