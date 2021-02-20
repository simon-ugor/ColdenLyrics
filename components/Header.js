
import Image from "next/image"

const Header = () => {
    return (
        <div className="header-main-div">
            <Image
                src="/logo5.png"
                alt="Song Image"
                width={205}
                height={56}
            />
        </div>
    )
}

export default Header