'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import HeroSection from '@/components/home/HeroSection'
import FeaturedArticles from '@/components/home/FeaturedArticles'
import CategorySelector from '@/components/home/CategorySelector'
import ParticleBackground from '../components/home/ParticleBackground'
import ScrollProgress from '../components/home/ScrollProgress'
import ArticleGrid from '../components/home/ArticleGrid'

const containerVariants = {
hidden: { opacity: 0 },

visible: {
opacity: 1,
transition: {
staggerChildren: 0.2,
delayChildren: 0.3,
},
},
}

const itemVariants = {
hidden: {
opacity: 0,
y: 20,
},

visible: {
opacity: 1,
y: 0,

transition: {
duration: 0.8,
ease: 'easeOut',
},
},
}

export default function Home() {

const allArticles = [

{
title: 'Apple M-Series Explained',
slug: 'apple-m-series',
excerpt: 'How Apple chips changed computing',
},

{
title: 'Formula 1 Aerodynamics',
slug: 'f1-aerodynamics',
excerpt: 'Understanding airflow and speed',
},

{
title: 'Coffee Shop WiFi',
slug: 'coffee-shop-wifi',
excerpt: 'Public WiFi risks explained',
},

{
title: 'Attention Economy',
slug: 'attention-economy',
excerpt: 'How apps compete for attention',
},

]

const featuredArticles =
allArticles.slice(0, 3)

return (

<div className="relative">

<ScrollProgress />

<ParticleBackground />



{/* HERO */}

<section className="relative min-h-screen overflow-hidden">

<HeroSection />

</section>



{/* FEATURED */}

<section className="relative py-20 md:py-32 container-max">

<motion.div
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{
once: true,
amount: 0.3
}}
>

<motion.div
variants={itemVariants}
className="mb-12"
>

<h2 className="text-4xl md:text-5xl font-display font-bold mb-4">

Featured
<span className="text-gradient">
 Thoughts
</span>

</h2>

<p className="text-dark-300 text-lg max-w-2xl">

Dive into the latest explorations
across technology, Formula 1,
AI and the future.

</p>

</motion.div>

<FeaturedArticles
articles={featuredArticles}
/>

</motion.div>

</section>



{/* CATEGORY */}

<section className="relative py-12 container-max">

<CategorySelector />

</section>



{/* ARTICLE GRID */}

<section className="relative py-20 md:py-32 container-max">

<motion.div
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{
once: true,
amount: 0.3
}}
>

<motion.div
variants={itemVariants}
className="mb-12"
>

<h2 className="text-4xl md:text-5xl font-display font-bold">

Explore All
<span className="text-gradient">
 Articles
</span>

</h2>

</motion.div>

<ArticleGrid
articles={allArticles}
/>

</motion.div>

</section>



{/* JOIN COMMUNITY */}

<section className="relative py-20 md:py-32 container-max">

<motion.div

initial={{
opacity: 0
}}

whileInView={{
opacity: 1
}}

viewport={{
once: true
}}

transition={{
duration: 0.8
}}

className="
glass-effect
rounded-2xl
p-12
md:p-16
text-center
relative
overflow-hidden
"

>

<div
className="
absolute
inset-0
bg-gradient-to-r
from-accent-cyan/10
via-transparent
to-accent-purple/10
"
/>

<motion.div

initial={{
y: 20,
opacity: 0
}}

whileInView={{
y: 0,
opacity: 1
}}

viewport={{
once: true
}}

transition={{
duration: 0.6,
delay: 0.2
}}

className="relative z-10"

>

<h3 className="text-3xl md:text-4xl font-display font-bold mb-6">

Join the

<span className="text-gradient">

 Conversation

</span>

</h3>

<p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">

Subscribe and receive
new articles,
future experiments,
AI ideas and premium drops.

</p>



<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">

<input
id="email"
type="email"
placeholder="your@email.com"
className="input-field flex-1"
/>

<button
onClick={async()=>{

const input=
document.getElementById(
'email'
) as HTMLInputElement

if(
!input?.value
){

alert(
'Enter email'
)

return

}

const response=
await fetch(
'/api/subscribe',
{

method:'POST',

headers:{
'Content-Type':
'application/json'
},

body:
JSON.stringify({

email:
input.value

})

}

)

const data =
await response.json()

if(
response.ok
){

alert(
'🎉 Check your inbox'
)

input.value=''

}

else{

alert(
data.message
||
'Subscription failed'
)

}

}}

className="btn-primary whitespace-nowrap"
>

Subscribe

</button>

</div>

</motion.div>

</motion.div>

</section>

</div>

)
}