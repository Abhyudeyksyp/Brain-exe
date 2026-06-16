import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
try {

const { email } = await req.json()

console.log('EMAIL RECEIVED:', email)

const result = await resend.emails.send({

from:
'Brain.exe <hello@brainexe.online>',
to:
email,

subject:
'Welcome to Brain.exe',

html: `
<h1>Welcome to Brain.exe 🚀</h1>
<p>Hey CRAZYY MINDDDDDDDDDDDDDDDDD,>

<p>You've successfully subscribed to **Brain.exe**.</p>

<p>No spam. No endless sales pitches. No "10x productivity hacks. HEHEHEHEHEHEEHEHEHEHEHEHE"</p>

<p>Just occasional updates on:></p>

<ul>
<li>* AI & emerging tech</li>
<li>* Interesting internet finds</li>
<li>* Thought-provoking articles</li>
<li>* Random things worth reading</li>
</ul>

<p>Think of it as a small signal in a very noisy feed.
Until then, keep your curiosity running.</p>

— <p>Brain.exe</p>

<p><sub>Built and maintained by Abhyuday Kashyap.</sub>
.</p>
`

})

console.log(result)

return NextResponse.json({
success:true,
result
})

}

catch(error){

console.error(error)

return NextResponse.json(
{
success:false,
message:String(error)
},
{
status:500
}
)

}

}