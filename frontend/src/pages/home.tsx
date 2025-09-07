import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Textarea } from "@/components/ui/textarea"


export const HomePage = () => {
    return (
        <div className="h-full ">
            <Header />
            <div className="m-5 h-[75%]">
                <Textarea placeholder="Enter your snippet here..." className="h-full w-full mx-auto">
                </Textarea>
            </div>
            <div className="w-full h-fit flex justify-end px-5">
                <Button>
                    Paste
                </Button>
            </div>
        </div>
    )
}
