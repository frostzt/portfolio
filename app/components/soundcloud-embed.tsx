interface SoundCloudEmbedProps {
  url: string
  title?: string
}

export function SoundCloudEmbed({ url, title }: SoundCloudEmbedProps) {
  // Convert SoundCloud URL to embed URL
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23171717&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`

  return (
    <div className="rounded-lg overflow-hidden border border-primary">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
        title={title || 'SoundCloud Track'}
        className="block"
      />
    </div>
  )
}
