import { Button } from "@/components/ui/button";

export default function BtnLink({
  additionalClasses,
  variant, // Main component is Shadcn Button so check shadcn for variants
  link,
  text,
  textColor,
}) {
  const defaultClasses = "rounded-full text-center text-xl border-2";
  const ClassNames = `${defaultClasses} ${additionalClasses}`;

  return (
    <a href={link}>
      <Button variant={variant} className={ClassNames}>
        <span className={textColor}> {text}</span>
      </Button>
    </a>
  );
}
