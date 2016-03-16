# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)


# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
images_path = File.join(dir, "..", "img")
#output_style = :compressed
output_style = :nested
#environment = :production
environment = :development
