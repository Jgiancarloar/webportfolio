import React from 'react'
import { LiaExternalLinkAltSolid } from "react-icons/lia";
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
      description: 'Lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum',
      link: '#',
      github: 'https://github.com/Jgiancarloar/TodoList',
      image: todolistv1,
      tags: ['HTML', 'CSS', 'Javascript']
    },
    {
      id: 2,
      title: 'To-do List v2.',
      description: 'Lorem 2 ipsum orem ipsu2  orem ipsum 2rem ipsum 2orem2 ipsum or2em ipsum',
      link: '#2',
      github: '#2',
      image: todolistv2,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Veterinary record',
      description: 'Lorem 2 ipsum orem ipsu2  orem ipsum 2rem ipsum 2orem2 ipsum or2em ipsum',
      link: '#2',
      github: 'https://github.com/Jgiancarloar/veterinaryregistry',
      image: veterinaryrecord,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 4,
      title: 'WeatherApp',
      description: 'Lorem 2 ipsum orem ipsu2  orem ipsum 2rem ipsum 2orem2 ipsum or2em ipsum',
      link: '#2',
      github: '#2',
      image: todolistv1,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 5,
      title: 'MovieApp',
      description: 'Lorem 2 ipsum orem ipsu2  orem ipsum 2rem ipsum 2orem2 ipsum or2em ipsum',
      link: '#2',
      github: 'movieApp',
      image: movieapp,
      tags: ['Vite', 'React', 'Tailwind CSS']
    },
    {
      id: 6,
      title: 'Pokedex',
      description: 'Lorem 2 ipsum orem ipsu2  orem ipsum 2rem ipsum 2orem2 ipsum or2em ipsum',
      link: '#2',
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
            <div className='flex gap-2 items-center  w-fit px-2 py-1 text-sm rounded-xl bg-amber-500 text-[#212121] font-semibold hover:bg-amber-400'>
              <span>GitHub</span>
              <Link to={project.github} target="_blank"><LiaExternalLinkAltSolid /></Link>
            </div>
            <img className='w-full shadow-lg border-b-4 border-transparent shadow-slate-100/30' src={project.image} alt="" />
            <hr className='my-5' />
          </article>
        ))
      }
    </div>
  )
}

export default ProjectsCard