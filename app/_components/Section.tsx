import { PropsWithChildren } from "react";
import clsx from "clsx"; // Optionnel, aide à gérer les classes conditionnelles

export type SectionProps = PropsWithChildren<{
  className?: string;
}>;

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={clsx("my-8 md:py-12 lg:my-16 max-w-2xl m-auto lg:px-6 px-4", className)}>
      {children}
    </section>
  );
};
