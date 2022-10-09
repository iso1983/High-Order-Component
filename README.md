This is a representation of how you can create a HOC/High order component.

What is the purpose of a HOC?

In simple terms a HOC is a component that upgrades another component.What do i mean by upgrade? It means it appends additional data to it,usually data from API.

When should i use a HOC?
When ever you have multiple components that will take data from APIs and render with that additional data.Instead of making an API call and use useState and other hooks in each component that will upgrade itself,we create a HOC and pass any component to it that needs to be updated/returned with additional data.This is good for refactoring purposes as well as higher performance.

An example.You have 2 components ,one is to receive user data and another is to receive shop data. Now what we can do is pass these components to HOC with different urls ,one for user data another for shop data url.and HOC will deal with updating those two components by making API calls and use useState and return the updated component so you do not have to do this process in each component seperately.
