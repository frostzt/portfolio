import { GalleryImage } from 'app/components/gallery-image'

export const metadata = {
  title: 'Gallery',
  description: 'Art, photography, and other visual experiments.',
}

interface GalleryItem {
  src: string
  alt: string
  caption?: string
  instagramUrl?: string
}

const photographyPosts: GalleryItem[] = [
  {
    src: '/gallery/photography-1.jpg',
    alt: 'Her memories',
    caption: 'Her memories',
    instagramUrl: 'https://www.instagram.com/p/DUYouKUj4x9/',
  },
  {
    src: '/gallery/photography-2.jpg',
    alt: 'In plain sight',
    caption: 'In plain sight',
    instagramUrl: 'https://www.instagram.com/p/DUb1EnpE98r/',
  },
  {
    src: '/gallery/photography-3.jpg',
    alt: 'Were for her',
    caption: 'Were for her',
    instagramUrl: 'https://www.instagram.com/p/DUeF2JRE-zj/',
  },
]

const drawingPosts: GalleryItem[] = [
  {
    src: '/gallery/drawing-1.jpg',
    alt: 'Drawing',
    instagramUrl: 'https://www.instagram.com/p/C2Cvoa-LMZk',
  },
  {
    src: '/gallery/drawing-2.jpg',
    alt: 'Drawing',
  },
  {
    src: '/gallery/drawing-3.jpg',
    alt: 'Drawing',
  },
  {
    src: '/gallery/drawing-4.png',
    alt: 'Drawing',
  },
]

// Masonry grid component using CSS columns
function MasonryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {items.map((item, index) => (
        <GalleryImage
          key={index}
          src={item.src}
          alt={item.alt}
          caption={item.caption}
          instagramUrl={item.instagramUrl}
        />
      ))}
    </div>
  )
}

export default function GalleryPage() {
  return (
    // Break out of the max-w-3xl container to use max-w-6xl for gallery
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
            /gallery
          </h1>
          <p className="text-secondary max-w-lg">
            Visual things I make. Photography, drawings, digital art —
            whatever catches my eye or flows from my hands.
          </p>
        </header>

        <div className="space-y-20">
          {/* Photography Section */}
          <section>
            <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-8">
              Photography
            </h2>
            {photographyPosts.length > 0 ? (
              <MasonryGrid items={photographyPosts} />
            ) : (
              <p className="text-muted text-sm">Coming soon...</p>
            )}
          </section>

          {/* Drawings Section */}
          <section>
            <h2 className="text-xs font-medium text-muted uppercase tracking-widest mb-8">
              Drawings
            </h2>
            {drawingPosts.length > 0 ? (
              <MasonryGrid items={drawingPosts} />
            ) : (
              <p className="text-muted text-sm">Coming soon...</p>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
