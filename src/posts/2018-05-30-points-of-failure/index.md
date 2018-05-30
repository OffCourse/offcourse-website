---
path: "/blog/server-vs-serverless"
date: "2018-05-30"
title: "Server vs. Serverless at Serverless Meetup Rotterdam"
featuredImage: "serverless_meetup_may.jpg"
---


We had a  little celebration on Thursday, May 17th, to close the **Serverless Meetup** season. With some pizza and beers we enjoyed the last presentation before the summer will start, this time one by Shannon Dealy. Shannon has been a member of our Meetup group since the start of the season, and attended our Meetup every month. It was very nice to have him on the other side of the stage this time and hear him speak about his own experiences in working with servers and working with Serverless architectures.

## How things fail

Shannon told us everything about **points of failure that apply to web development and the Internet as such** . Both from his own experience (ouch), as well as from what he has seen at the many different companies he worked for over the years as a developer.

Shannon explained what can cause failure (the programmer, a hardware failure, scaling failure, network failure or an attack) and noted: The more points of failure you provide, the more failures you will have. Current solutions that exist are automated testing, containers and serverless, and multiple network zones for example. But how can we protect ourselves from failures?

What to do:

1. Identify all possible points of failure.
2. Classify level of risk from "Critical" to "Who cares"?
3. Change "Critical" points to:

-   Eliminate
-   Add redundancy
-   Or provide other means of prevention or recovery

He also gave a list of tips to the group how to stay online:

- Anything that can go wrong, will! Believe it, plan for it.
- Backups!!!
- Eliminate or mitigate critical points of failure
- Goal: don't depend on third party services where possible
- Goal: everything redundant, distributed and vendor independent
- Control your domain (registrar/DNS) or you are off-line
- All core content & JS delivered by your servers
- Know how your services work, or who to call
- Have a recovery plan and TEST IT!

## Failure: Servers vs Serverless

To come to the topic of Serverless, Shannon shared his view on failure when comparing Servers with Serverless architectures. What he found out in practice is that most failure modes are common to both, but that there are a few Server specific problems:

- Overload (insufficient capacity)
- Hardware failure or Virtual machine crash
- Fixed target for attack
- Serverless specific advantages
- Scalability
- Hardware failure is implicitly handled
- Moving target for attack

Looking at the dangers of Serverless he states: " Failure can be good!" He gives an example of how a failure to scale can actually protect you and that only once you grow larger it becomes time to design for controlled failure.

## Presentation Offcourse

At this last Meetup before summer we decided it was also time to tell a bit more about Offcourse as a company, the host of the Serverless Meetup Rotterdam. A short recap:

Offcourse is a community of people who take a radical approach to learning. Instead of following 6 year curricula, Offcourse believes in learning only what you need, in bits and pieces, and sharing knowledge with others so everyone can learn what they want. In addition to the monthly Serverless Meetup, Offcourse builts an [online learning and knowledge sharing platform](https://app.offcourse.io/sign-in), based on these principles. Their aim is to help professionals accelerate their learning with a focus on learning 21st Century Skills like programming, design, data analysis, but also entrepreneurship.

Offcourse is an Open Source project and believes in openness and collaboration. They are actively looking for developers who want to contribute open source code and help expand the Offcourse platform and it's community.

[https://www.offcourse.io/build](https://www.offcourse.io/build)



Share this blog post with your friends if you thinks this was useful.
