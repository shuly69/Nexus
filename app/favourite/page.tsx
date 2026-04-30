
import { Container } from "@/shared/ui/Container/Container";
import { FavouriteList } from "@/widgets/Favourite/ui/FavouriteList";
export const metadata = {
  title: "Favourite"
};
export default function FavouritePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <Container>
        <FavouriteList />
      </Container>
    </main>
  );
}

