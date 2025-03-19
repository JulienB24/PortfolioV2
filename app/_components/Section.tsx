import { PropsWithChildren } from "react";
import clsx from "clsx"; // Optionnel, aide à gérer les classes conditionnelles

export type SectionProps = PropsWithChildren<{
  className?: string;
}>;

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={clsx("max-w-3xl p-4 m-auto", className, "my-16")}>
      {children}
    </section>
  );
};
