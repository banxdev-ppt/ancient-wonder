export function LoadingSkeletonCard() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      <div className="h-[200px] mb-4 rounded bg-[length:200%_100%] bg-shimmer animate-shimmer"></div>
      <div className="h-[20px] mb-2 rounded bg-[#f0f0f0] animate-shimmer"></div>
      <div className="h-[20px] mb-2 rounded bg-[#f0f0f0] animate-shimmer"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="h-[16px] w-[30%] rounded bg-[#f0f0f0] animate-shimmer"></div>
        <div className="h-[36px] w-[100px] rounded bg-[#f0f0f0] animate-shimmer"></div>
      </div>
    </div>
  );
}