---
path: "/blog/IOT-machine-to-machine-communication-meetup"
date: "2018-02-22"
title: "Internet-of-Things and Machine-to-Machine communication"
featuredImage: "mqtt_meetup.jpg"
---

**This is a recap of the Serverless Meetup Rotterdam on the topic of MQTT**

The theme of this month’s Serverless Meetup Rotterdam was MQTT. Thomas van der Veen took the lead in presenting a talk on this topic. The second speaker, Shannon Dealy, who planned to talk about Servers & Serverless, unfortunately had to cancel due to flu. As we had to compete with the Serverlessconf in Paris and high time for winter holidays, we had a slightly smaller group than at our previous meetups. No problem there, we held an unconference with the group on topics they liked to discuss: problem-solving in software development and the programming language Go.

*Keep an eye on our Meetup page (Serverless Meetup Rotterdam) for upcoming dates and speakers.*


## MQTT- a TCP protocol

MQTT is a TCP protocol. TCP enables two hosts to establish a connection and exchange streams of data. This is different from UDP, as UDP is connectionless. MQTT was designed as an extremely lightweight publish/subscribe messaging transport from machine to machine. There is no message format for MQTT, you can send any type of message over MQTT. It is therefore designed for many different use cases.

Examples of use cases include push instead of pull messaging and enterprise to mobile messaging. A concrete example of an enterprise to mobile use case is Facebook Messenger. Thomas also gave an example of Siberia where the Internet connection is established over satellites. This is a nice example of Internet-Of-Things.


## How MQTT works

The two hosts that establish the connection for communication in MQTT are the publisher and the subscriber. By subscribing the subscriber initiates the connection, which is done through a broker. An MQTT broker looks at the topic of each message and sees which subscribers are subscribed to a publisher and sends the message through. Thomas gave some examples of companies in the MQTT ecosystem in his presentation.


## MQTT features: retained message

An example of a great feature of MQTT is retained message, which enables to let the publisher send only the last message to a subscriber and have it saved by the broker. This is ideal for use cases like measuring the temperature in a room, as Thomas gave as an example. The temperature in a room does not change often, therefore you do not want to store all the data, but only the latest. For a use case like Bitcoin, it’s less suitable, because the Bitcoin values change very frequently.

MQTT was first held in specification by IBM and they made it royalty free. Since 2013 it’s no longer company owned. There is now an MQTT 5 coming out. This version makes it easier to make a question-response type of action.

**If you want to learn more about MQTT, take a look at the course on the Offcourse platform.**


## Problem-solving and Go programming language

After the presentation, the participants spread into a group that focused on the problem-solving in software development and the other group discussed the Go programming language. Go was discussed because not many people use it, while it’s great for its simplicity and easy in deployment.

The discussion on problem-solving started with how to do research in order to understand the specific problem but quickly the question whether people share the solution they found took over. Strikingly, most people said they don’t share the solutions, but that they should. People feel that the problem is not that interesting anymore when they come to know the answer.

It was agreed that a good way to share the solution would be on the medium where it was found. It’s a way to say to the Internet ‘please save this’. You might actually end up looking for the same solution again in the future. A great quote from the audience on this was: *“Writing about your solution to the problem you had, is actually writing to your future self.”*


Are you in the Rotterdam area and curious to learn more about Serverless? Join our meetup group. It’s a group for anyone interested in building web, mobile and Internet-of-Things applications with Serverless architectures. Our meetup is open for anyone interested in the topic, from beginners to experts.
