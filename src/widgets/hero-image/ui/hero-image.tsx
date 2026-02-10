import { Container } from "@/shared";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <section className="bg-main flex items-center">
      <Container className="flex items-center justify-center">
        <Image
          src={"/logo/text-logo.png"}
          alt={"MainTextLogo"}
          width={1151}
          height={521}
        />
      </Container>
    </section>
  );
};
