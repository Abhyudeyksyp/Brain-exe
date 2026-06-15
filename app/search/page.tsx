'use client'

import Link from 'next/link'
import { useState } from 'react'

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

export default function SearchPage(){

const [query,setQuery]=useState('')

const results=
articles.filter(a=>

a.title
.toLowerCase()
.includes(
query.toLowerCase()
)

)

return(

<div className="min-h-screen p-12">

<h1 className="text-6xl mb-8">

Search

</h1>

<input

value={query}

onChange={(e)=>
setQuery(
e.target.value
)
}

placeholder="Search articles..."

className="
w-full
p-5
rounded-xl
bg-dark-800
mb-10
text-xl
"

/>

<div className="space-y-6">

{results.map(article=>(

<Link
key={article.slug}
href={`/articles/${article.slug}`}
>

<div className="glass-effect p-6 rounded-xl">

{article.title}

</div>

</Link>

))}

</div>

</div>

)

}