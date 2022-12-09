import React, { useEffect, useState } from "react";
import axios from "axios";

function Research (){
    const [ResearchList, setResearchList] = useState([]);
    const [ResearchListFiltered, setResearchListFiltered] = useState([]);

    async function getData() {
        const res = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr");
        const res2 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=2")
        const res3 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=3")
        const res4 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=4")
        const res5 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=5")
        const res6 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=6")
        const res7 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=7")
        const res8 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=8")
        const res9 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=9")
        const res10 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr&page=10")
        setResearchList([...res.data.results,...res2.data.results,...res3.data.results,...res4.data.results,...res5.data.results,...res6.data.results,...res7.data.results,...res8.data.results,...res9.data.results,...res10.data.results]);
        setResearchListFiltered([...res.data.results,...res2.data.results,...res3.data.results,...res4.data.results,...res5.data.results,...res6.data.results,...res7.data.results,...res8.data.results,...res9.data.results,...res10.data.results]);

    }

    useEffect(() => {
        getData();
    },[]);

    function handlechange(e) {
        

        if (!e.target.value) {
            setResearchListFiltered(ResearchList);
            return;
        }

        setResearchListFiltered(
            ResearchList.filter((tv) => tv.name.includes(e.target.value))
    
        );
    }


    return (
        <div >
            <input className="SearchBar" onChange={handlechange} type='text' placeholder=" Exemple: Chainsaw Man" />
            <div className="back ">
                <div className="ShowPopTitle">
                    <h2>
                        Vos Recherche ici
                    </h2>
                </div>
                <ul className="List2">
                    {ResearchListFiltered.map((tv) =>{
                        return <li key={tv.name}><div><img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+tv.poster_path} alt='Image de :'/><p className="Overview">{tv.overview}</p></div><a>{tv.name}</a>
                        <div class="progress Overview Percent">
                            <div class="progress-value">
                            <h2 href="https://usecheck.com/" class="btn-shine" target="_blank">{tv.vote_average}/10   {tv.vote_count} Votes</h2></div>
                            </div></li>
                    })}
                </ul>
            </div>
        </div>
    )


}

export default Research;