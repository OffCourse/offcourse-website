---
path: "/blog/introduction-graphql-meetup"
date: "2018-01-30"
title: "An introduction into GraphQL - Serverless Meetup Rotterdam"
featuredImage: "graphql.jpg"
---


We somehow seem to get tough, stormy weather every time we organize a Serverless Meetup. Just like last time, it was a very stormy evening in Rotterdam. Still, quite a lot of people attended and we had an interesting evening on the topic of GraphQL by Alessio di Crescenzo. Serghei Ghidora, our second speaker of the night, unfortunately had to cancel (due to the storm) and will be speaking on one of our next meetups. Keep an eye on our Meetup page for upcoming dates and speakers.


## An introduction into GraphQL

The main topic of the night therefore became GraphQL. GraphQL is a query language for API’s. The topic of GraphQL is interesting, especially for front-end developers, as it allows them to specify the data they need and the structure in which they need it in their queries. Also, it allows to add attributes to your queries, without harming existing ones. In other words, GraphQL API’s make it easy to stay backwards compatible. Alessio works as a front-end developer at Elsevier. He explained us why he likes GraphQL and how you can use it for your projects. A first impression of the topic of GraphQL by our members;

*“GraphQL to me seems rather simple. It’s very interesting to see how to build a GraphQL server yourself.”* — Stefano, front-end developer, new to serverless


## Why use GraphQL

Most developers are used to work with REST API’s. It’s a way of providing interoperability between computer systems on the internet. It’s practically a call to get data back from a server. Maintaining a REST API can be quite annoying, however, because it easily gets very coupled to a domain level. Also, with REST API’s it’s notoriously difficult to create relationships between resources. In practice, solving this often requires adding many specialized (i.e. non-Restful) endpoints to your API. Alessio gave some examples of how this can get problematic. Find his presentation holding these examples here.

The three main reasons to use GraphQL from a front-end perspective are:

- It allow us to not mix concern between server and clients
- You get a reduced number of roundtrips between server and clients because the client only has to go to the GraphQL server to get the data
- You only have 1 (GraphQL) endpoint instead of many


## Creating queries in GraphQL

After explaining the benefits of GraphQl, Alessio went into the more practical part and showed how you can create queries in GraphQL. Queries/ actions are the way GraphQL reads the data you want to get from the server. This means you specify what data you want to get through your query. These are the relationships you want to see. Not only the type of data, but also the shape of the data is what you request in your query. You do this at the end. Alessio used the tool Graphcool to show us how to create queries in GraphQL. Graphcool is a nice tool to write and test GraphQL queries. GraphQL isn’t tied to any specific database or storage engine. You can use it in any programming language of your choice.

At the core of any GraphQL server is a schema. The schema defines types and their relationships. It also specifies which queries can be made against the server. This helps you to create your query. Alessio created and example to get data on books from the server. Let’s say you want to know the title of every book and the number of pages it has and you want to get that data by the year of copyright. Your query then looks as follows:

query {

 books {

 _id

 title

 numberOfPages

 copyrightYear

 }

}


If you want to make a request that changes your data, this is called a mutation. You need to specify that your request has side-effects by writing ‘mutation’ at the top and not ‘query’.


## Creating a GraphQL server

Alessio continued on how a GraphQL server communicates with a database. For his projects he uses an Express server on Node with MongoDB to expose a GraphQL API. To do this, he only had to define his GraphQL schema and resolvers and a Mongoose model.

To be able to write queries and mutations, you need to make a GraphQL query definition and a GraphQL mutation definition on your server. You will find different sources online for written code to have a GraphQL server running in 30 seconds.


## The relationship between GraphQL and Serverless

The topic of GraphQL might seem a bit funny in relation to Serverless. After all, in Alessio’s presentation he spoke about creating a GraphQL server. However, GraphQL and Serverless are used more often in combination, probably because they are quite a natural match. It requires the same way of thinking about how to set up your API, but also on a technical level there are some great advantages to using GraphQL Serverless. What we got from this Meetup is that is it more safe to use GraphQL Serverless when you run long and heavy queries, because:

1. Cloud functions run in parallel by default, in other words, every request is completely isolated from the rest.

2. Long running request automatically time out, since cloud functions only run for the amount of time that the developer allows them to run.

If you want to learn more about GraphQL, take a look at the course on the Offcourse platform.


Are you in the Rotterdam area and curious to learn more about Serverless? Join our meetup group. It’s a group for anyone interested in building web, mobile and Internet-of-Things applications with Serverless architectures. Our group is open to beginners as well as experts.
