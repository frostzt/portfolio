export const metadata = {
  title: 'Music',
  description: 'What I listen to and occasionally create.',
}

export default function MusicPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
        /music
      </h1>
      <p className="text-secondary mb-8">
        Music is my escape from debugging. I make beats in FL Studio,
        strum guitar when frustrated, and pretend I can play piano.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            What I Make
          </h2>
          <p className="text-secondary mb-4">
            Mostly lo-fi beats and ambient stuff. Nothing released yet,
            but maybe someday when I stop being a perfectionist.
          </p>
          {/* <div className="bg-secondary rounded-md p-4 border border-primary"> */}
          {/*   <p className="text-muted text-sm font-mono"> */}
          {/*     // TODO: embed SoundCloud or upload tracks here */}
          {/*   </p> */}
          {/* </div> */}
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            What I Listen To
          </h2>
          <ul className="space-y-3">
            <li className="text-secondary">
              <span className="text-primary">I love to listen to songs in several languages:</span> lo-fi hip hop, ambient, post-rock
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Instruments
          </h2>
          <ul className="space-y-3">
            <li className="text-secondary">
              <span className="text-primary">Guitar</span> — acoustic fingerpicking, electric noodling
            </li>
            <li className="text-secondary">
              <span className="text-primary">Piano</span> — learning, slowly
            </li>
            <li className="text-secondary">
              <span className="text-primary">FL Studio</span> — digital everything
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
            Playlists
          </h2>
          <div className="bg-secondary rounded-md p-4 border border-primary">
            <p className="text-muted text-sm font-mono">
              // Rain in making will come soon!!!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
