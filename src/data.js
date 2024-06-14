import rickyPhoto from './assets/ricky-profile-photo.webp'
import desislavPhoto from './assets/desislav-profile-photo.png'
import margaritaPhoto from './assets/margarita-profile-photo.png'

export const USER_DATA = [
    {
        id: 1,
        image:rickyPhoto,
        firstName: 'Ricky',
        lastName: 'Park',
        city: 'New York',
        description: 'Front-end developer',
        skills:['UI/UX', 'Front End Development', 'HTML','CSS','JavaScript','React','Node'],
        isPro: false
    },
    {
        id: 2,
        image:desislavPhoto,
        firstName: 'Desislav',
        lastName: 'Ivanov',
        city: 'Berlin',
        description: 'Backend developer',
        skills:['mySQL', 'Back End Development', 'Java','Spring'],
        isPro: true
    },
    {
        id: 3,
        image:margaritaPhoto,
        firstName: 'Margarita',
        lastName: 'Atanasova',
        city: 'Plovdiv',
        description: 'Business Analyst',
        skills:['Data Literacy', 'Data Collection', 'Statistical Analysis','Communication'],
        isPro: true
    }
    
]