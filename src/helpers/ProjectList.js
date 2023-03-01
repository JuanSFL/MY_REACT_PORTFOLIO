import weatherDash from '../Assets/weatherdash.png'
import planner from '../Assets/workdayplanner.png'
import socialApi from '../Assets/socialApi.png'
import MySQL from '../Assets/mysql_project.png'
import readmeProject from '../Assets/readmeProject.png'
import foodGram from '../Assets/foodgram.png'

export const projectList = [
    {
        name: 'Weather Dashboard',
        image: weatherDash,
        description:'A weather tracker that allows users to search and view a 5 day forecast for a city using the OpenWeatherMap API',
        repo: `https://github.com/JuanSFL/Weather_Dashboard`
    },
    {
        name:'Workday Planner',
        image: planner,
        description:'A application that helps users keep track of their daily tasks.'
    },
    {
        name:'Social Network Api',
        image: socialApi,
        description:'A backend application for a social network where users can add friends, share thoughts, and react to other thoughts'
    },
    {
        name:'My SQL Employee Tracker',
        image: MySQL,
        description:'A application that helps users keep track of their daily tasks.'
    },
    {
        name:'Professional Readme Generator',
        image: readmeProject,
        description:'This command line application helps developers quickly make a readme.md document for their respositories.'
    },
    {
        name:'FoodGram',
        image: foodGram,
        description:'This application takes your location using google maps API and provides photos and information to local restaurants in your area!'
    },
    
]

