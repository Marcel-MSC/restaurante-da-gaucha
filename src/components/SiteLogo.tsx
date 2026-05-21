import logoSrc from "../assets/logo-restaurante-da-gaucha.png";

type SiteLogoProps = {
  variant?: "header" | "hero" | "footer";
  round?: boolean;
  className?: string;
};

export function SiteLogo({ variant = "header", round, className }: SiteLogoProps) {
  return (
    <img
      src={logoSrc}
      alt="Restaurante da Gaúcha — self service, marmitas e iFood"
      className={["siteLogo", `siteLogo--${variant}`, round && "siteLogo--round", className]
        .filter(Boolean)
        .join(" ")}
      width={320}
      height={320}
      decoding="async"
      fetchPriority={variant === "header" ? "high" : undefined}
    />
  );
}
