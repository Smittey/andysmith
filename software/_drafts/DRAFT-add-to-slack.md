---
layout: post
title: Add to Slack
sub-title: My latest side-project for Slack messaging
posted-on: April 6th, 2016
post-img: post4-img.jpg
---
My friends at work have recently joined the thousands of others worldwide by addopting [Slack](http://slack.com/) into our lives. It started as just a central place for us all to chat outside of our usual lunchtime congregation with little to no aim or goals. It has since grown organically and with a certain degree of granularity with 'channels' ranging from `#Music` and `#tv-film`, to `#Politics` and `#Books`, with `#Coding` thrown in there so that we can feel at least semi-justified and productive. We love it. It stops us from going insane during the day and also allows us to develop our relationships further outside of our 1 hour lunch-time breather as we all work in different areas of the company.

Slack very recently [released their API to the world](https://medium.com/slack-developer-blog/launch-platform-114754258b91#.pga6j29ov) allowing developers to create plugins such as bots or user-executed commands which somewhat reignited my urge to develop something useful; a music suggester. `#Music` is arguably our most active purpose-created channel where we're constantly recommending oneanother music. Although my plugin might take something out of the element of discussion, my idea was to allow the user to use the `Slash Command` interface to recommend themselves music. Below is an example of its usage:

    /similarMusicTo Radiohead
    
It works as follows:

1. Using the user-entered parameter from the command it would then go away and return 10 similar artists using [Last.fm's](http://last.fm) API.
2. For each of these artists it then returns their most popular track. These track names are then stored.
3. Using '[artist] - [trackname]' as criteria, a Youtube search is performed using Google's Youtube API. 
4. The most relevant video is returned and the Youtube video ID of the video is stored for each track previously obtained from Last.fm's API.
5. Once all 10 ID's have been obtained and stored, a Youtube playlist is created using these ID's, again using Google's Youtube API.
6. This is then displayed back to the user in Slack in the following form:

![Sample output from slash command](http://i.imgur.com/mq17th9.png "Sample output from slash command")

Click the button below to add this plugin to your Slack board. 
[Any issues, please report them here!](https://github.com/Smittey/Slack-apps/issues)

![Add to slack](https://get.slack.help/hc/en-us/article_attachments/202794997/add_to_slack.png "Add to slack")




The one caveat of this is there's no certainty that the Youtube search will return the correct video as it entirely depends on the searching algorithm to return the most relevant video, but Google has some smart people. I trust them. I hope Slack users will too!
