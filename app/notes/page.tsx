import { Notes } from 'app/components/notes'

export const metadata = {
  title: 'Notes',
  description: 'Notes from books',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Notes</h1>
      <Notes />
    </section>
  )
}
