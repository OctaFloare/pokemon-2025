import { useState } from "react"
import { Navigation } from "../../componets/navigation"
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {

    return <div>
        <Navigation />
        <h1>Pokemon Website</h1>
        <p className="font-bold text-xl">Welcome to the Pokemon website!</p>
        <p>Here you can find information about your favorite Pokemon.</p>
    </div>
    
}