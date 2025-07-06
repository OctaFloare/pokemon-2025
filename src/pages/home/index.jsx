import { useState } from "react"
import { Navigation } from "../../componets/navigation"
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {

    return <div>
        <Navigation/>
        <h1>Welcome on our web-site.</h1>
    </div>
}