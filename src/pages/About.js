import { Fragment } from "react";
import CardAbout from "../components/CardAbout";
import "./About.css";

export default function About() {
    
    
    const keteranganApp = [
        {
            id: 1,
            fungsiApp: "Referensi Buku terbaik berdasarkan rekomendasi NY Times",
            tujuanApp: "Aplikasi ini dibuat untuk memenuhi Tugas Akhir Praktikum PPB.",
        }
    ];

    return (
        <>
        <div className="containerApp">
            <h1 id="namaApp">"RecBooks"</h1>
        {keteranganApp.map((item, index) => (
            <Fragment key={item.id}>
                <CardAbout
                    fungsi={item.fungsiApp}
                    tujuan={item.tujuanApp}
                /> 
                {keteranganApp.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </div>
        </>
    );
}