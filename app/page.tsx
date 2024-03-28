import Image from "next/image"

import logo from "@/public/test.jpg"

export default function Home() {
    return (
        <>
            <Image
                src={logo}
                alt=""
                placeholder="blur"
            />
        </>
    );
}
