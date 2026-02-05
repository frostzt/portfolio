export const metadata = {
  title: 'Bookshelf',
  description: 'Books I have read, am reading, or want to read.',
}

interface Book {
  title: string
  author: string
  status: 'reading' | 'read' | 'want'
  note?: string
}

const books: Book[] = [
  // Currently Reading
  {
    title: 'Angels & Demons',
    author: 'Dan Brown',
    status: 'reading',
  },
  // Read
  {
    title: 'The Exorcist',
    author: 'William Peter Blatty',
    status: 'read',
  },
  {
    title: 'Harry Potter and the Philosopher\'s stone',
    author: 'J.K. Rowling',
    status: 'read',
  },
  {
    title: 'Harry Potter and the Chamber of secrets',
    author: 'J.K. Rowling',
    status: 'read',
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    status: 'read',
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    status: 'read',
  },
  {
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J.K. Rowling',
    status: 'read',
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K. Rowling',
    status: 'read',
  },
  {
    title: 'The Republic',
    author: 'Plato',
    status: 'read',
  },
  {
    title: 'Range: Why Generalists Triumph in a Specialized World',
    author: 'David Epstein',
    status: 'read',
  },
  {
    title: 'And Then There were None',
    author: 'Agatha Christie',
    status: 'read',
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    status: 'read',
  },
  {
    title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
    author: 'Simon Sinek',
    status: 'read',
  },
  {
    title: 'Astrophysics for People in a Hurry',
    author: 'Neil deGrasse Tyson',
    status: 'read',
  },
  {
    title: 'Man\'s Search for Meaning',
    author: 'Viktor E. Frankl',
    status: 'read',
  },
  {
    title: 'Originals: How Non-Conformists Move the World',
    author: 'Adam M. Grant',
    status: 'read',
  },
  {
    title: 'Think like a Rocket Scientist',
    author: 'Ozan Varol',
    status: 'read',
  },
  {
    title: 'The Everything Store: Jeff Bezos and the Age of Amazon',
    author: 'Brad Stone',
    status: 'read',
  },
  {
    title: 'As a Man Thinketh',
    author: 'James Allen',
    status: 'read',
  },
  {
    title: 'Think and Grow Rich',
    author: 'Napolean Hill',
    status: 'read',
  },
  {
    title: 'Ikigai',
    author: 'Hector Garcia',
    status: 'read',
  },
  {
    title: 'Meditations',
    author: 'Marcus Aurelius',
    status: 'read',
  },
  {
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    status: 'read',
  },
  {
    title: 'Factfulness: Ten Reasons we\'re Wrong about the World',
    author: 'Hans Rosling',
    status: 'read',
  },
  {
    title: 'Rich Dad, Poor Dad',
    author: 'Robert T. Kiyosaki',
    status: 'read',
  },
  {
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    status: 'read',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'read',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    status: 'read',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    status: 'read',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    status: 'read',
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    status: 'read',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    status: 'read',
  },
  {
    title: 'How to win Friends and Influence People',
    author: 'Dale Carnegie',
    status: 'read',
  },
  {
    title: 'Zero to One: Notes on startups',
    author: 'Peter Thiel',
    status: 'read',
  },
  {
    title: 'Einstien: His Life and Universe',
    author: 'Walter Isaacson',
    status: 'read',
  },
]

export default function BookshelfPage() {
  const reading = books.filter((b) => b.status === 'reading')
  const read = books.filter((b) => b.status === 'read')
  const want = books.filter((b) => b.status === 'want')

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight mb-4 text-primary">
        /bookshelf
      </h1>
      <p className="text-secondary mb-8">
        Books that shaped how I think about systems, code, and everything else.
        Mostly technical, occasionally not.
      </p>

      <div className="space-y-10">
        {reading.length > 0 && (
          <div>
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Currently Reading
            </h2>
            <ul className="space-y-4">
              {reading.map((book) => (
                <li key={book.title}>
                  <span className="text-primary">{book.title}</span>
                  <span className="text-muted"> — {book.author}</span>
                  {book.note && (
                    <p className="text-sm text-muted mt-1">{book.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {read.length > 0 && (
          <div>
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Read
            </h2>
            <ul className="space-y-4">
              {read.map((book) => (
                <li key={book.title}>
                  <span className="text-primary">{book.title}</span>
                  <span className="text-muted"> — {book.author}</span>
                  {book.note && (
                    <p className="text-sm text-muted mt-1">{book.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {want.length > 0 && (
          <div>
            <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Want to Read
            </h2>
            <ul className="space-y-4">
              {want.map((book) => (
                <li key={book.title}>
                  <span className="text-primary">{book.title}</span>
                  <span className="text-muted"> — {book.author}</span>
                  {book.note && (
                    <p className="text-sm text-muted mt-1">{book.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
