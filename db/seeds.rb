# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: "demo",
  password: 'password'
)

5.times do
  User.create(
  username: Faker::Name.name,
  password: '123456'
  )
end

User.all.each do |user|
  rand(5).times do
    Album.create(
      user_id: user.id,
      title: Faker::Superhero.name,
      description: Faker::Hipster.sentence(3),
      thumbnail_url: Faker::Avatar.image
    )
  end
end


Album.all.each do |album|
  rand(10).times do
    Photo.create(
      photo_url: Faker::Placeholdit.image,
      album_id: album.id,
      title: Faker::Superhero.name,
      description: Faker::Hipster.sentence(3)
    )
  end
end
