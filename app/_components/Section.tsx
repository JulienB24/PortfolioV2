import { PropsWithChildren } from "react";
import clsx from "clsx"; // Optionnel, aide à gérer les classes conditionnelles

export type SectionProps = PropsWithChildren<{
  className?: string;
}>;

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={clsx("md:py-20 lg:my-32 max-w-2xl lg:my-16 max-w-2xl m-auto lg:px-6 px-4", className, "my-16")}>
      {children}
    </section>
  );
};
