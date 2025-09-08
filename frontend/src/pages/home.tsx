import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Textarea } from "@/components/ui/textarea"
import api from "@/lib/api"
import { useRef } from "react"

const HomePage = () => {
    const userInputRef = useRef<HTMLTextAreaElement>(null);

    const submitPaste = async () => {
        const value = userInputRef.current?.value || "";
        console.log(value);
        const response = await api.post('/', { paste: value });
        const data = response.data;
        console.log(data);
        
        if(response.status == 200){
            alert("submitted with id: "+ data.id)
        }
    }

    return (
        <div className="h-full ">
            <Header />
            <div className="m-5 h-[75%]">
                <Textarea
                    ref={userInputRef}
                    placeholder="Enter your snippet here..."
                    className="h-full w-full mx-auto"
                />
            </div>
            <div className="w-full h-fit flex justify-end px-5">
                <Button onClick={submitPaste}>
                    Paste
                </Button>
            </div>
        </div>
    )
}

export default HomePage;