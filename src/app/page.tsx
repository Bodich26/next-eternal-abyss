import { MerchSkeleton, ToursSkeleton } from "@/shared";
import { CurrentAlbum } from "@/widgets/current-album";
import { GroupNews } from "@/widgets/group-news";
import { HeroImage } from "@/widgets/hero-image";
import { IdeaGroup } from "@/widgets/idea-group";
import { OurMerch } from "@/widgets/our-merch";
import { ToursConcerts } from "@/widgets/tours-concerts";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroImage />
      <CurrentAlbum />
      <IdeaGroup />
      <Suspense fallback={<ToursSkeleton />}>
        <ToursConcerts />
      </Suspense>
      <Suspense fallback={<MerchSkeleton />}>
        <OurMerch />
      </Suspense>
      <GroupNews />
    </>
  );
}
