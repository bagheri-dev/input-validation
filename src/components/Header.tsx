export default function Header () {
    return (
        <div className="w-full mb-10">
            <header className="container mx-auto flex justify-between py-7">
                <div className="w-full">
                    <h1 className="text-3xl font-bold text-color-primery">LOGO</h1>
                </div>
                <div className="w-full">
                    <nav className="hidden xl:inline-block">
                        <ul className="flex gap-5 text-color-primery font-bold">
                            <li><a href="#">Compony</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Fin Tech Solutions</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li className="border-b-4 border-b-green-500"><a href="#">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}