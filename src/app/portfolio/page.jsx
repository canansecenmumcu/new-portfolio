"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Portfoliopage = () => {
    return (
        <motion.div
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
            className="h-full">
            
        Portfolio
        </motion.div>
    )
}

export default Portfoliopage;