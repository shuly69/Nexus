import { footerLinksBrands, footerLinksHelp, footerLinksShop } from "@/shared/config/nav";
import { svgPaths } from "@/shared/config/svg";
import { Container } from "@/shared/ui/Container/Container";
import { SocialIcons } from "@/shared/ui/Icon/Icon";
import { Logo } from "@/shared/ui/Logo/Logo";
import { LinkFooter } from "@/widgets/Navigation/ui/Link";
import { LinkList } from "@/widgets/Navigation/ui/LinkList";
import Link from "next/link";
export function Footer() {
    return (
        <footer className="bg-[#0f0f0f] text-white lg:p-20 md:p-10 py-10 px-2">
        <Container>
          <div className="grid grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <section aria-label="About NEXUS " className="col-span-4 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Logo color="text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-75">
                Your trusted destination for premium smartphones. Authentic, fast, and always the best deal.
              </p>
              <div className="flex gap-3">
                <SocialIcons><path d={svgPaths.p23313780} /> </SocialIcons>
                <SocialIcons>
                  <path d={svgPaths.p30bb4100} />
                  <path d={svgPaths.p13971b80} />
                </SocialIcons>
                <SocialIcons><path d={svgPaths.p1bad4b00} /></SocialIcons>
              </div>
            </section>

            {/* Shop */}
            <LinkList label="Shop">
              {footerLinksShop.map(link => (
                <LinkFooter key={link.id} href={link.href}>{link.title}</LinkFooter>
              ))}
            </LinkList>


            {/* Help */}
            <LinkList label="Help">
              {footerLinksHelp.map(link => (
                <LinkFooter key={link.id} href={link.href}>{link.title}</LinkFooter>
              ))}
            </LinkList>
          </div>
        </Container>
          

          
        
      </footer>
    )
}