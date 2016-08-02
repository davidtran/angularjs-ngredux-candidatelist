# AngularJS Redux implementation
This is an example candidiate list application implement using AngularJS and Redux

# Why I use Redux in my AngularJS app:
- Redux centralize your data, when you app grow, you can still manage & debug your application data very easy.
- Data flow in one way only and you can debug easier.
- When your app do something wrong, you can quickly check which action causes the issue.
- Decouple the logic layer from the presentation layer. AngularJS only responsible for the presentation only. In later stage of your product, if you want use Ionic, you just copy the whole Redux actions and reducers which you have already created for your AngularJS to your new app and it still works perfectly. Even if you move your app to React, React Native or Backbone without rewriting the whole logic layer.

# How to use ?
- git clone https://github.com/davidtran/angularjs-ngredux-candidatelist
- npm install
- npm start
