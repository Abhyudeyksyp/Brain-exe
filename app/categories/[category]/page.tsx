import Link from 'next/link'

const articles = [

{
title:'Apple M Series',
slug:'apple-m-series',
category:'Technology'
},

{
title:'Formula 1 Aerodynamics',
slug:'f1-aerodynamics',
category:'Formula 1'
},

{
title:'Coffee Shop WiFi',
slug:'coffee-shop-wifi',
category:'Internet Culture'
},

{
title:'Attention Economy',
slug:'attention-economy',
category:'AI'
},

{
title:'Open Web',
slug:'open-web',
category:'Future'
},

]

export default function CategoryPage({
params
}:{
params:{
category:string
}
}){

const current=
decodeURIComponent(
params.category
)

const filtered=
articles.filter(

a=>

a.category
.toLowerCase()

===

current
.toLowerCase()

)

return(

<div className="min-h-screen p-16">

<h1
className="
text-6xl
font-bold
mb-12
"
>

{current}

</h1>

{

filtered.length===0

?

(

<p>

No articles yet.

</p>

)

:

(

<div
className="
space-y-6
"
>

{

filtered.map(
article=>(

<Link
key={article.slug}
href={`/articles/${article.slug}`}

>

<div
className="
glass-effect
rounded-xl
p-8
hover:scale-[1.02]
transition
cursor-pointer
"
>

<h2
className="
text-3xl
"
>

{article.title}

</h2>

</div>

</Link>

)

)

}

</div>

)

}

</div>

)

}