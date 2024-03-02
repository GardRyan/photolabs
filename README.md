# photolabs
This project is a photo gallery application designed to enable users to browse and interact with a collection of photos. It offers features such as displaying photos fetched from an API endpoint, filtering photos by topics, marking photos as favorites, and displaying details of selected photos. The application comprises various components, including PhotoList, PhotoListItem, TopicListItem, and PhotoFavButton, each serving specific purposes within the interface. State management is handled using React's useReducer hook and a custom hook called useApplicationData, which dispatch actions to modify application state. Integration with an external API allows the application to fetch both photo and topic data dynamically, enhancing the user experience by providing a diverse and organized selection of images for exploration and interaction.

## Setup

1 Create the .env by using .env.example as a reference: cp .env.example .env
2 Update the .env file with your correct local information
- PGHOST=localhost
- PGUSER=labber
- PGDATABASE=photolabs_development
- PGPASSWORD=labber
- PGPORT=5432
3 Install dependencies in both frontend and backend folders: 
- npm install 
4 Run both back end and front end servers (see below for further instructions)
- back end should run on :8001
- front end should run on :3000

Visit http://localhost:3000/

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
## Dependencies (Backend)

- body-parser 1.18.3
- cors 2.8.5
- dotenv 7.0.0
- express 4.16.4
- helmet 3.18.0
- pg 8.5.0
- socket.io 2.2.0
- w: 7.0.0

## Dependencies (Frontend)

- testing-library/jest-dom 5.16.5
- testing-library/react 13.4.0
- testing-library/user-event 13.5.0
- react 18.2.0
- react-dom 18.2.0
- react-scripts 5.0.1
- web-vitals 2.1.4

## Screenshots

!["Home page"](https://github.com/GardRyan/photolabs/blob/main/docs/Photolabs_homepage.jpg)
!["Modal"](https://github.com/GardRyan/photolabs/blob/main/docs/Photolabs_modal.jpg.png)
!["Modal with Like"](https://github.com/GardRyan/photolabs/blob/main/docs/Photolabs_modal_like.png)
!["Topic Select"](https://github.com/GardRyan/photolabs/blob/main/docs/Photolabs_topicSelect.jpg.png)

