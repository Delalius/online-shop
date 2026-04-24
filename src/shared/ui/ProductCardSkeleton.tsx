import { Skeleton } from '@/shared/ui/Skeleton'

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 space-y-3">
      
      <Skeleton className="w-full aspect-square rounded-xl" />

      <Skeleton className="h-4 w-3/4" />

      <Skeleton className="h-3 w-1/2" />

      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>

    </div>
  )
}
