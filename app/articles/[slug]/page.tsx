'use client'

import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import ScrollProgress from '../../../components/home/ScrollProgress'

const getArticleBySlug = (slug: string) => {
const articles = [
{
slug:"apple-m-series",
title:"Apple M Series — The Chip That Quietly Rebuilt Computing",
description:"A deep look into how Apple’s silicon strategy changed modern laptops.",
category:"Technology",
date:"2026-01-01",
author:"Brain.exe",
readingTime:14,

content:`

# Apple M Series — More Than Just Faster Chips

For years laptops followed a predictable pattern.

Every generation became slightly thinner, slightly faster, and slightly more expensive.

Then Apple did something unusual.

Instead of waiting for traditional chip manufacturers to improve performance, they designed their own processors.

That decision changed everything.

---

## The Problem Before Apple Silicon

Laptop users had accepted compromises.

Powerful laptops became hot.

Thin laptops became slow.

Battery life rarely matched marketing.

Apple’s Intel machines looked beautiful but eventually hit the same wall.

Heat.

Noise.

Power consumption.

The old architecture stopped scaling.

---

## Why Apple M Chips Felt Different

Apple didn’t only make a faster processor.

They redesigned the system.

CPU.

GPU.

Memory.

Neural engine.

Media processing.

Everything moved closer together.

That reduced communication delays.

Tasks that previously took seconds started feeling instant.

Applications opened immediately.

Video exports accelerated.

Battery life suddenly became realistic.

---

## Unified Memory

Traditional laptops separate RAM and graphics memory.

Apple merged them.

Instead of copying data constantly, components access the same memory pool.

That sounds small.

But the result is huge.

Editing.

Rendering.

Multitasking.

Everything feels smoother.

---

## The Industry Reaction

Competitors noticed.

Windows laptops started emphasizing efficiency.

Qualcomm pushed harder.

Intel redesigned roadmaps.

Everyone suddenly cared about battery again.

That pressure created better products for users.

---

## Final Thoughts

Apple didn’t invent processors.

Apple changed expectations.

People no longer accept loud laptops with poor battery.

And once expectations change—

the market never goes backward.
`
},
{
slug:"f1-aerodynamics",

title:"Formula 1 Aerodynamics",

description:"Understanding airflow and speed",

category:"Formula 1",

date:"2026-01-02",

author:"Brain.exe",

readingTime:12,

content:`

# Formula 1 Aerodynamics

Formula 1 cars generate enormous amounts of downforce.

Air moves around wings, floors, tires and bodywork.

The faster the car moves, the more carefully airflow must be controlled.

Engineers use front wings to direct turbulent air away from critical surfaces.

Ground effect tunnels under the car create suction and pull the car toward the road.

This increases grip dramatically.

But more downforce also increases drag.

Every team constantly balances corner speed and straight-line performance.

Small changes measured in millimeters can affect lap times.

Aerodynamics is why modern Formula 1 feels closer to aerospace engineering than traditional racing.

`
},
{
slug:"attention-economy",
title:"The Attention Economy — Why Every App Wants Your Mind",
description:"Your attention became one of the most valuable products in the world.",
category:"AI",
date:"2026-01-02",
author:"Brain.exe",
readingTime:12,

content:`

# The Attention Economy

People think technology companies sell products.

Most do not.

Many sell attention.

Your clicks.

Your scrolling.

Your time.

---

## Infinite Feeds Changed Everything

Older websites had endings.

Today’s apps rarely end.

More content appears.

More recommendations.

More engagement.

That design is intentional.

---

## Notifications Are Tiny Interruptions

One notification feels harmless.

Hundreds create habit loops.

Open app.

Check.

Close.

Repeat.

Eventually the behavior becomes automatic.

---

## Why It Works

Humans evolved for novelty.

New information triggers curiosity.

Platforms optimize for that.

Algorithms learn.

Content improves.

You stay longer.

---

## The Cost

Attention fragmentation.

Lower focus.

Reduced deep work.

Less intentional time.

---

## What To Do

Disable unnecessary notifications.

Schedule focused sessions.

Create friction.

Make attention expensive.

Your future depends on what repeatedly receives your focus.
`
},

{
slug:"coffee-shop-wifi",
title:"Why Coffee Shops Feel Like Productivity Machines",
description:"The strange psychology behind public focus.",
category:"Future",
date:"2026-01-03",
author:"Brain.exe",
readingTime:10,

content:`

# Coffee Shops And Productivity

Many people cannot focus at home.

But they open a laptop inside a café—

and suddenly work for hours.

Why?

---

## Controlled Noise

Silence isn’t always productive.

Moderate background noise improves creative thinking.

Coffee shops accidentally create ideal conditions.

---

## Social Accountability

People behave differently in public.

Opening entertainment feels visible.

Work feels expected.

That subtle pressure increases consistency.

---

## Environmental Signals

Environment becomes identity.

Desk → relaxation.

Bed → sleep.

Coffee shop → action.

Brains associate locations with behavior.

---

## Final Thought

Productivity is rarely motivation.

Most of the time—

it is environment.
`
}
]


  return articles.find((a) => a.slug === slug)
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl text-white">
          Article not found
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto pt-32 px-6"
      >
        <div className="max-w-4xl mx-auto">

          <span className="text-cyan-400">
            {article.category}
          </span>

          <h1 className="text-6xl font-bold mt-4 mb-6">
            {article.title}
          </h1>

          <p className="text-gray-400 mb-6">
            {article.description}
          </p>

          <div className="text-sm text-gray-500 mb-12">
            {formatDate(article.date)}
            {' • '}
            {article.readingTime} min read
            {' • '}
            {article.author}
          </div>

          <div className="prose prose-invert max-w-none">

            <ReactMarkdown>
              {article.content}
            </ReactMarkdown>

          </div>

          <div className="mt-12">

            <Link href="/">
              <button className="px-6 py-3 bg-cyan-500 rounded-lg">
                Back Home
              </button>
            </Link>

          </div>

        </div>
      </motion.section>
    </div>
  )
}