type Props = {
    className?: string
}

export const Skeleton = ({className = ''}: Props) => {
    return (
        <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
    )
}