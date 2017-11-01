# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


WatchlistAdd.delete_all
Series.delete_all
Episode.delete_all
User.delete_all

maurice = User.create!({
  username: "maurice",
  password: "password"
  })

# GROUCHO

groucho = Series.create!({
  name: "You Bet Your Life with Groucho Marx",
  description: "A classic 1950's quiz show with a humorous twist, 'You Bet Your Life' proved popular with critics and fans alike",
  image: "https://s3.us-east-2.amazonaws.com/airwave-seed/groucho_thumb.jpg"
  }
)

groucho1 = Episode.create!({
  title: "You Bet Your Life with Groucho Marx: Water",
  description: "An episode of the popular 1950s TV show complete with Desoto commercials",
  series_id: groucho.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/You_Bet_Your_Life_Water.ogv"
})

groucho2 = Episode.create!({
  title: "You Bet Your Life with Groucho Marx: Clock",
  description: "Another humurous take on the 1950s quiz show format from Groucho Marx",
  series_id: groucho.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/You_Bet_Your_Life_Clock.ogv"
})

groucho3 = Episode.create!({
  title: "You Bet Your Life with Groucho Marx: Wall",
  description: "The secret word is 'Wall' in another Groucho classic",
  series_id: groucho.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/You_Bet_Your_Life_Wall.ogv"
})

groucho4 = Episode.create!({
  title: "You Bet Your Life with Groucho Marx: House",
  description: "The contestants this week share humorous takes on the secret word 'House'",
  series_id: groucho.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/You_Bet_Your_Life_House.ogv"
})

groucho5 = Episode.create!({
  title: "You Bet Your Life with Groucho Marx: Voice",
  description: "Grouch tests each contestant's voice ... and sense of humor",
  series_id: groucho.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/You_Bet_Your_Life_Voice.ogv"
})




WatchlistAdd.create!({
  user_id: maurice.id,
  episode_id: groucho1.id
})

WatchlistAdd.create!(
  user_id: maurice.id,
  episode_id: groucho2.id
)

WatchlistAdd.create!(
  user_id: maurice.id,
  episode_id: groucho3.id
)

WatchlistAdd.create!(
  user_id: maurice.id,
  episode_id: groucho4.id
)
