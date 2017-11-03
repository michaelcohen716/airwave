# README

**# Airwave**

[airwave](http://airwavetv.herokuapp.com/#/)

Airwave is a single page Hulu clone built on a Rails framework, with a Postgresql database and a React-Redux frontend. Users can watch episodes of 1950s and 60s TV shows, leave comments for future viewers, and check the profile pages of each series.

We made you an account. Let's log in.

![modal](app/assets/images/modal.png "modal")

Look's like you've put together an exciting watchlist.
A user's watchlist is generated from a join table with two columns: user_id and episode_id.
We just saw the user side in action when you logged in.
The episode_id is drawn from an episodes table with title, description and series_id as key columns.
