---
path: "/blog/build-a-chatbot-with-AWS-Lex"
date: "2018-04-17"
title: "The basics of building a Chatbot with Amazon Lex"
featuredImage: "../assets/img/chatbot.jpg"
---


In addition to the monthly *Serverless Meetups* organized by Offcourse, we organized a workshop on April 5th in Rotterdam with the topic Chatbots. Together with Christine Gerpheide from Amazon Web Services (AWS) we hosted an evening in which, as opposed to our Meetups, we used our laptops to build something rather than talking about dev.

Interesting to hear at the kick-off of the evening was that half of the group is familiar with AWS, but that Lex was fairly new to everyone. Amazon Lex (2016) is an AWS service for building conversational interfaces for applications using voice and text. With Amazon Lex, the same deep-learning engine that powers Amazon Alexa, you can build sophisticated, natural language chatbots into your applications to create new user experiences.

## Why build a chatbot and why use Amazon Lex to do it

We see chatbots on many commercial websites nowadays providing web visitors directions as to where to find something. They are also frequently used for broader customer support purposes. Chatbots can basically be used for written, and sometimes spoken, communication of any kind. To start with why you would want to build a chatbot, these are some of the benefits Christine told the group about:

* chatbots are a natural way to interact with someone - you can talk or write in real-time.
* chatbots work on demand - you don't have to open an application to use it.
* chatbots are accessible - even people who don't know how to use a computer could still interact with a chatbot.
* chatbots are efficient - its quicker to get an answer to your question through a chatbot, than having to search the web for the answer.

Amazon Lex is a great AWS service for building chatbots and has some great features. It's made applicable for integration with Facebook Messenger for instance, but also has an integration with Slack. Another important integration of Lex is the built-in integration with the AWS platform. An important one for building chatbots is the integration with Lambda - where Lex provides the chat functionality, Lambda transfers the information into code.

## How to configure your chatbot

So how do you get started?

First you'll need to create a (free) AWS account and go to Lex in AWS services in your web browser: [https://aws.amazon.com/lex](https://aws.amazon.com/lex/). You will need to enter your creditcard details, but won't get charged for this service if you don't exceed their free plan limitations.

You can now start setting up your chatbot configuration. Because we had only two hours for the entire workshop, Christine had been so nice to prepare a sample bot for the group upfront. The bot Christine created was a bot through which one can order flowers.

The following elements need to be configured for your own chatbot:

* **The intents** - an intent is a task the bot user wants the bot to perform. You can have multiple intents for one bot, as you want it to be able to answer more than 1 question. For each intent separately you define different ways in which the bot user would ask the bot to perform a task. These are called 'utterances'. For the flower ordering example this could look like this:
  - " I would like to place an order."
  - " I would like to order flowers."
  - " I would like to buy flowers."
  - " Can I please order flowers?"


  You can also the monitoring tab to get ideas for utterances for your intents.


*  **The slots** - a slot is information the bot needs to perform the actual task, in this case to place an order of flowers. This means that the bot will need to know the type of flower the person wants to order, when the person wants to receive the flowers and on which address. For these slots you also create utterances, which could look as follows:
  - {desiredItem}
  - {desiredDate}
  - {shippingAddress}


* **The confirmation** - this is not a necessity for every bot, but in case of purchasing it is a good idea to have your bot confirm with the customer on the order.


* **The actual fulfilment** - This is where you run the AWS Lambda function to place the actual ordering of the flowers or the action you want your bot to take.


Important to know is that Lambda has the control to steer the sequence of the slots, but has no control on understanding the intent, this is pure Lex. So what you define in Lex is the conversational data. With Lex you can build a bot that can go from voice input to text output and text input to text output. Christine used a voice recognizer during the workshop to showcase the voice input to text output. A voice recognizer basically cuts down the spoken intent into separate words and then understands it as natural language. If you want to build a chatbot that can receive voice and respond in voice you can have a look at AWS Polly to do this.



Share this blog post with your friends if you thinks this was useful.
