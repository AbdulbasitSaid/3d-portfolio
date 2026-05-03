import Image from "next/image"

interface ServiceCardProps {
  image: string
  alt: string
  title: string
  description: string
}

export function ServiceCard({ image, alt, title, description }: ServiceCardProps) {
  return (
    <div className=" rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300   bg-cover h-88 flex flex-col justify-between " style={{ backgroundImage: `url(${image})` }}>
      <div className="p-4 bg-black/30 backdrop-blur-md  ">
        <p className="font-medium text-xl ">{title}</p>
      </div>
      {/* <div className="relative aspect-[4/5] ">
        <Image src={image} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div> */}
      <div className=" bg-black/30 backdrop-blur-md   p-4">
        {/* <h3 className="font-medium text-sm md:text-base">{title}</h3> */}
        <p className="text-xs md:text-sm ">{description}</p>
      </div>
    </div>
  )
}
