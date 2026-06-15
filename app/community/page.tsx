'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CommunityPage() {

const [email,setEmail]=useState('')
const [joined,setJoined]=useState(false)
const [error,setError]=useState('')

const subscribe=()=>{

if(!email.includes('@')){
setError('Enter a valid email')
return
}

localStorage.setItem(
'brainexe-community',
email
)

setError('')
setJoined(true)

}

return (

<div className="min-h-screen flex items-center justify-center px-6">

<div className="glass-effect rounded-2xl p-12 max-w-2xl w-full text-center">

<h1 className="text-6xl font-bold mb-6 text-gradient">

Join Brain.exe

</h1>

<p className="text-dark-300 mb-8">

Get future articles,
experiments,
AI ideas and updates.

</p>

<input
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="your@email.com"
className="
w-full
p-4
rounded-xl
bg-dark-900
mb-4
"
/>

{error && (

<p className="text-red-400 mb-4">

{error}

</p>

)}

<button
onClick={subscribe}
className="btn-primary w-full"
>

{joined
? '✓ Joined'
: 'Subscribe'}

</button>

{joined && (

<div className="mt-8">

<div className="text-green-400 text-xl mb-4">

🎉 Welcome to Brain.exe

</div>

<p className="text-dark-300">

Your email was saved locally.

</p>

<Link href="/">

<button className="btn-secondary mt-6">

Back Home

</button>

</Link>

</div>

)}

</div>

</div>

)

}