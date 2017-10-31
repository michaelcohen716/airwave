# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


WatchlistAdd.delete_all
Series.delete_all

WatchlistAdd.create!(
  user_id: 2,
  episode_id: 1
)

WatchlistAdd.create!(
  user_id: 2,
  episode_id: 2
)

WatchlistAdd.create!(
  user_id: 2,
  episode_id: 3
)

WatchlistAdd.create!(
  user_id: 2,
  episode_id: 4
)

Series.create!(
  name: "You Bet Your Life with Groucho Marx",
  description: "A classic 1950's quiz show with a humorous twist, 'You Bet Your Life' proved popular with critics and fans alike"
)
