"use client"
import Link from "next/link"

export default function Home(){
    return <>
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
            >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Aftershock Website</h1>
                <p className="mb-5">
                    Read articles on what happened in Afghanistan and how to people!
                </p>
                <Link href="/articles"><button className="btn btn-primary">Read here!</button></Link>
                </div>
            </div>
        </div>
    </>
}