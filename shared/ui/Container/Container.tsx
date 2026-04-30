export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-7xl mx-auto lg:px-8 md:px-1.5">
            {children}
        </div>
    )
}