
import '../layouts/volunteerBanner.css' 
export default function VolunteerBanner() {
    return (
        <div style = {{textAlign:'center'}}>
            <h1 class= "heading" style = {{fontSize: 24}}>
                PMReady is made <p class = 'orangeText'>by PMs,</p> <p class = "greenText">for PMs</p>
            </h1>
            <div class = "volunteerContainer">
                <div class = "individualsContainer">
                    <img class = "image"></img>
                    <p class = "name" >John Doe Smith</p>
                    <p class = "role" >Director of Awesome</p>
                </div>
                <div class = "individualsContainer">
                    <img class = "image"></img>
                    <p class = "name" >John Doe Smith</p>
                    <p class = "role" >Director of Awesome</p>
                </div>
                <div class = "individualsContainer">
                    <img class = "image"></img>
                    <p class = "name" >John Doe Smith</p>
                    <p class = "role" >Director of Awesome</p>
                </div>
                <div class = "individualsContainer">
                    <img class = "image"></img>
                    <p class = "name" >John Doe Smith</p>
                    <p class = "role" >Director of Awesome</p>
                </div>
            </div>

            <h2 class = "heading">We <p class = "orangeText">love</p> our interns and volunteers!</h2>
            <img src = "image9.png" id = "groupPhoto"></img>
        </div>
        

       
    ) 
}