import Image from "next/image"

interface ServiceCardProps {
  image: string
  alt: string
  title: string
  description: string
}

export function ServiceCard({ image, alt, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-cover h-88 flex flex-col justify-between border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.45)]" style={{ backgroundImage: `url(${image})` }}>
      <div className="p-4 bg-black/40 backdrop-blur-md border-b border-white/10">
        <p className="font-medium text-xl ">{title}</p>
      </div>
      {/* <div className="relative aspect-[4/5] ">
        <Image src={image} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div> */}
      <div className="bg-black/40 backdrop-blur-md border-t border-white/10 p-4">
        {/* <h3 className="font-medium text-sm md:text-base">{title}</h3> */}
        <p className="text-xs md:text-sm ">{description}</p>
      </div>
    </div>
  )
}
