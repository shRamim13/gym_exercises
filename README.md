# 💪 Gym Exercise App

A modern, responsive web application for fitness enthusiasts to explore and learn about various exercises. Built with React.js and Material UI.

![Gym Exercise App](./src/assets/images/khabib.png)

## 🌟 Features

- **Exercise Categories**: Browse exercises by body parts and muscle groups
- **Detailed Exercise Information**:
  - Instructional GIFs
  - Step-by-step instructions
  - Targeted muscle groups
  - Equipment requirements
- **Related Content**:
  - Similar exercises
  - YouTube tutorial videos
- **Modern UI/UX**:
  - Responsive design
  - Smooth animations
  - Intuitive navigation
  - Material UI components

## 🛠️ Technologies Used

- **Frontend Framework**: React.js 18
- **UI Library**: Material UI v5
- **Routing**: React Router v6
- **State Management**: React Context API
- **API Integration**: ExerciseDB (RapidAPI)
- **Styling**: Emotion (CSS-in-JS)
- **Development Tools**: ESLint, Create React App

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- RapidAPI account for ExerciseDB API access

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/gym-exercise-app.git
   cd gym-exercise-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   REACT_APP_RAPID_API_KEY=your_api_key_here
   ```

   Get your API key from [RapidAPI ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)

4. **Start the development server**
   ```bash
   npm start
   ```
   The app will open in your default browser at `http://localhost:3000`

## 📱 Application Structure

```
gym-exercise-app/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── BodyPart/
│   │   ├── Detail/
│   │   ├── ExerciseCard/
│   │   ├── ExerciseVideos/
│   │   ├── HeroBanner/
│   │   ├── HorizontalScrollbar/
│   │   ├── Loader/
│   │   ├── Navbar/
│   │   └── SimilarExercises/
│   ├── assets/
│   │   └── images/
│   ├── utils/
│   │   └── fetchData.js
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## 🌐 API Integration

This application uses the ExerciseDB API from RapidAPI to fetch:

- Exercise data
- Exercise details
- Related exercises
- Exercise videos

## 🎨 UI Components

- **Navbar**: Navigation and search functionality
- **HeroBanner**: Main landing section
- **HorizontalScrollbar**: Scrollable exercise categories
- **ExerciseCard**: Individual exercise display
- **ExerciseDetail**: Detailed exercise information
- **ExerciseVideos**: Related YouTube videos
- **SimilarExercises**: Related exercise suggestions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Shramim** - _Initial work_ - [shRamim13](https://github.com/shRamim13)

## 🙏 Acknowledgments

- [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
- [Material UI](https://mui.com/)
- [React.js](https://reactjs.org/)

## 📞 Contact

Shramim - [shramim13@gmail.com](mailto:shramim13@gmail.com)

Project Link: [https://github.com/shRamim13/gym-exercise-app](https://github.com/shRamim13/gym-exercise-app)

---

Made with ❤️ for fitness enthusiasts
