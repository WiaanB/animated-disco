# Project animated-disco

Frontend side of a project I am working on.

## Getting started
* Pull the porject
* Run `npm install`
* Run `npm start`

## Folder Structure Explained

### assets
    Holds the images used through the site. Potentially creating folders per page to keep things organized.

### src/components
    Holds the components used through the site. Each component will have its own folder with the component file, interface for the props, and a css file.

### src/constants
    Data that requires a single source of truth.

### src/interfaces
    Holds the interfaces that will be used throughout the project, such as the Data Models. i.e Player, GameOptions, Game, etc.

### src/layout
    Houses reusable layouts for the site. i.e. Menu, Game List, etc.

### src/pages
    Houses the pages of the site that can be navigated to. i.e. Home, My Games, etc.

### src/services
    Where reusable components, functions, and code gets housed.

## Contributing

* Create a branch that describes the feature you are working on.
* Commit your changes to that branch.
* Create a pull request to merge your branch into main.