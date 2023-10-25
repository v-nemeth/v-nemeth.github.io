require 'csv'

# 1. Reading the CSV and TXT files

# Create a hash to map city names to their lat, lng
city_hash = {}

CSV.foreach("_data/worldcities.csv", headers: true) do |row|
  city_key = "#{row["city"]}_#{row["iso2"]}"  # Create a unique key combining city and iso2
  city_hash[city_key] = {lat: row["lat"], lng: row["lng"], iso2: row["iso2"]}
end

# Read the TXT file to get an array of cities
cities = File.readlines("_data/cities.txt").map(&:strip).map { |line| "#{line.split(',')[0]}_#{line.split(',')[1]}" }

# 2. Modifying the JS data

new_locations = {}
index = -1
cities.each do |city_key|
  if city_hash.key?(city_key)
    new_locations[(index += 1).to_s] = {
      name: city_key.split('_')[0],
      lat: city_hash[city_key][:lat],
      lng: city_hash[city_key][:lng],
      size: 10,
      type: "circle",
      opacity: 1,
      hover_opacity: 1
    }
  end
end

# Append the new locations to the current locations
new_locations_string = new_locations.map do |key, location_data|
  location_entries = location_data.map { |k, v| "#{k}: \"#{v}\"" }.join(", ")
  "\"#{key}\": {\n#{location_entries}\n}"
end.join(",\n")

# Read the file
file_content = File.read('worldmap/mapdata_original.js')

# Use a regex to replace the locations section
puts "REGEX MATCHED:"
#puts /(locations: \{)(?:[^{}]|({[^{}]*}))*}/m.match(file_content)

puts "NEW_LOCATIONS_STRING;"
#puts new_locations_string
updated_content = file_content.gsub(/(locations: \{)(?:[^{}]|({[^{}]*}))*}/m, "\\1\n#{new_locations_string}\n}")

# Write the modified content back to the file
File.write('worldmap/mapdata.js', updated_content)