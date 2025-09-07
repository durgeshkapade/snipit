import Header from "@/components/ui/header"
import { Textarea } from "@/components/ui/textarea"


export const HomePage = () => {
    return (
        <div className="h-full ">
            <Header />
            <Textarea name="" id="" placeholder="Enter your snippet here..." className="h-1/2 w-[95%] mx-auto">

            </Textarea>
        </div>
    )
}
