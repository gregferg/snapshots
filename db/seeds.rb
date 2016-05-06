# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# require '../album_seed_photos/tokyo_album/photos_title_description.rb'
# require '../album_seed_photos/forest/forest_titles.rb'


User.create(
  username: "Eric Landon",
  password: 'password',
  about_me_title: "Hi, I'm Eric",
  about_me_body: """
  Both a master potter and Designer, Eric is focused on a constant refinement of both form and technique. For him, the one cannot evolve naturally without the other. His love for wheel thrown pottery started already at age 16 and has evolved into a way of life, his vocation. For Eric, shaping objects by hand is not a look back at the past. He firmly believes that hand-crafting objects of a timeless value is a way forward.

  Eric is a graduate of the Danish school of Design in Copenhagen and has been awarded with a number of grants, international exhibition selections, and other distinguishments for the quality of his work.
  """
)
User.create(
  username: "Peter Mohrbacher",
  password: 'password',
  about_me_title: "Hi, I'm Peter",
  about_me_body: """
    Pete is an independent illustrator and concept artist living in the Chicago area. He works full-time on his creator owned project Angelarium. He's also known for a 3 year stint working on Magic: The Gathering where his art and designs were used prominently through the Return to Ravnica and Theros sets.
  """
)
User.create(
  username: "Dave Powell",
  password: 'password',
  about_me_title: "Hi, I'm Dave",
  about_me_body: """
  I am the photographer and blogger behind ShootTokyo. I am originally from Boston, Massachusetts but my professional life has lead me from Boston to New York City, Singapore finally landing me in Tokyo, Japan in 2001. I live in the heart of Tokyo with my beautiful wife Mayumi, our 7 year old son Kai and his growing collection of insects. Photography is an outlet from an otherwise busy and sometimes stressful life.

I primarily shoot Leica M digital and film range finders. You can read all about my gear if you want some more details. I work in Technology and I am lucky enough to have a job that allows me to travel around the world which is great for my photography. My frequent travel locations currently are Sydney, Singapore and San Francisco.
  """
)
