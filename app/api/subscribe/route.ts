import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(
process.env.RESEND_API_KEY
)

export async function POST(
request: Request
) {

try {

const { email } =
await request.json()

if (
!email ||
!email.includes('@')
) {
return NextResponse.json(
{
message:
'Enter a valid email'
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
'🎉 Welcome to Brain.exe',

html: `
<h1>Welcome to Brain.exe</h1>

<p>
You subscribed successfully.
</p>

<p>
You’ll receive future articles and updates.
</p>
`

})

return NextResponse.json({
success:true
})

}

catch {

return NextResponse.json(
{
message:
'Email send failed'
},
{
status:500
}
)

}

}