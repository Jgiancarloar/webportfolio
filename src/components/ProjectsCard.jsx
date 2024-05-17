import React from 'react'
import { CiLink } from "react-icons/ci";
import todolistv1 from "../img/todolistv1.png"
import todolistv2 from "../img/todolistv2.png"
import pokedex from "../img/pokedex.png"
import movieapp from "../img/movieapp.png"
import veterinaryrecord from "../img/veterinaryrecord.png"
import { Link } from 'react-router-dom';

const ProjectsCard = () => {

  const PROJECTS = [
    {
      id: 1,
      title: 'To-do List v1.',
      description: 'A to-do list application that allows you to create tasks, mark them as done, and delete them.',
      link: 'https://jcodetodolist.netlify.app/',
      github: 'https://github.com/Jgiancarloar/TodoList',
      image: todolistv1,
      tags: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 2,
      title: 'To-do List v2.',
      description: 'A to-do list application that allows you to create, edit, mark as done, and delete tasks. It also provides a list of pending and completed tasks.',
      link: 'https://jcodetodolistv2.netlify.app',
      github: 'https://github.com/Jgiancarloar/todolistappv2',
      image: todolistv2,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Veterinary record',
      description: 'An application to manage veterinary patient records, allowing you to create, list, edit, and delete records.',
      link: 'https://veterinaryregistry.netlify.app',
      github: 'https://github.com/Jgiancarloar/veterinaryregistry',
      image: veterinaryrecord,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'WeatherApp',
      description: 'An application that allows you to view the weather and temperature of any city in real-time, connected to an API.',
      link: 'https://jcodeweatherapp.netlify.app',
      github: 'https://github.com/Jgiancarloar/weatherapp',
      image: todolistv1,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 5,
      title: 'MovieApp',
      description: 'An application that allows you to search for movies and displays the image, title, release date, and a brief synopsis of each movie.',
      link: 'https://jcodemovieapp.netlify.app',
      github: 'https://github.com/Jgiancarloar/movieapp',
      image: movieapp,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Pokedex',
      description: 'An application that allows you to view information about each Pokémon, including name, weight, height, abilities, and evolutions.',
      link: 'https://jcodepokedex.netlify.app',
      github: 'https://github.com/Jgiancarloar/Pokedex',
      image: pokedex,
      tags: ['Vite', 'React', 'Tailwind CSS']
    }
  ]

  return (
    <div>
      {
        PROJECTS.map(project => (
          <article key={project.title} className='text-slate-100 grid gap-3 w-full'>
            <h3 className='font-bold text-xl'>{project.id}. {project.title}</h3>
            <p className='text-sm'>{project.description}</p>
            <ul className='flex gap-2'>
              {
                project.tags.map(tag => (
                  <li className='border-[1px] rounded-xl px-2 py-1 text-sm' key={tag}>{tag}</li>
                ))
              }
            </ul>
            <div className='px-2 py-1 w-fit text-sm rounded-xl bg-amber-500 text-[#212121] font-semibold hover:bg-amber-400'>
              <Link className='flex gap-2 items-center' to={project.github} target="_blank">
                <span>GitHub</span>
                <CiLink size={20} />
              </Link>
            </div>
            <Link to={project.link} target='_blank'>
              <img className='w-full shadow-lg border-b-4 border-transparent shadow-slate-100/30' src={project.image} alt="" />
            </Link>
            <hr className='my-5' />
          </article>
        ))
      }
    </div>
  )
}

export default ProjectsCard