import CharList from "../../components/charlist/CharList";
import Banner from "./banner/banner";
import SlideCodes from './slide-code-game/slide-codegame.jsx'
import Characters from './characters/characters.jsx'

const page = () => {

    return (
        <>
            <div className="" >Home page</div>
            <Banner />
            <SlideCodes />
            <Characters />
        </>
    )
}

export default page;