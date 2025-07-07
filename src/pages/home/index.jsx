import { useState } from "react"
import { Navigation } from "../../componets/navigation"
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {

    return <>
        <Navigation />
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1>Pokemon Website Homepage</h1>
            <p className="font-bold text-2xl">Welcome to the Pokemon website!</p>
            <p className="text-xl">Here you can find information about your favorite Pokemon.</p>
        </div>
    </>
}