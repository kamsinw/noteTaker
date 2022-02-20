import './sidebar.css';
const sidebar = () =>{
    const clickhandler = () =>{
        console.log("clicked")
    }
    return(
        <div className = "border">
            <div>
               <h3>Choose a Pdf</h3>
               <button onClick = {clickhandler}> Choose</button>
            </div>
        </div>
    );
};
export default sidebar;