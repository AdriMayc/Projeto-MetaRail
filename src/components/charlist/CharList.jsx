import axios from "axios";
import { useQuery } from "react-query";

const CharList = () => {
    const fetchCharList = async () => {
        try {
            const { data } = await axios.get("https://starrail-service.vercel.app/api/v1/characters");
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const { data: dataChars, isLoading } = useQuery(["chars"], fetchCharList, { retry: 5 });


    return !isLoading ? (
        <div className="w-full flex flex-row items-center gap-2 flex-wrap">
                {dataChars?.map((char, index) => (
                    <div key={index} className="flex flex-col bg-slate-500">
                        <img src={char.charIcon} alt="char" width="50" height="50" />
                        <div>{char.nameEnglish}</div>
                    </div>
                ))}
        </div>
    ) : (
        <div>Carregando...</div>
    )
}

export default CharList;