import fs from 'fs'
import path from 'path'

const CONTENT_DIR =
path.join(process.cwd(), 'content')

export function getArticleBySlug(
slug: string
) {

const file =
path.join(
CONTENT_DIR,
`${slug}.md`
)
console.log(
'LOOKING FOR:',
slug
)
if (!fs.existsSync(file)) {

console.log(
'NOT FOUND:',
file
)

return null
}

const content =
fs.readFileSync(
file,
'utf8'
)

return {
slug,
title:
slug
.replaceAll('-', ' ')
.toUpperCase(),

content,

date: '2026',
author: 'Brain.exe',
category: 'Article',
readingTime: 8,
description:
'Long-form reading experience',
}

}

export function getAllArticles() {

const files =
fs.readdirSync(CONTENT_DIR)

return files.map((file) => ({
slug:
file.replace('.md',''),

title:
file
.replace('.md','')
.replaceAll('-',' ')
}))
}