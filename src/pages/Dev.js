import { useEffect, useState, Fragment } from "react";
import axios from "axios"
import CardDev from "../components/CardDev";
import "./Dev.css";

export default function Dev() {
    const [data, setData] = useState([])
    useEffect(()=>{
        const githubDataTemp = [];
        async function fetchData() {
          
            await axios
            .get("https://api.github.com/users/atarikatrimelfin", {
              headers:{"Authorization": "Bearer "+ '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'}
            })
            
            ;
          
        }
      
        fetchData()
          .then(
            ()=> setData(githubDataTemp)
          );
      },[]);
    const keteranganDev = [
        {
            id: 1,
            gambar: "https://avatars.githubusercontent.com/u/82670218?v=4",
            nama: "Atarika Trimelfi Nofisa",
            nim: 21120120140094,
            github: "atarikatrimelfin",
            jurusan: "TEKNIK KOMPUTER",
        }
    ];

    return (
        <>
            <h1 id="dev">DEVELOPER</h1>
            {/* <div className="containerDev"> */}
            {keteranganDev.map((item, index) => (
                <Fragment key={item.id}>
                    <CardDev
                        gambar={item.gambar}
                        nama={item.nama}
                        nim={item.nim}
                        jurusan={item.jurusan}
                        github={item.github}
                    /> 
                    {keteranganDev.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                </Fragment>
            ))}
            {/* </div> */}
        </>
    );
}