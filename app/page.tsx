import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { MobileNav } from "@/components/mobile-nav"
import { ModelViewer } from "@/components/model-viewer"
import { FeaturedVideoSection } from "@/components/youtube-player"
import { ImageLightbox } from "@/components/image-lightbox"
import { getContent } from "@/lib/content"

export default async function Home() {
  const content = getContent()

  const products3D = [
    { src: "/images/products/sunglasses.webp", alt: "Luxury Sunglasses Collection", title: "Luxury Sunglasses", description: "Premium eyewear visualization" },
    { src: "/images/products/face-serum-nature.webp", alt: "Face Serum in Natural Setting", title: "Natural Skincare", description: "Organic product visualization" },
    { src: "/images/products/diamond-ring.png", alt: "Diamond Engagement Ring", title: "Diamond Jewelry", description: "Luxury ring visualization" },
    { src: "/images/products/face-serum-rose.jpeg", alt: "Face Serum with Rose", title: "Luxury Skincare", description: "Premium beauty product" },
    { src: "/images/products/hair-spray.jpeg", alt: "Hair Care Spray", title: "Organic Hair Care", description: "Natural hair product visualization", colSpan: "md:col-span-2 lg:col-span-2", aspectRatio: "aspect-[4/5] md:aspect-[16/10]" },
    { src: "/images/products/face-serum-hand.jpeg", alt: "Face Serum in Hand", title: "Skincare Application", description: "Product usage visualization", colSpan: "md:col-span-1 lg:col-span-2", aspectRatio: "aspect-[4/5] lg:aspect-[16/10]" },
  ]

  const modelingProducts = [
    { src: "/images/products/headphones-render.jpeg", alt: "Premium Headphones Render", title: "Premium Headphones", description: "Photorealistic render of wireless over-ear headphones with premium materials and branding" },
    { src: "/images/products/headphones-wireframe.jpeg", alt: "Headphones 3D Wireframe Model", title: "3D Wireframe Modeling", description: "Technical 3D mesh modeling showing the polygon structure used for precise product design" },
    { src: "/images/products/smartwatch-exploded-color.jpeg", alt: "Smartwatch Exploded View", title: "Smartwatch Component Design", description: "Exploded view showing internal components and assembly of a modern smartwatch" },
    { src: "/images/products/smartwatch-exploded-clay.jpeg", alt: "Smartwatch Clay Model Exploded View", title: "Product Prototyping", description: "Clay model rendering showing the design process for wearable technology", aspectRatio: "aspect-video" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto py-4 px-4 md:px-6 sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
          >
            CgSalih.com
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#About" className="hover:text-pink-400 transition-colors">About</Link>
            <Link href="#services" className="hover:text-pink-400 transition-colors">Services</Link>
            <Link href="#contact" className="hover:text-pink-400 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="#contact">
              <Button className="hidden md:flex bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                Hire Me
              </Button>
            </Link>
            <MobileNav />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24" id="About">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">{content.hero.headline1}</span>
                <span className="block">{content.hero.headline2}</span>
              </h1>
              <p className="text-sm uppercase tracking-wider text-gray-400">{content.hero.subtitle}</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#contact">
                <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
                  {content.hero.ctaText}
                </Button>
              </Link>
            </div>
            <div className="pt-6 md:pt-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{content.hero.bio}</h2>
              <p className="text-gray-400 text-sm md:text-base">{content.hero.bioDetail}</p>
            </div>
          </div>
          <div className="relative h-[250px] md:h-[400px] flex justify-center mt-4 md:mt-0">
            <div className="w-full h-full max-w-[300px] md:max-w-[400px] bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800">
              <ModelViewer />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="text-gray-400">Professional 3D visualization services tailored to your needs</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {content.services.map((s) => (
            <ServiceCard key={s.id} image={s.image} alt={s.title} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      {/* 3D Animations Section */}
      <section id="portfolio" className="container mx-auto px-4 md:px-6 py-16">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold">3D Animations</h2>
          <p className="text-gray-400">
            Bringing products to life with fluid motion and cinematic quality for commercials and social media
          </p>
        </div>

        <div className="space-y-12">
          <FeaturedVideoSection />

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">More Projects</h2>
              <p className="text-gray-400">Explore our portfolio of 3D animations and visualizations</p>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src="https://wn33l2wud8bxcspj.public.blob.vercel-storage.com/revision%20gif-min.gif" alt="Product Visualization" fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">Product Visualization</h3>
                    <p className="text-xs text-gray-400">Cosmetic product render</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src="https://wn33l2wud8bxcspj.public.blob.vercel-storage.com/gummies%20gif-min.gif" alt="Abstract Stone Animation" fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">Abstract Elements</h3>
                    <p className="text-xs text-gray-400">Floating stones animation</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src="https://wn33l2wud8bxcspj.public.blob.vercel-storage.com/bleter%20x%20grass%20grow%20gif-min.gif" alt="blertex grass" fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">Technical Design</h3>
                    <p className="text-xs text-gray-400">Industrial component render</p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezgif-35953cdeaefbd2-ed8njGH6Rgvl4d5U9NhTgKq6TjA0c6.gif" alt="Package Design" fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm">Package Design</h3>
                    <p className="text-xs text-gray-400">Product packaging visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Products Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-bold">3D Products</h2>
          <p className="text-gray-400">
            Photorealistic 3D models and still renders that showcase your products in their best light
          </p>
        </div>
        <ImageLightbox images={products3D} />
      </section>

      {/* Product Design Modeling Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 bg-gradient-to-b from-transparent to-gray-900 rounded-3xl">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-3xl font-bold">Product Design Modeling</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From concept to final render, I create detailed 3D models for product visualization, prototyping, and manufacturing
          </p>
        </div>
        <ImageLightbox images={modelingProducts} gridClassName="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12" />
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-3xl font-bold">Follow Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with me on social media for the latest updates, behind-the-scenes content, and more 3D inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://www.instagram.com/cgsalih" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center mb-4">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-medium text-lg mb-2">Instagram</h3>
            <p className="text-gray-400 text-sm mb-4">Follow my latest work and behind-the-scenes content</p>
            <span className="text-pink-400 group-hover:underline">@cgsalih</span>
          </a>

          <a href="https://x.com/cgsalih" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <Twitter className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-medium text-lg mb-2">X</h3>
            <p className="text-gray-400 text-sm mb-4">Stay updated with my latest thoughts and projects</p>
            <span className="text-pink-400 group-hover:underline">@cgsalih</span>
          </a>

          <a href="https://www.youtube.com/@cgsalih" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
              <Youtube className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-medium text-lg mb-2">YouTube</h3>
            <p className="text-gray-400 text-sm mb-4">Watch tutorials, timelapses, and showcase videos</p>
            <span className="text-pink-400 group-hover:underline">@cgsalih</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold pb-4">Get in touch</h2>
            <p className="text-gray-400">
              Ready to bring your products to life? Let&apos;s discuss your project and create something amazing together.
            </p>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="relative overflow-hidden rounded-lg">
                <Image src="/images/profile-photo.jpeg" alt="3D Artist Portrait" width={400} height={500} className="w-full object-cover" priority />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-medium">Let&apos;s create something amazing together</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">CgSalih</h3>
            <p className="text-gray-400 text-sm">Professional 3D visualization services for products, commercials, and social media content.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {content.services.map((s) => <li key={s.id}>{s.title}</li>)}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{content.contact.email}</li>
              <li>{content.contact.phone}</li>
              <li>{content.contact.location}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/cgsalih" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.youtube.com/@cgsalih" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://x.com/cgsalih" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
