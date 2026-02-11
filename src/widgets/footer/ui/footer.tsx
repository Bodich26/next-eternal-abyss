import Link from "next/link";
import { followLink } from "../model/follow-link";
import { Container } from "@/shared";

export const Footer = () => {
  return (
    <footer className="w-full py-3.5 bg-blacks-300">
      <Container className="flex justify-between items-center max-sm:flex-wrap max-sm:flex-col-reverse gap-3">
        <p className="text-center">&copy; Copyright Bodich 2026</p>
        <div className="flex items-center gap-3">
          <span>Follow us:</span>
          <ul className="flex gap-4">
            {followLink.map(({ icon: Icon, link }, index) => (
              <li key={index}>
                <Link href={link}>
                  {<Icon size={24} className="hover-effect-icon" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
