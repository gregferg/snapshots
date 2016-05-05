# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require '../album_seed_photos/tokyo_album/photos_title_description.rb'
require '../album_seed_photos/forest/forest_titles.rb'


User.create(
  username: "Demo",
  password: 'password',
  about_me_title: "Hi, I'm Demo",
  about_me_body: """
    I am the photographer and blogger behind ShootTokyo. I am originally from Boston, Massachusetts but my professional life has lead me from Boston to New York City, Singapore finally landing me in Tokyo, Japan in 2001. I live in the heart of Tokyo with my beautiful wife Mayumi, our 7 year old son Kai and his growing collection of insects. Photography is an outlet from an otherwise busy and sometimes stressful life.I primarily shoot Leica M digital and film range finders. You can read all about my gear if you want some more details. I work in Technology and I am lucky enough to have a job that allows me to travel around the world which is great for my photography. My frequent travel locations currently are Sydney, Singapore and San Francisco.The combination of my love for photography coupled with my frequent travels and bias for technology made a blog a logical and rewarding hobby for me. I have had surprising success with blogging that has brought me a lot of personal satisfaction, new friendships and surprising business contacts. This is a friendly place so feel free to engage, share, ask questions or just watch quietly from the shadows. I hope to see you around ShootTokyo!
  """
)








#
# 5.times do
#   User.create(
#   username: Faker::Name.name,
#   password: '123456'
#   )
# end
#
# #DEMO SEED
# #LIGHT
# Album.create(
#   user_id: 1,
#   title: "Light",
#   description: Faker::Hipster.sentence(3),
#   thumbnail_url: 'https://images.unsplash.com/photo-1459810684149-b708c57548bc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8bbab944b707b4b01be070b886205e85'
# )
# photo_urls = [
#   'https://images.unsplash.com/photo-1459810684149-b708c57548bc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8bbab944b707b4b01be070b886205e85',
#   'https://images.unsplash.com/photo-1460839896190-95c346344073?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=14df66b27812e3565e678dc286190811',
#   'https://images.unsplash.com/photo-1459025237229-1aae2533f5a3?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1459128806329-1b61d19a0f93?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=3a4d678cda13af959152a0cbd3a4f185',
#   'https://images.unsplash.com/photo-1460848039319-db513154badd?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1458496665567-ac9008f5b1fe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=b22e2b8c8b93aa24e463677986b8fd81',
#   'https://images.unsplash.com/photo-1453751768611-4ace682aa1a6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=1ffd5e0636b3bbb96f2e1834dee67372',
#   'https://images.unsplash.com/reserve/unsplash_52d9133506548_1.JPG?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=48b1656531cebb93a86eab5e8c616ed0',
#   'https://images.unsplash.com/photo-1459211857487-13dae371a6d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=7b110c81adff206cb0de02ae939c63fb'
# ]
# photo_urls.each do |photo_url|
#   Photo.create(
#     album_id: 1,
#     title: "",
#     description: "",
#     thumbnail_url: photo_url,
#     photo_url: photo_url
#   )
# end
#
#
# #landscapes
# Album.create(
#   user_id: 1,
#   title: "Nature",
#   description: Faker::Hipster.sentence(3),
#   thumbnail_url: 'https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0eee25e1e8252c9ec91aa736760d1a2e'
# )
# photo_urls = [
#   'https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0eee25e1e8252c9ec91aa736760d1a2e',
#   'https://images.unsplash.com/photo-1458724029936-2cc6ee38f5ef?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=b72e34ee3cc4aea2a2585a6b3633d6fe',
#   'https://images.unsplash.com/reserve/JjdWbOCTlemWMuvC0BeF_DSC_0867edit.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=c92105e687fd11ee0e1328355a476f60',
#   'https://images.unsplash.com/photo-1460400355256-e87506dcec4f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=65ebb274e22b4db0f6cef789563020c5',
#   'https://images.unsplash.com/photo-1427464407917-c817c9a0a6f6?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1452110040644-6751c0c95836?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=d93d5cfb1efe215a186bac5aec8971a1',
#   'https://images.unsplash.com/photo-1422651973727-50f085c0b26f?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425'
# ]
# photo_urls.each do |photo_url|
#   Photo.create(
#     album_id: 2,
#     title: "",
#     description: "",
#     thumbnail_url: photo_url,
#     photo_url: photo_url
#   )
# end
#
# #PORTRAITS
# Album.create(
#   user_id: 1,
#   title: "People",
#   description: Faker::Hipster.sentence(3),
#   thumbnail_url: 'https://images.unsplash.com/photo-1449179391249-52328aae1c16?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=637aca6a6b466d8cc725947ff98c736d'
# )
# photo_urls = [
#   'https://images.unsplash.com/photo-1449179391249-52328aae1c16?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=637aca6a6b466d8cc725947ff98c736d',
#   'https://images.unsplash.com/photo-1454473236878-c48e8ea9a930?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=ca2256691c60160d6679ea4dd6e4ca16',
#   'https://images.unsplash.com/photo-1451444635319-e5e247fbb88d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=704d9fef9d122240e6e467de7755fc5c',
#   'https://images.unsplash.com/photo-1458852535794-f5552aa49872?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1458134580443-fbb0743304eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=47df8777fdc20f6c830c6143a7666074',
#   'https://images.unsplash.com/photo-1458840326666-9527766bb645?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/reserve/de9uL9L7RSmzV4SAoAO5_Lauren%20and%20Winona%20Under%20a%20pass-1.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=25ed6e6c502502363b46d02aebc1a0aa'
# ]
# photo_urls.each do |photo_url|
#   Photo.create(
#     album_id: 3,
#     title: "",
#     description: "",
#     thumbnail_url: photo_url,
#     photo_url: photo_url
#   )
# end
#
# #buildings
# Album.create(
#   user_id: 1,
#   title: "Buildings",
#   description: Faker::Hipster.sentence(3),
#   thumbnail_url: 'https://images.unsplash.com/photo-1457685373807-8c4d8be4c560?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=fc8be397c56a45733ab88645b5ecb83a'
# )
# photo_urls = [
#   'https://images.unsplash.com/photo-1457685373807-8c4d8be4c560?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=fc8be397c56a45733ab88645b5ecb83a',
#   'https://images.unsplash.com/photo-1461409971633-aa0e46732112?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=775',
#   'https://images.unsplash.com/photo-1456930266018-fda42f7404a7?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1453498798285-d5a1be7fab6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=7ed2958ef9c759d13b8f9905e7ca29cf',
#   'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8f51973741d4b25375b6bb3de767dd67'
# ]
# photo_urls.each do |photo_url|
#   Photo.create(
#     album_id: 4,
#     title: "",
#     description: "",
#     thumbnail_url: photo_url,
#     photo_url: photo_url
#   )
# end
#
# #animals
# Album.create(
#   user_id: 1,
#   title: "Animals",
#   description: Faker::Hipster.sentence(3),
#   thumbnail_url: 'https://images.unsplash.com/photo-1453743327117-664e2bf4e951?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425'
# )
# photo_urls = [
#   'https://images.unsplash.com/photo-1453743327117-664e2bf4e951?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1452274381522-521513015433?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0a57c428b9ad4ee5966ae76df0a337f9',
#   'https://images.unsplash.com/photo-1451303688941-9e06d4b1277a?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=0585df27b625fb502d21d05e35b407f2',
#   'https://images.unsplash.com/photo-1458724338480-79bc7a8352e4?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425',
#   'https://images.unsplash.com/photo-1440227537815-f4476b789291?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1425'
# ]
# photo_urls.each do |photo_url|
#   Photo.create(
#     album_id: 5,
#     title: "",
#     description: "",
#     thumbnail_url: photo_url,
#     photo_url: photo_url
#   )
# end
