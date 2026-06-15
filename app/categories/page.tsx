export default function CategoriesPage() {
  return (
    <div className="min-h-screen pt-40 px-10">
      <h1 className="text-6xl font-bold mb-10">
        Categories
      </h1>

      <div className="space-y-6 text-2xl">

        <a href="/categories/Technology">
          Technology
        </a>

        <br />

        <a href="/categories/Formula%201">
          Formula 1
        </a>

        <br />

        <a href="/categories/AI">
          AI
        </a>

        <br />

        <a href="/categories/Future">
          Future
        </a>

      </div>
    </div>
  )
}