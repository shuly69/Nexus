interface LinkProps {
    href: string;
    children: React.ReactNode;
}

export function LinkFooter({ href, children }: LinkProps) {
    return (
        <li><a href={href} className="hover:text-white transition">{children}</a></li>
    )
}