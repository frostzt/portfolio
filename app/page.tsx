import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Sourav Singh Rawat
      </h1>
      <p className="mb-4">
          {`Hey there! I’m a backend-heavy engineer who accidentally fell in love with distributed systems, 
          low-level networking, and all the weird gremlin-infested corners of infrastructure that people usually 
          run away from. I’ve built Slack-first SaaS workflows, my own load balancer (because “nginx 
          is too mainstream”), and occasionally yell at C++ until it compiles. I talk to TCP sockets like they’re 
          sentient, write key-value stores no one asked for, and refactor code at 2AM because “the hash map wasn’t 
          quite right.” I believe in clean abstractions, dirty hands, and systems that refuse to fall 
          over—even if I do. Coffee-fueled, goroutine-powered, and dangerously curious.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
