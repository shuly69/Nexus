import { StarRatingStatic } from "@/entities/Card/ui/Rating";
import { ReviewCard } from "@/entities/Card/ui/Review";
import { reviews } from "@/shared/config/review";
import { Container } from "@/shared/ui/Container/Container";
import { section } from "motion/react-client";

export function ReviewSection() {
    return (
        <section className="bg-[#F9FAFB] lg:p-20 md:p-10 py-10 px-0.5 sm:px-2 text-center">
            <Container>
                <div>
                    <span className="text-[#4F46E5] text-sm font-bold uppercase">Reviews</span>
                    <h3 className="text-[#111827] text-4xl font-extrabold">Loved by Thousands</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </div>
            </Container>
        </section>
    )
}