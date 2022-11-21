import React from 'react'
import NavItem from '../NavItem/NavItem'
import { Calendar, FileText, HouseSimple, ImageSquare, MapPin, Megaphone } from 'phosphor-react'

export default function NavList() {
  return (
    <>
      <NavItem text='Home' link='#' icon={<HouseSimple size={22} color={"#fff"} />} />
      <NavItem text='Latest News' link='#' icon={<Megaphone size={22} />} />
      <NavItem text='Explore' link='#' icon={<MapPin size={22} />} />
      <NavItem text='Files' link='#' icon={<FileText size={22} />} />
      <NavItem text='Galery' link='#' icon={<ImageSquare size={22} />} />
      <NavItem text='Events' link='#' icon={<Calendar size={22} />} />
    </>
  )
}
