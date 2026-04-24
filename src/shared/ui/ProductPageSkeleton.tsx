import { Skeleton } from '@/shared/ui/Skeleton'

export const ProductPageSkeleton = () => {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-6 flex items-center gap-2">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-8 w-28 rounded-full" />
        </div>

        <div className="rounded-[2rem] bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(520px,0.85fr)] xl:items-start">
            <div>
              <div className="mb-5 flex justify-between gap-3">
                <Skeleton className="h-9 w-28 rounded-full" />
                <Skeleton className="h-9 w-24 rounded-full" />
              </div>
              <Skeleton className="h-[520px] w-full rounded-[1.5rem]" />
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <Skeleton className="h-28 rounded-2xl" />
                <Skeleton className="h-28 rounded-2xl" />
                <Skeleton className="h-28 rounded-2xl" />
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
              <Skeleton className="h-12 w-4/5 rounded-xl" />
              <Skeleton className="h-4 w-full rounded-full" />
              <Skeleton className="h-4 w-11/12 rounded-full" />
              <Skeleton className="h-4 w-10/12 rounded-full" />
              <Skeleton className="h-72 w-full rounded-[1.75rem]" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <Skeleton className="h-72 rounded-[2rem]" />
          <Skeleton className="h-72 rounded-[2rem]" />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <Skeleton className="h-80 rounded-[2rem]" />
          <Skeleton className="h-80 rounded-[2rem]" />
        </div>
      </div>
    </div>
  )
}
