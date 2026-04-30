
export function NavLink({ label, href }: { label: string; href: string }) {
    return(
        <a href={href} className="hover:text-gray-900 transition">{label}</a>
    )
}

export function NavLinkMobile({ label, href }: { label: string; href: string }) {
    return(
        <a href={href} className="hover:text-black transition-colors cursor-pointer">{label}</a>
    )
}