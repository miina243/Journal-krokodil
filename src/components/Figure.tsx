import Image from "next/image";

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10 sm:my-14">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-paper-dim">
        <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-ink-faint">{caption}</figcaption>
      )}
    </figure>
  );
}

export function ImageGallery({
  images,
}: {
  images: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <div className="my-10 grid gap-4 sm:my-14 sm:grid-cols-2">
      {images.map((img) => (
        <figure key={img.src}>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-dim">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
          </div>
          {img.caption && <figcaption className="mt-2 text-xs text-ink-faint">{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
