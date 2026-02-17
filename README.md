# boxdletters-project

- Using React and the TMDB API to create an application to search movies.

This project is inspired by Matheus Battisti's React course: https://www.youtube.com/watch?v=XqxUHVVO7-U&t=250s

## Technologies Used
- **Vite** (with React + SWC)
- **React Router** (for navigation)
- **React Icons** (for UI elements)
- **TypeScript** (for type safety)

## Getting Started
Follow these steps to run the project locally:
1. Clone the repository:
```
git clone https://github.com/bisaio/boxdletters-project.git
cd boxdletters
```
2. Install the dependencies: run the command below to install all necessary packages
```
npm install
```
3. Configure the environment variables: create a `.env` file in the root directory and add your TMDB API Read Access Token (VITE_API_RAT) key following the example below:
```
VITE_API_RA_TOKEN=your_key_here
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie/
VITE_IMG=https://image.tmdb.org/t/p/w500/
```
4. How to run the project (Development Mode):
```
npm run dev
```

## Credits
All icons and branding are property of Letterboxd.

Movie data provided by TMDB API.