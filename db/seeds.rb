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

# bonanza

bonanza = Series.create!({
  name: "Bonanza",
  description: "The Cartwright Family, wealthy but rugged, face down adventures in the Old West",
  image: "https://s3.us-east-2.amazonaws.com/airwave-seed/Bonanza_thumb.jpg"
})

bonanza1 = Episode.create!({
  title: "Bonanza: The Avenger",
  description: "Eric 'Hoss' Cartwright seeks out a man who has wronged the family",
  series_id: bonanza.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Bonanza_The_Avenger.ogv"
})

bonanza2 = Episode.create!({
  title: "Bonanza: The Gunmen",
  description: "The stakes are raised when some strangers come to town",
  series_id: bonanza.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Bonanza_The_Gunmen.ogv"
})

bonanza3 = Episode.create!({
  title: "Bonanza: Blood on the Land",
  description: "A sheepherder betrays the trust of the Cartwrights and must face the consequences",
  series_id: bonanza.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Bonanza_Blood_On_The_Land.ogv"
})

bonanza4 = Episode.create!({
  title: "Bonanza: The Last Trophy",
  description: "The Cartwrights have visitors from out of town, but, as the visit unfolds, it's not clear if they are still welcome",
  series_id: bonanza.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Bonanza_The_Last_Trophy.ogv"
})

bonanza5 = Episode.create!({
  title: "Bonanza: The Mission",
  description: "Hoss makes a new friend in town who shares some wisdom he learned during the war",
  series_id: bonanza.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Bonanza_The_Mission.ogv"
})

# beverly hillbillies

hillbillies = Series.create!({
  name: "The Beverly Hillbillies",
  description: "After striking black gold, the Clampetts move to Beverly Hills, finding new friends and embarking on a new way of life",
  image: "https://s3.us-east-2.amazonaws.com/airwave-seed/beverly_hillbillies.jpg"
})

hillbillies1 = Episode.create!({
  title: "The Beverly Hillbillies: Granny's Garden",
  description: "The Clampetts return to their roots to plant a new garden",
  series_id: hillbillies.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Hillbillies_Grannys_Garden.ogv"
})

hillbillies2 = Episode.create!({
  title: "The Beverly Hillbillies: Back to Californy",
  description: "After returning from a trip home, Granny and Pearl struggle with traditional values",
  series_id: hillbillies.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Hillbillies_Back_To_Californy.ogv"
})

hillbillies3 = Episode.create!({
  title: "The Beverly Hillbillies: Hair-Raising Holliday",
  description: "Granny grows her medicinal business, but the authorities aren't as enthusiastic",
  series_id: hillbillies.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Hillbillies_Hair-Raising_Holiday.ogv"
})

hillbillies4 = Episode.create!({
  title: "The Beverly Hillbillies: Elly's First Date",
  description: "Elly goes on a first date, making Granny long for her youth",
  series_id: hillbillies.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Hillbillies_Ellys_First_Date.ogv"
})

hillbillies5 = Episode.create!({
  title: "The Beverly Hillbillies: Chickadee Returns",
  description: "Things get crazy in The Hills when an old friend finds his way into the Clampetts new life",
  series_id: hillbillies.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Hillbillies_Chickadee_Returns.ogv"
})

# sherlock
sherlock = Series.create!({
  name: "Sherlock Holmes",
  description: "Based off Doyle's classic tale, the series follows Holmes and Dr. Watson as they get to the bottom of crime across London",
  image: "https://s3.us-east-2.amazonaws.com/airwave-seed/sherlock_thumb.jpg"
})

sherlock1 = Episode.create!({
  title: "Sherlock Holmes: The Case of Cunningham",
  description: "Holmes recruits Watson and thus begins a formidable partnership",
  series_id: sherlock.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Sherlock_The_Case_of_the_CunninghamHeritage.ogv"
})

sherlock2 = Episode.create!({
  title: "Sherlock Holmes: The Case of Lady Beryl",
  description: "Lady Beryl admits to a heinous murder, but Holmes and Watson are skeptical",
  series_id: sherlock.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Sherlock_The_Case_of_Lady_Beryl.ogv"
})

sherlock3 = Episode.create!({
  title: "Sherlock Holmes: The Case of Harry Crocker",
  description: "An escape artist stands accused, but can he execute the ultimate escape?",
  series_id: sherlock.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Sherlock_The_Case_Of_Harry_Crocker.ogv"
})

sherlock4 = Episode.create!({
  title: "Sherlock Holmes: The Case of the Shy Ballerina",
  description: "Watson is a suspect, along with a curious ballerina and a bookish composer",
  series_id: sherlock.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Sherlock_The_Case_of_the_Shy_Ballerina.ogv"
})

sherlock5 = Episode.create!({
  title: "Sherlock Holmes: The Case of the Belligerent Ghost",
  description: "Watson sees a ghost while Holmes tracks down the thief of something more material",
  series_id: sherlock.id,
  video: "https://s3.us-east-2.amazonaws.com/airwave-seed/Sherlock_The_Case_of_the_Belligerent_Ghost.ogv"
})



WatchlistAdd.create!({
  user_id: maurice.id,
  episode_id: hillbillies2.id
})

WatchlistAdd.create!(
  user_id: maurice.id,
  episode_id: bonanza5.id
)

WatchlistAdd.create!(
  user_id: maurice.id,
  episode_id: groucho3.id
)

WatchlistAdd.create!(
  user_id: maurice.id,
  episode_id: sherlock4.id
)
