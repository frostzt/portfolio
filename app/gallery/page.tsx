import { GalleryImage } from 'app/components/gallery-image'

export const metadata = {
  title: 'Gallery',
  description: 'Art, photography, and other visual experiments.',
}

interface GalleryItem {
  src: string
  alt: string
  instagramUrl?: string
}

// Add your images here - save them to /public/gallery/
const photographyPosts: GalleryItem[] = [
  {
    src: '/gallery/photography-1.jpg',
    alt: 'Photography',
    instagramUrl: 'https://www.instagram.com/p/DUYouKUj4x9/',
  },
]

const drawingPosts: GalleryItem[] = [
  {
    src: '/gallery/drawing-1.jpg',
    alt: 'Drawing',
    instagramUrl: 'https://www.instagram.com/p/C2Cvoa-LMZk',
  },
]

export default function GalleryPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
        /gallery
      </h1>
      <p className="text-secondary mb-8">
        Visual things I make. Photography, drawings, digital art,
        whatever catches my eye or flows from my hands.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Photography
          </h2>
          {photographyPosts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photographyPosts.map((item, index) => (
                <GalleryImage
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  instagramUrl={item.instagramUrl}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted text-sm">Coming soon...</p>
          )}
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Drawings
          </h2>
          {drawingPosts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {drawingPosts.map((item, index) => (
                <GalleryImage
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  instagramUrl={item.instagramUrl}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted text-sm">Coming soon...</p>
          )}
        </div>
      </div>
    </section>
  )
}
