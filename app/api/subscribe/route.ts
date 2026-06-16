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
<p>You subscribed successfully.</p>
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