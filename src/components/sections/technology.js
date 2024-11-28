import React from "react"
import { technology } from "../../config/index"
import Icon from "../../components/icons/index"
import { motion } from "framer-motion"
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTerraform } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Technology = ({ content }) => {
  const { frontmatter } = content[0].node

  return (
    <section
      id="technology"
      className="mt-6 flex flex-col justify-center"
      style={{ minHeight: "60vh" }}
    >
      <p className="text-base sm:text-lg font-light mb-6">
        {frontmatter.title}
      </p>
      <div className="hidden sm:flex w-full h-full justify-center flex-wrap">
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <FaCss3 className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <FaHtml5 className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <SiTypescript className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <SiJavascript className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <FaReact className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <SiRedux className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <RiNextjsFill className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <FaNodeJs className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <FaGolang className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <FaAws className="w-12 h-12"/>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, fill: "#4299E1" }}
              whileTap={{ scale: 0.9 }}
              className="w-20 p-4 m-2 shadow-md rounded-lg"
            >
                <SiTerraform className="w-12 h-12"/>
            </motion.div>
      </div>
      <div
        className="sm:hidden flex w-full h-full justify-center flex-wrap"
        style={{ fill: "#4299E1" }}
      >
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <FaCss3 className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <FaHtml5 className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <SiTypescript className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <SiJavascript className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <RiNextjsFill className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <FaReact className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <SiRedux className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <FaNodeJs className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <FaGolang className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <FaAws className="w-12 h-12"/>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }} className="w-20 p-4">
            <SiTerraform className="w-12 h-12"/>
        </motion.div>
      </div>
    </section>
  )
}

export default Technology
