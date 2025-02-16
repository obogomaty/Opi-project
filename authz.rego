package authz

default allow = false

# Allow if the user is admin
allow {
  input.user == "admin"
}

