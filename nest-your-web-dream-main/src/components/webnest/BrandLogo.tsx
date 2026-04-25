import logo1x from "@/assets/logo/webnest-48.png";
import logo2x from "@/assets/logo/webnest-96.png";
import logo3x from "@/assets/logo/webnest-144.png";
import logo4x from "@/assets/logo/webnest-192.png";

type BrandLogoProps = {
  /** Logical (CSS) pixel size of the rendered logo. */
  size?: number;
  className?: string;
  /** Above-the-fold logos should preload eagerly with high priority. */
  priority?: boolean;
  alt?: string;
  /** When true, render the icon + typographic "WEBNEST" wordmark lockup. */
  wordmark?: boolean;
  /** Visual size for the wordmark text — auto-pairs with the icon. */
  wordmarkSize?: "sm" | "md" | "lg";
  /** Tone of the "WEB" half of the wordmark. Use 'light' on dark surfaces. */
  tone?: "default" | "light";
};

/**
 * Retina-optimized WebNest brand mark.
 * - srcset with 1x/2x/3x/4x raster variants
 * - intrinsic width/height to reserve layout space (no CLS)
 * - eager + high fetchPriority for header (LCP), lazy + async for footer
 * - optional typographic wordmark that matches the landing page typography
 *   (Plus Jakarta Sans, 800, uppercase, tight tracking)
 */
export function BrandLogo({
  size = 40,
  className,
  priority = false,
  alt = "WebNest — We Build. You Grow.",
  wordmark = false,
  wordmarkSize = "md",
  tone = "default",
}: BrandLogoProps) {
  const img = (
    <img
      src={logo2x}
      srcSet={`${logo1x} 1x, ${logo2x} 2x, ${logo3x} 3x, ${logo4x} 4x`}
      width={size}
      height={size}
      alt={alt}
      decoding={priority ? "sync" : "async"}
      loading={priority ? "eager" : "lazy"}
      // @ts-expect-error fetchpriority is a valid HTML attribute, React types lag
      fetchpriority={priority ? "high" : "low"}
      draggable={false}
      className={wordmark ? "block object-contain" : className}
      style={wordmark ? { width: size, height: size } : undefined}
    />
  );

  if (!wordmark) return img;

  const textSize =
    wordmarkSize === "lg"
      ? "text-2xl md:text-[28px]"
      : wordmarkSize === "sm"
        ? "text-base"
        : "text-xl";

  const webTone = tone === "light" ? "text-white" : "text-foreground";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      {img}
      <span
        aria-hidden
        className={`font-sans font-extrabold uppercase leading-none tracking-[-0.02em] ${textSize}`}
      >
        <span className={webTone}>Web</span>
        <span className="text-primary">Nest</span>
      </span>
    </span>
  );
}