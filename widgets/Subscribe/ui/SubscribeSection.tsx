import { Container } from "@/shared/ui/Container/Container";

export function SubscribeSection() {
    return (
        <section className="lg:p-20 md:p-10 py-10 px-0.5 sm:px-2 bg-white">
            <Container>
                <div className="w-full bg-[url(/images/subscribe-section/bg-subscribe.png)] p-12 rounded-3xl bg-cover">
                    <div className="w-14 h-14 rounded-2xl border border-white/20 flex items-center justify-center bg-white/20 mx-auto">
                        <img src="images/subscribe-section/bell.png" alt="bell" />
                    </div>
                    <h2 className="text-white text-5xl font-extrabold text-center mt-6 mb-4">Never Miss a Deal</h2>
                    <p className="text-[#C7D2FE] text-lg max-w-lg mx-auto text-center">Subscribe for exclusive drops, early access to sales, and personalized phone recommendations.</p>
                    <div className="flex flex-wrap gap-3 justify-center mb-4 mt-8">
                        <input className="focus:border-white max-w-71.25 w-full py-3.5 px-5 text-[#A9A9A9] text-sm bg-white/10 border border-white/30 rounded-2xl" type="email" placeholder="Enter your email address" />
                        <button className="cursor-pointer hover:-translate-y-1 duration-300 transition-all font-bold bg-white rounded-2xl py-3.5 px-6 text-[#4338CA] text-sm border">Subscribe Free</button>
                    </div>
                    <span className="text-[#A5B4FC] text-[12px] text-center block">No spam. Unsubscribe anytime. Join 120,000+ subscribers.</span> 
                </div>
            </Container>
        </section>
    )
}