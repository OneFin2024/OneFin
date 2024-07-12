# OneFin

To load environement variables into the current shell:

export $(grep -v '^#' my_custom.env | xargs)
