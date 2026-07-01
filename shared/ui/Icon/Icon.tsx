"use client";


export function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props} >
            
            <path d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function BasketIcon({cartCount = 0} : {cartCount: number}) {
    return (
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > 
            <path d="M6 9L12 3L18 9M4 9H20L18.5 19H5.5L4 9Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
            {cartCount > 0 && (
                <circle cx="18" cy="5" r="3" fill="#ff0000" />
            )}
        </svg>
    );
}

export function UserIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
           
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function SocialIcons({ children }: { children: React.ReactNode }) {
    return (
        <button className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition cursor-pointer">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                {children}
            </svg>
        </button>
    )
}