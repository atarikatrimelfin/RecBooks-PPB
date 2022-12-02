import { SiGithub } from "react-icons/si";
import { HiOutlineHeart } from "react-icons/hi";
import "./CardDev.css";

export default function CardDev ({gambar, nama, nim, github, jurusan}) {
    return (
        <div className="containerDev">
            <img src={gambar} alt="" className="profilepic" />
            <div className="containerDataDev">
                <div className="containerNama">
                    
                    <p id="nama">{nama}</p>
                    
                </div>
                <p id="nim">{nim}</p>
                <p id="jurusan">{jurusan}</p>
                <div className="containerGithub">
                    <div className="logoGithub">
                        <SiGithub color={"white"} size={"30px"}  />
                    </div>
                    <div className="kontakGithub">
                        <div>
                            <p id="github">{github}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}