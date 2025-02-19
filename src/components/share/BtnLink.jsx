import { Button } from "@/components/ui/button";

export default function BtnLink({
  additionalBtnClasses,
  variant, // Main component is Shadcn Button so check shadcn for variants
  link,
  text,
  textColor,
  linkStyle,
}) {
  const defaultClasses = "rounded-full text-center text-xl";
  const ClassNames = `${defaultClasses} ${additionalBtnClasses}`;

  return (
    <a href={link} className={linkStyle}>
      <Button variant={variant} className={ClassNames}>
        <span className={textColor}> {text}</span>
      </Button>
    </a>
  );
}
