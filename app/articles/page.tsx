import Link from 'next/link'

const articles = [
{
title:'Apple M Series',
slug:'apple-m-series'
},
{
title:'Formula 1 Aerodynamics',
slug:'f1-aerodynamics'
},
{
title:'Coffee Shop WiFi',
slug:'coffee-shop-wifi'
},
{
title:'Attention Economy',
slug:'attention-economy'
},
{
title:'Open Web',
slug:'open-web'
}
]

export default function ArticlesPage() {

return (

<div className="min-h-screen p-12">

<h1 className="text-6xl font-bold mb-12">
All Articles
</h1>

<div className="space-y-6">

{articles.map(article=>(

<Link
key={article.slug}
href={`/articles/${article.slug}`}
>

<div className="glass-effect p-8 rounded-xl hover:scale-105 transition">

<h2 className="text-3xl">
{article.title}
</h2>

</div>

</Link>

))}

</div>

</div>

)

}
