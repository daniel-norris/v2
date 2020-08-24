import React from "react"
import { Link } from "gatsby"

import Logo from "../components/logo"
import Icon from "../components/icons/index"

import { navLinks } from "../config"

import { motion } from "framer-motion"

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  display: {
    opacity: 1,
    y: 0,
  },
}

const Header = () => {
  const { menu } = navLinks

  return (
    <motion.header
      className="flex items-center justify-between"
      variants={headerVariants}
      initial="hidden"
      animate="display"
    >
      <Link to="/" aria-label="home">
        <Logo />
      </Link>
      <nav className="flex items-center">
        {menu.map(({ name, url }, key) => {
          return (
            <Link
              className="hidden md:block text-lg font-bold px-3 py-2 rounded hover:bg-blue-100 "
              key={key}
              to={url}
            >
              {name}
            </Link>
          )
        })}
        {/* disabled at the moment until completed */}
        <button className="hidden ml-6 hover:bg-gray-400 bg-gray-200 rounded w-8 h-8 p-1">
          <Icon name="moon" />
        </button>
      </nav>
    </motion.header>
  )
}

export default Header
