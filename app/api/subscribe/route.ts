import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(
process.env.RESEND_API_KEY
)

export async function POST(
req: Request
){

try{

const { email } =
await req.json()

if(
!email
){
return NextResponse.json(
{
success:false,
message:'Email required'
},
{
status:400
}
)
}

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(
!emailRegex.test(email)
){

return NextResponse.json(
{
success:false,
message:'Invalid email address'
},
{
status:400
}
)

}

await resend.emails.send({

from:
'onboarding@resend.dev',

to:
email,

subject:
'Welcome to Brain.exe',

html:`
<h1>Welcome to Brain.exe 🚀</h1>
<p>
You subscribed successfully.
</p>
`

})

return NextResponse.json(
{
success:true
}
)

}

catch(error){

console.error(error)

return NextResponse.json(
{
success:false,
message:'Subscription failed'
},
{
status:500
}
)

}

}