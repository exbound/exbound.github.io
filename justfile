# Exbound website — standard command interface

# Install pinned dependencies
setup:
    npm ci || npm install

# Type-check and validate the site
check:
    npm run check

# Build the static site (the website's test: it must build clean)
test: build

# Produce the production build in dist/
build:
    npm run build

# Local dev server with live reload
dev:
    npm run dev

# Preview the production build locally
preview:
    npm run preview
