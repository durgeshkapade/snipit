import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { Textarea } from "@/components/ui/textarea"

const DisplayPage = () => {
  return (
    <div className="h-full">

      {/* // header */}

      <Header />

      <div className="flex justify-between flex-col ">

          {/* // Button */}
          <div className="bg-amber-500 px-2 py-3 ">
            <Button className="mr-2" onClick={()=>{

            }}>
              Edit 
            </Button>

            <Button onClick={()=>{

            }}>
              Delete 
            </Button>
          </div>

          

      </div>



      {/* // Text Area */}
    
      <div className=" w-screen h-[80%] px-2 py-2 overflow-x-hidden ">
        
        <Textarea className="h-full" />

      </div>

      
      
    </div>
  )
}

export default DisplayPage