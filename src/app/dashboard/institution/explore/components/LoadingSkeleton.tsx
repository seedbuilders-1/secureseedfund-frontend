import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="w-full space-y-6 p-8">
      <Skeleton className="w-full h-[400px] rounded-sm" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-8 w-[80%]" />
        <Skeleton className="h-4 w-[60%]" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-10 w-[30%]" />
      </div>

      <div className="space-y-4">
        <div className="flex gap-5">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
        <Skeleton className="h-px w-full" />
      </div>

      <div className="space-y-6">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-24 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-4">
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-[200px] w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
